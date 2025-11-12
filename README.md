# YouTube Shortcuts

A lightweight Chrome extension that adds fast, customizable keyboard shortcuts to YouTube, allowing you to control playback without touching the mouse.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?logo=google-chrome)
![License](https://img.shields.io/badge/license-MIT-green)

## Overview

YouTube has built-in shortcuts, but they're limited and inconsistent across layouts. **YouTube Shortcuts** streamlines common actions—seek, speed, volume, captions, theater/fullscreen—using keys you choose. 

Built with simplicity in mind: no external dependencies, no tracking, and no data collection.

## Features

✨ **Custom Keybindings** - Map your preferred keys for seek, speed, volume, captions, and mode toggles

⏱️ **Precise Seeking** - Jump forward/backward in configurable increments for tight control

🎬 **Playback Speed Control** - Quickly adjust speed up/down or reset to normal

🔊 **Volume Control** - Increase/decrease volume without opening the player UI

💬 **Caption Toggle** - Turn subtitles on/off instantly

🖥️ **Mode Toggles** - Switch to theater/fullscreen with single-press keys

🎯 **Per-Tab Operation** - Works only on YouTube tabs; does nothing elsewhere

🔒 **Privacy-First** - No analytics, no accounts, no external calls

## Installation

### From Source

1. Clone or download this repository:
```bash
   git clone https://github.com/yourusername/youtube-shortcuts.git
```

2. Open Chrome and navigate to `chrome://extensions`

3. Enable **Developer mode** (toggle in top right corner)

4. Click **Load unpacked** and select the project folder

5. The extension is now installed and ready to use!

### Updating

After making changes to the code, click the **Reload** button on the extension card in `chrome://extensions`.

### How It Works

Commands are handled via the background service worker and content script—they work whenever a YouTube tab is active, **no focus required**.

### Default Shortcuts

You can customize these in `manifest.json`:

| Action | Default Key |
|--------|-------------|
| Seek Backward | `J` |
| Seek Forward | `L` |
| Play/Pause | `K` |
| Increase Speed | `>` (Shift + .) |
| Decrease Speed | `<` (Shift + ,) |
| Reset Speed | `=` |
| Volume Up | `↑` (Up Arrow) |
| Volume Down | `↓` (Down Arrow) |
| Toggle Captions | `C` |
| Toggle Theater Mode | `T` |
| Toggle Fullscreen | `F` |

### Customization

Edit the keybindings in `manifest.json` under the `commands` section:
```json
"commands": {
  "seek-backward": {
    "suggested_key": {
      "default": "Alt+J"
    },
    "description": "Seek backward"
  }
}
```

## Development

### Project Structure
```
youtube-shortcuts/
├── manifest.json       # Extension configuration and permissions
├── background.js       # Service worker for handling commands
├── content.js         # Content script injected into YouTube pages
├── popup.html         # Extension popup UI (optional)
├── popup.js           # Popup logic (optional)
└── README.md          # This file
```

### Technologies Used

- **JavaScript** - Core extension logic
- **Chrome Extensions API** - Tabs API, Commands API, Scripting API
- **HTML/CSS** - UI components (if applicable)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Privacy

This extension:
- ✅ Does **NOT** collect any user data
- ✅ Does **NOT** track browsing history
- ✅ Does **NOT** make external network requests
- ✅ Only requests permissions necessary for YouTube playback control

## Support

If you encounter any issues or have suggestions:
- Open an [issue](https://github.com/yourusername/youtube-shortcuts/issues)
- Or reach out via [your contact method]

---

Made with ❤️