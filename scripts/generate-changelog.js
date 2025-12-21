import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function parseChangelog(content) {
  const releases = [];
  const releaseBlocks = content.split('#NEWRELEASE').filter(block => block.trim());

  for (const block of releaseBlocks) {
    const titleMatch = block.match(/#TITLE\s+(.+)/);
    const dateMatch = block.match(/#DATE\s+(\d{4}-\d{2}-\d{2})/);
    const bodyMatch = block.match(/#BODY\s+([\s\S]+?)(?=#NEWRELEASE|$)/);

    if (titleMatch && dateMatch && bodyMatch) {
      releases.push({
        version: titleMatch[1].trim().split(' ')[0], // Extract version (e.g., "v2.4")
        title: titleMatch[1].trim() // remove version and - or —
          .replace(/^v?\d+\.\d+(\.\d+)?\s*[-—]\s*/, ''),
        date: dateMatch[1].trim(),
        body: bodyMatch[1].trim()
      });
    }
  }

  return releases;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function extractContributors(body) {
  const contributors = new Set();
  
  // Extract from "by @user in url" pattern
  const byPattern = /by\s+(@[\w-]+)\s+in\s+https?:\/\/[^\s]+/gi;
  let match;
  while ((match = byPattern.exec(body)) !== null) {
    contributors.add(match[1]);
  }
  
  // Extract from "New Contributors" section
  const newContribMatch = body.match(/##\s+New Contributors[\s\S]*?($|(?=##))/i);
  if (newContribMatch) {
    const contributorPattern = /@[\w-]+/g;
    let contributorMatch;
    while ((contributorMatch = contributorPattern.exec(newContribMatch[0])) !== null) {
      contributors.add(contributorMatch[0]);
    }
  }
  
  return Array.from(contributors).sort();
}

function cleanChangelogBody(body) {
  return body
    // Remove "New Contributors" section
    .replace(/##\s+New Contributors[\s\S]*?($|(?=##))/gi, '')
    // Remove "How to install" section
    .replace(/##\s+.*How to install[\s\S]*?($|(?=##))/gi, '')
    // Remove "by @user in url" pattern
    .replace(/\s+by\s+@[\w-]+\s+in\s+https?:\/\/[^\s]+/gi, '')
    // Clean up extra newlines
    .trim();
}

function generateAstroContent(releases) {
  let content = '';

  releases.forEach((release, index) => {
    const isLatest = index === 0;
    
    // Extract contributors before cleaning
    const contributors = extractContributors(release.body);
    
    // Clean and convert markdown to HTML
    const cleanedBody = cleanChangelogBody(release.body);
    const rawHtml = marked.parse(cleanedBody);
    
    // Add contributors section if any found
    let contributorsHtml = '';
    if (contributors.length > 0) {
      contributorsHtml = `\n<h2>❤️ Code Contributors</h2>\n<p>${contributors.join(', ')} on GitHub</p>`;
    }

    // Combine content with contributors
    const fullHtml = rawHtml + contributorsHtml;

    // Escape for template literal: \ -> \\, ` -> \`, ${ -> \${
    const htmlContent = fullHtml
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${');

    content += `\t\t\t\t<ChangelogItem
\t\t\t\t\tversion="${escapeHtml(release.version)}"
\t\t\t\t\ttitle="${escapeHtml(release.title)}"
\t\t\t\t\tdate="${release.date}"${isLatest ? '\n\t\t\t\t\tisLatest={true}' : ''}
\t\t\t\t\thtmlContent={\`${htmlContent}\`} />\n\n`;
  });

  return content.trimEnd();
}

function updateChangelogPage(releases) {
  const changelogPath = join(__dirname, '..', 'src', 'pages', 'changelog.astro');
  let changelogContent = readFileSync(changelogPath, 'utf-8');

  const generatedContent = generateAstroContent(releases);

  // Find the releases container and replace its content
  const startMarker = '<!-- RELEASES_START -->';
  const endMarker = '<!-- RELEASES_END -->';

  const startIndex = changelogContent.indexOf(startMarker);
  const endIndex = changelogContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find release markers in changelog.astro');
    console.error('Please ensure <!-- RELEASES_START --> and <!-- RELEASES_END --> are present');
    process.exit(1);
  }

  const before = changelogContent.substring(0, startIndex + startMarker.length);
  const after = changelogContent.substring(endIndex);

  const newContent = `${before}\n${generatedContent}\n\t\t\t\t${after}`;

  writeFileSync(changelogPath, newContent, 'utf-8');
  console.log(`✅ Updated changelog.astro with ${releases.length} releases`);
}

// Main execution
try {
  const changelogMdPath = join(__dirname, '..', 'changelog.md');
  const changelogMdContent = readFileSync(changelogMdPath, 'utf-8');

  const releases = parseChangelog(changelogMdContent);
  
  if (releases.length === 0) {
    console.warn('⚠️  No releases found in changelog.md');
    process.exit(0);
  }

  console.log(`📦 Found ${releases.length} releases`);
  updateChangelogPage(releases);
  console.log('✨ Changelog generation complete!');
} catch (error) {
  console.error('❌ Error generating changelog:', error);
  process.exit(1);
}
