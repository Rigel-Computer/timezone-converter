<!--
    File: README.md
    Last updated: 04.12.2025 17:30 CET
    Version: 2.0
-->

# Timezone Converter

An elegant timezone converter for worldwide video conferences and international meetings. Perfect for anyone who receives meeting invitations with timezone abbreviations like CET, PST, or EST and wants to quickly know their local time.

## Features

- **50+ Timezone Abbreviations** (CET, PST, EST, JST, GMT, etc.)
- **Alphabetically Sorted Dropdowns** for easy navigation
- **Separated Date & Time Selection** - Calendar picker for dates, dropdown for hours
- **Two Visual Styles** - Switch between Normal and Neumorphic layouts
- **Persistent Preferences** - Your style choice is saved automatically
- **Responsive Design** - Works on Desktop, Tablet, and Mobile
- **No Dependencies** - Pure HTML, CSS, and JavaScript
- **Offline-Capable** - Works without internet connection
- **Cross-Platform** - Mac, PC, Linux compatible

## Use Cases

Perfect for scenarios like:
- "Meeting at 3pm CET" → What's that in my timezone?
- International team coordination
- Scheduling across multiple timezones
- Quick timezone reference for travelers
- Planning future meetings with specific dates

## Installation

### Option 1: Download ZIP
1. Download the latest release
2. Extract the ZIP file
3. Open `timezone-converter.html` in your browser

### Option 2: Clone Repository
```bash
git clone https://github.com/Rigel-Computer/timezone-converter.git
cd timezone-converter
open timezone-converter.html
```

### Option 3: Direct Use
No installation needed! Just download and open in any modern browser.

## Usage

### Basic Conversion
1. Select your timezone from the dropdown (e.g., CET)
2. Select target timezone (e.g., PST)
3. Optionally select a date using the calendar picker
4. Optionally select a time from the hourly dropdown (00:00 - 23:00)
5. Click "Convert" to see the result

### Date & Time Selection
- **Date:** Click the calendar icon to select any date
- **Time:** Choose from full hours (00:00 to 23:00) via dropdown
- **Default:** Leave both empty to use current date and time
- **Combinations:** You can select date only, time only, or both

### Layout Styles
Choose between two distinct visual styles:
- **Normal Layout:** Clean, flat design with blue accents
- **Neumorphic Layout:** Premium 3D design with metallic silver effects

Your choice is saved automatically and persists across browser sessions.

## Project Structure

```
timezone-converter/
├── timezone-converter.html    # Main HTML structure
├── styles.css                 # Normal flat design
├── styles_metallic.css        # Neumorphic metallic design
├── timezone-data.js           # 50+ timezone abbreviations
├── app.js                     # Application logic & conversion functions
├── timezone_clock_icon.ico    # Application icon
├── LICENSE                    # MIT License
├── README.md                  # This file (English)
└── README_DE.md               # German documentation
```

## Supported Timezones

### Popular Abbreviations
- CET/CEST - Central European (Summer) Time
- GMT/BST - Greenwich Mean Time / British Summer Time
- EST/EDT - Eastern Standard/Daylight Time (USA)
- CST/CDT - Central Standard/Daylight Time (USA)
- MST/MDT - Mountain Standard/Daylight Time (USA)
- PST/PDT - Pacific Standard/Daylight Time (USA)
- JST - Japan Standard Time
- AEST/AEDT - Australian Eastern Standard/Daylight Time
- IST - India Standard Time
- SGT - Singapore Time
- And 40+ more!

## Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Dual style system (flat & neumorphic)
- **Vanilla JavaScript** - No frameworks or libraries
- **IANA Timezone Database** - Accurate timezone calculations
- **LocalStorage API** - Persistent user preferences

### Browser Compatibility
- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Opera (v76+)

### Key Features
- **Responsive Design:** 1200px max-width with breakpoints at 768px and 480px
- **Real-time Conversion:** Uses JavaScript Intl.DateTimeFormat API
- **Error Prevention:** Calendar picker and dropdown menus prevent input errors
- **Smart Defaults:** Automatically uses current date/time when not specified
- **Style Persistence:** Uses LocalStorage to remember your layout preference

### What's New in Version 2.0

**Removed:**
- Country search feature (too error-prone with typos)

**Added:**
- Separated date and time selection
- Calendar picker for date input
- Hourly dropdown menu (00:00 - 23:00)
- Two distinct visual styles
- Layout switcher with persistent preferences
- Full English interface

**Improved:**
- More reliable input validation
- Better error prevention
- Cleaner user interface
- Enhanced mobile responsiveness

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- Add more timezone abbreviations
- Implement dark mode as third style option
- Add timezone favorites/bookmarks
- Create browser extension version
- Add keyboard shortcuts
- Implement timezone search/filter
- Add "Share result" functionality
- Create mobile app version

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created for international teams and remote workers worldwide.

**Version 2.0** - Enhanced with improved UX and dual layout system.

## Support

If you find this tool helpful, please:
- ⭐ Star the repository
- 🐛 Report bugs via Issues
- 💡 Suggest features via Discussions
- 📢 Share with your international teams
- 🔄 Contribute improvements

## Disclaimer

This tool was created with assistance from Generative AI (Claude by Anthropic).

While this converter uses the IANA timezone database for accurate calculations, not all timezone combinations have been individually tested. Please verify critical meeting times independently. No warranty or guarantee is provided for the accuracy of conversions.

## Changelog

### Version 2.0 (December 2025)
- Removed country search feature
- Added separated date and time selection
- Implemented calendar picker for dates
- Added hourly dropdown menu for time
- Created dual layout system (Normal & Neumorphic)
- Added layout preference persistence
- Full English interface
- Enhanced error prevention

### Version 1.0 (December 2025)
- Initial release
- 50+ timezone abbreviations
- Country search functionality
- Basic date/time selection
- Single layout design
