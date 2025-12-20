#NEWRELEASE
#TITLE v2.4 — Taskbar Widget Buttons & More
#DATE 2025-12-20
#BODY <img width="643" height="158" alt="image" src="https://github.com/user-attachments/assets/c1b9b0d8-fdde-4451-8f9c-2bdc30257218" />

## 📝 Changelog
### Taskbar Widget updates:
* ⏯️ Added a new setting to enable new Taskbar Widget Media Controls buttons by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/213
* 🎨 Added a new setting to enable new subtle animations when a new song shows up
* The Taskbar Widget will now automatically align next to the native widget if the setting is enabled, enabling support for left-aligned taskbars
* If the artist name is empty, the title text will now be centered
* Improved cover alignment by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/185
* Other improvements and optimizations to the widget

### Other updates:
* Added debug/error logging to `%AppData%\FluentFlyout\` by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/189
* 🎉 Windows 10 compatibility — FluentFlyout will now fully work on Windows 10, expect less visual issues (updated MicaWPF package version to 6.3.2) by @Simnico99 in https://github.com/unchihugo/FluentFlyout/pull/216
* Updated settings window UI
* Attempted to fix text overlap issues on the Lock Keys flyouts
* Updated translations (thanks to @genotypePL, @maksymser, @ysfemreAlbyrk, @Xshadow9, @CC-D-Y, @weiss-rn, @logounet, @Pigeon0v0, @Aris-Offline, @Ste3798, @Nikolai-Misha, @xsm2 and others on Weblate!)
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/2.3.5...v2.4.0

## New Contributors
* @Simnico99 made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/216

## 📦 How to install
⬆️ **The update is live on Microsoft Store.**
📦 Follow the installer instructions for manual installing/updating, or install the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version for automatic updates.
#NEWRELEASE
#TITLE v2.3.5 — Taskbar Widget Positioning!
#DATE 2025-12-03
#BODY ## 📝 Changelog
* 🛠️ **Taskbar Widget position options**: Choose to align the new taskbar widget to the left (default), center or right (next to the tray icon)! by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/178
* 🚀 **Media Flyout performance updates**: No more lag after rapidly pressing media keys! by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/173
* Fixed issue where the "Launch on Startup" setting would always be switched off
* Update translations from Hosted Weblate (thanks to @se34k, @CielWhitefox, @thinkii, @v3vishal, @yoyo435, @ThePerson-o, @fortIItude, @xsm2, @weiss-rn and everyone else on Weblate) by @weblate in https://github.com/unchihugo/FluentFlyout/pull/166
* Refactor licensing for Microsoft Store version
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v2.3.0...2.3.5

### v2.3.6: 
- Fixed Taskbar Widget cover alignment when switching between placeholder and cover in https://github.com/unchihugo/FluentFlyout/pull/185

## 📦 How to install
⬆️ **The update is live on Microsoft Store.**
📦 Follow the installer instructions for manual installing/updating, or install the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version for automatic updates.
#NEWRELEASE
#TITLE v2.3 — Windows Taskbar Widget!
#DATE 2025-11-28
#BODY <img width="50%" alt="FluentFlyoutDemo9" src="https://github.com/user-attachments/assets/473a5b0a-230f-4230-b3c9-b3ecb5f66caf" />


## 📝 Changelog
* ⭐ **Media Flyout Taskbar Integration**: A compact, built-in widget that lives right on your Windows Taskbar for instant access to your media, with customization options! by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/159
* 📥 **Hide Tray Icon option**: you can now choose to hide the Tray Icon completely!
* Fix Media Player Info sometimes displaying Windows Explorer, by @kitUIN in https://github.com/unchihugo/FluentFlyout/pull/158
* Pressing the start menu entry (or launching FluentFlyout) a second time will now open settings
* Add Premium support for Windows Store (still completely free on GitHub)
* Update translations from Hosted Weblate (thanks to everyone on Weblate), by @weblate in https://github.com/unchihugo/FluentFlyout/pull/157
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v2.2.0...v2.3.0

## 📦 How to install
⬆️ **The update is live on Microsoft Store.**
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can also update FluentFlyout using the `.zip` installer if you want to update immediately.
#NEWRELEASE
#TITLE v2.2 — QoL and Performance updates
#DATE 2025-11-22
#BODY ## 📝 Changelog
* 🎨 The seek bar on the Media Flyout is now properly accent-colored instead of grey on the progressed side!
* 💾 Media Flyout now caches the media player name and icon instead of searching on every flyout—you might notice improved performance
* Added 5 new languages (Arabic, Traditional Chinese, Czech, French, German)
* Right-to-left languages will now change every window and flyout's UI to follow right-to-left design
* Update translations from Hosted Weblate (Thanks to @LOGYT-Eberk, @xsm2, @nath89-52, @tnhung2011, @ebraheemelteyb, @Atalanttore, @bropines, @Nikolai-Misha, @CC-D-Y, @Pigeon0v0 and others on Weblate!)
* Updated READMEs
* Other bug fixes
* By @unchihugo 
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v2.1.0...v2.2.0

## 📦 How to install
⬆️ **The update is live on Microsoft Store.**
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can also update FluentFlyout using the `.Msixbundle` installer if you want to update immediately, as they're interchangeably compatible.
#NEWRELEASE
#TITLE v2.1 — Always Display, Player Icons and Names & more Acrylic!
#DATE 2025-11-03
#BODY ## 📝 Changelog
* 📌 **Always Display Widget** — pin the Media Flyout to your desktop at all times with this new toggle, and dismiss it with a new close button! By @kitUIN in https://github.com/unchihugo/FluentFlyout/pull/120
* ✒️ Media Flyout now displays the proper **app icon and name** from the media player (e.g. Spotify will now display the Spotify icon and name instead of "spotifyab")!
* 🎨 Added Acrylic Blur toggles to "Next Up" and Lock Keys flyouts so you can have the new look on all flyouts!
* Added fallback to Chinese and Japanese fonts (MS YaHei and MS JhengHei) to improve appearance and CJK character support 
* Fixed flyout mouse hover issue
* Settings will now be shown to new users on first launch
* Update translations from Hosted Weblate (Thanks to @tnhung2011, @Nikolai-Misha, @bropines, @LOGYT-Eberk, @Y-PLONI, @xsm2, @gustavo-bozzano, @ysfemreAlbyrk and others on Weblate!)
* More bug fixes
* By @unchihugo 
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v2.0.0...v2.1.0

## 👏 New Contributors
* @kitUIN made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/120
* @Copilot made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/135

## 📦 How to install
⬆️ **The update is live on Microsoft Store.**
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can also update FluentFlyout using the `.Msixbundle` installer if you want to update immediately, as they're interchangeably compatible.
#NEWRELEASE
#TITLE v2.0 — Acrylic Window, Background Styles & Localization!
#DATE 2025-10-25
#BODY ### 🎨 Update 2.0 changes how the Media Flyout looks with two new customization features! 
<img width="65%" alt="FluentFlyoutDemo7" src="https://github.com/user-attachments/assets/8b29341a-d715-4d12-ad20-0ea18b861935" />
<img width="65%" alt="FluentFlyoutDemo8" src="https://github.com/user-attachments/assets/abce876f-896a-42e8-97a7-e7e3ce4693fd" />

## 📝 Changelog
* 🎊 Media flyout **Acrylic Window** toggle — If you think Mica blur feels outdated, upgrade to a sleek Acrylic blur effect for a more modern and native-like experience!
* 🎨 **Blurred Background Styles** — Select from three unique background styles, derived from the cover image, for the media flyout! Pair this with Acrylic Window for a sleek and modern aesthetic.
* Fix flyout appearing on media change bug
* 🌐 Added Localization — From now on, the UI language will follow your system if it's available! Head over to [Weblate](https://hosted.weblate.org/engage/fluentflyout/) to help us with translating!
* Update README and CONTRIBUTING.md
* Bug fixes
* By @unchihugo 
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.5.0...v2.0.0

## 👏 New Contributors
* @weblate made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/113
* @tnhung2011 made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/113

## 📦 How to install
⬆️ **The update is live on Microsoft Store.**
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can also update FluentFlyout using the `.Msixbundle` installer if you want to update immediately, as they're interchangeably compatible.
#NEWRELEASE
#TITLE v1.5.0 — Seek Bar & Lock Keys QoL Update!
#DATE 2025-10-11
#BODY **This update introduces new QoL features to the Seek Bar and Lock Keys Popups!**
If the update isn't out for you yet on the Microsoft Store, you can also update it manually (instructions at the 'How to install' section).

🎊 A bunch of thanks to @nopeless for adding all kinds of new features! I'd also like to thank everyone for 50 thousand installs! ❤️

## 📝 Changelog
* ⏯️ Added new toggleable feature to pause all other media if one is being focused on (by @nopeless in https://github.com/unchihugo/FluentFlyout/pull/100)
* 📴 Added an option to disable the insert toggle popup only from the lock keys (by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/103)
* 🛠️ Changed the behavior of the insert toggle popup to display "Insert Pressed" instead of guessing Insert/Overwrite (by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/103)
* ✅ The Seek Bar will now automatically hide itself if the media doesn't support it (by @nopeless in https://github.com/unchihugo/FluentFlyout/pull/97)
* Improved Chinese translation in README.zh.md (by @Hykerisme in https://github.com/unchihugo/FluentFlyout/pull/72)
* Added new contributors to all READMEs (by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/104)
* Bug fixes/improvements to the Seek Bar
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.4.1...v1.5.0

## 👏 New Contributors
* @Hykerisme made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/72
* @nopeless made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/97

## 📦 How to install
⬆️ **If the update is not yet available on Microsoft Store:**
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can update FluentFlyout using the `.msixbundle` installer if you want to update immediately, as they're interchangeably compatible. ➡️ [.msixbundle install tutorial](https://github.com/unchihugo/FluentFlyout?tab=readme-ov-file#using-msixbundle-installer)
#NEWRELEASE
#TITLE v1.4.1
#DATE 2025-03-20
#BODY This release comprises of QoL changes and bug fixes. It's already live on the Microsoft Store!
## 📝 Changelog
* Updated window hiding logic in MainWindow to allow flyout to come back up mid-hide animation, fixes https://github.com/unchihugo/FluentFlyout/issues/47
* Added insert key state changed detection for LockWindow to detect insert/overwrite, closes https://github.com/unchihugo/FluentFlyout/issues/50
* Added small margin for text width in NextUpWindow to prevent ellipsis on some occasions, fixes https://github.com/unchihugo/FluentFlyout/issues/51
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.4.0...v1.4.1

## 📦 How to install
⬆️ **The update is live on Microsoft Store.**
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can update FluentFlyout using the .msixbundle installer if you want to update immediately, as they're interchangeably compatible. ➡️ [.msixbundle install tutorial](https://github.com/unchihugo/FluentFlyout?tab=readme-ov-file#using-msixbundle-installer)
#NEWRELEASE
#TITLE v1.4.0 - Seek Bar Support!
#DATE 2025-03-02
#BODY <img width="65%" src="https://github.com/user-attachments/assets/9396a4d6-b5b2-48f4-bf44-e587ca2eea9d">

## 📝 Changelog
* ⏯️ Added **Media Seekbar**, **Duration**, and toggle button in settings by @AksharDP in https://github.com/unchihugo/FluentFlyout/pull/55
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.3.4...v1.4.0

## New Contributors
* @AksharDP made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/55

## 📦 How to install
⬆️ **If the update is not yet available on Microsoft Store:**
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can update FluentFlyout using the .msixbundle installer if you want to update immediately, as they're interchangeably compatible. ➡️ [.msixbundle install tutorial](https://github.com/unchihugo/FluentFlyout?tab=readme-ov-file#using-msixbundle-installer)
#NEWRELEASE
#TITLE v1.3.4
#DATE 2024-11-24
#BODY This update introduces a new settings management system that replaces Microsoft's built-in system with a more robust custom system. 
**This will prevent settings from resetting every update or reinstall**. 

Unfortunately, the settings will reset one last time before converting to the new settings system. After v1.3.4, all settings will migrate to new versions without resetting!
## 📝 Changelog
* Rewrote Settings Management for Update Compatibility by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/42
* Corrected FullscreenDetector logic by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/37 (Thanks @Yasunaii again for noticing this)
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.3.2...v1.3.4

## 📦 How to install
⬆️ **If the update is not yet available on Microsoft Store:**
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can update FluentFlyout using the .msixbundle installer if you want to update immediately, as they're interchangeably compatible. ➡️ [.msixbundle install tutorial](https://github.com/unchihugo/FluentFlyout?tab=readme-ov-file#using-msixbundle-installer)
#NEWRELEASE
#TITLE v1.3.2 - Fix Flyout Disabled Bug
#DATE 2024-11-12
#BODY ## 📝 Changelog
* Fixed flyout enabled/disabled conditions by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/36
* Fixed DirectX fullscreen detector toggle being reversed  by @unchihugo in https://github.com/unchihugo/FluentFlyout/pull/37
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.3.1...v1.3.2

## 📦 How to install
⬆️ The update is live on Microsoft Store.
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can update FluentFlyout using the .msixbundle installer if you want to update immediately, as they're interchangeably compatible. ➡️ [.msixbundle install tutorial](https://github.com/unchihugo/FluentFlyout?tab=readme-ov-file#using-msixbundle-installer)
#NEWRELEASE
#TITLE v1.3.1 - QoL updates, more Customization and Bug Fixes
#DATE 2024-11-12
#BODY ## 📝 Changelog
* ✅ Added setting to **enable/disable main media player flyout** feature by @unchihugo, if you use FluentFlyout for its other flyouts. (Suggested by @havrlisan, u/epicc123)
* 👏 **Added manual light/dark mode theme switcher** by @LiAuTraver. (Suggested by @Nex457 and a bunch of others)
* 🐛 Added new setting to automatically **turn off FluentFlyout when a DirectX exclusive fullscreen game is running** by @unchihugo, this should fix all edge cases where fullscreen games still minimize after a flyout is activated. (Thanks @Yasunaii and everyone else for helping out!)
* New, minimal tray icon option by @unchihugo, if you'd like an icon that blends in more with the Windows 11 taskbar icons. (Suggested by u/SuccessfulChest4479, u/Muted_Sentence1279)
* Added a SongImagePlaceholder icon by @unchihugo, if there's no icon available.
* Fixed animation off visual bug by @unchihugo. (Thanks, u/ozumando)
* Added a switch to toggle normal/bold look for the lock flyout by @unchihugo.
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.3.0...v1.3.1

## 🎉 New Contributors
* @LiAuTraver made their first contribution in https://github.com/unchihugo/FluentFlyout/pull/22

## 📦 How to install
⬆️ The update is live on Microsoft Store ✅ (Recommended method)
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can update FluentFlyout using the .msixbundle installer if you want, as they're interchangeably compatible. ➡️ [.msixbundle install tutorial](https://github.com/unchihugo/FluentFlyout?tab=readme-ov-file#using-msixbundle-installer)

#NEWRELEASE
#TITLE v1.3.0 - Introducing the Lock Keys flyout!
#DATE 2024-11-05
#BODY <img width="65%" src="https://github.com/user-attachments/assets/76c25d0a-4b2a-4443-a15b-d0e62441bf0b">

## 📝 Changelog
By @unchihugo:
* ➡️ **Introducing the Lock Keys flyout**: the flyout displays the status of your selected lock key at a glance, especially handy for keyboards/laptops without a proper lock key indicator! (suggested by @leviathanaxeislit)
* ✅ Adjustable easing styles for the flyout animations (suggested by @ottozumkeller)
* Updated UI and text
* 👏 **Centered thumbnail image on flyouts properly**
* Made Mica effect even more reliable
* Made "Next Up" flyout more reliable, and solved issues making it display more than once at a time
* Introduced more languages (CN and NL) to README.md
* Workaround for startup task not changing (MSIX issue)
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.2.3...v1.3.0

## 📦 How to install
⬆️ The update is live on Microsoft Store ✅ (Recommended)
📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can update FluentFlyout using the .msixbundle installer if you want, as they're interchangeably compatible. ➡️ [.msixbundle install tutorial](https://github.com/unchihugo/FluentFlyout?tab=readme-ov-file#using-msixbundle-installer)

Try out the new Lock Keys flyout and let me know if you encounter any issues! 💖
#NEWRELEASE
#TITLE v1.2.3 - New customization settings and bug fixes
#DATE 2024-11-02
#BODY @unchihugo here, I appreciate everyone's support a lot! I'm still working on more flyouts (capslock, numlock, etc.) and the option to disable volume key triggers, as some of you suggested. Here's what's new so far:
## 📝 Changelog
* 🐛 **Improve flyout focus & topmost behavior** to prevent stealing focus in PR https://github.com/unchihugo/FluentFlyout/pull/7, fixing cases of bug #5 happening (thanks @Nex457)
* ✅ **Added two new settings:**
  * Alter tray icon left click behavior: choose between opening settings (default) and showing main flyout, if you would like to use the tray icon as a more integrated flyout button in the taskbar (suggestion by [u/moccatune](https://www.reddit.com/user/moccatune/))
  * Choose between left or center title & artist alignment. Definitely try this out, it feels very clean! (suggestion by @AsvnDG)
* Updated settings UI and text
* Made Mica effect more reliable
* Other bug fixes
* Codebase related stuff:
  * Added comments in a lot of areas
  * Created WindowHelper.cs class to have things a bit more organized
* **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.2.2...v1.2.3
* _tested on Windows 11, common use cases_

📦 If you've installed the [Microsoft Store](https://apps.microsoft.com/detail/9n45nsm4tnbp) version, you can update FluentFlyout using the .msixbundle installer as they're interchangeably compatible. It might take a few more days for the update to appear on MS Store.  
➡️ [.msixbundle tutorial](https://github.com/unchihugo/FluentFlyout?tab=readme-ov-file#using-msixbundle-installer)

Please try out these new features and let me know if you encounter any issues! 💖
#NEWRELEASE
#TITLE v1.2.2 - Added "Up Next" flyout and more customization!
#DATE 2024-10-31
#BODY <img width="60%" alt="FluentFlyoutDemo4" src="https://github.com/user-attachments/assets/e866ef04-4bd9-44b5-894d-f62536676542">

### Changelog
- Added "Up Next" flyout (experimental) that displays what's playing next after each song/video
- Added images to each section in settings, making it easier to identify which flyout it belongs to
- Made input boxes smoother and added validation
- Added option to disable media player info
- Updated settings and flyout UI and settings text
- Other bug fixes
- **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.1.0...v1.2.2
#NEWRELEASE
#TITLE v1.1.0
#DATE 2024-10-27
#BODY # Public Release Version
Gradually rolling out to Microsoft Store
## Changelog
- Added Repeat One and Repeat All
- Added Shuffle
- Made flyout animation speed adjustable
- Improved settings UI and added scroll
- Improved Windows 10 compatibility
- Improved code maintainability
- Fixed bug where multiple Settings windows could be opened
- Fixed play/pause visual bug
- Other bug fixes
- **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.0.5-alpha...v1.1.0
#NEWRELEASE
#TITLE v1.0.5-alpha
#DATE 2024-10-23
#BODY # Closed Alpha Release 3
Ironing out/final stages of the project to get it ready to be submitted for certification to Microsoft Store and public launch
## Changelog
- Removed WinForms dependencies, resulting in a package size decrease (~30MB space saved) to ~170MB, once ready
- Improved Tray UI and functionality
- Updated flyout and settings UI
- Fully implemented Light mode
- Added flyout duration setting
- Added more flyout positions (top left, top center, top right)
- Fixed launch on startup option
- Bug fixes
- **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.0.2-alpha...v1.0.5-alpha
## How to install
> [!Important]
> if you're downloading FluentFlyout for the first time, follow these instructions:
> 1. Download **"FluentFlyout.cer"** (I'm too poor to afford a real certificate)
> 2. Open the certificate and press **"Install Certificate..."**
> 3. On the Certificate Import Wizard, select **"Local Machine"**, press **"Next"** and grant Admin Access
> 4. Select **"Place all certificates in the following store"**, then **"Browse..."**, choose **"Trusted Root Certification Authorities"** and **"OK"**
> 5. Finally, press **"Next"** and then **"Finish"**. It might ask you to confirm, press **Yes**
1. Download **"FluentFlyout_1.0.5_x64.msixbundle"**
2. The App Installer will pop up, press **"Install"**, or **"Update"** if you've installed FluentFlyout before
3. done! try playing music and use your media or volume keys
> Looking for Settings? You can access it by clicking the system tray icon
#NEWRELEASE
#TITLE v1.0.2-alpha
#DATE 2024-10-21
#BODY **Full Changelog**: https://github.com/unchihugo/FluentFlyout/compare/v1.0.0-alpha...v1.0.2-alpha
#NEWRELEASE
#TITLE v1.0.0-alpha
#DATE 2024-10-19
#BODY No description provided.
