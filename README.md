<!--
    File: README.md
    Last updated: 10.01.2026 18:45 CET
    Version: 2.1
-->

# Timezone Converter

A carefully crafted timezone converter for planning and comparing international times.
Designed for clarity: instead of showing multiple technical timestamps, the tool presents
one clear, human-readable result in your local timezone.

## Features

- 50+ timezone abbreviations (CET, PST, EST, JST, GMT, etc.)
- Alphabetically sorted dropdowns
- Explicit target date & time input
- Clear result sentence in local timezone
- Metallic (neumorphic) layout as default
- Optional flat layout
- Persistent layout preference (local browser storage)
- Responsive design
- No dependencies (pure HTML, CSS, JavaScript)
- Offline-capable

## Typical Use Cases

- "Meeting at 10pm UTC – what does that mean for me?"
- Planning international calls
- Verifying meeting invitations
- Comparing future dates across regions

## Installation

Download or clone the repository and open `timezone-converter.html` in a browser.

No build step, no server, no configuration required.

## Usage

1. Select your timezone
2. Select the target timezone
3. Enter the desired target date & time
4. Click Convert
5. Read the single clear result statement

The UI intentionally avoids showing multiple competing timestamps.

## Layout Styles

- Metallic (default): premium, tactile, app-like appearance
- Normal: flat, minimal, classic web style

The selected layout is stored locally using `localStorage`.

## Technical Overview

- HTML5
- CSS3 (flat & neumorphic)
- Vanilla JavaScript
- Intl.DateTimeFormat API
- IANA Timezone Database
- LocalStorage for UI preferences only

## Project Structure

timezone-converter/
├── timezone-converter.html
├── styles.css
├── styles_metallic.css
├── timezone-data.js
├── app.js
├── README.md
├── README_DE.md
└── LICENSE

## Changelog

### Version 2.1 – January 2026
- Metallic layout set as default
- Result UX simplified to a single explanatory sentence
- Clear separation between target time and local result
- Visual emphasis on the result section
- Improved layout toggle clarity

### Version 2.0 – December 2025
- Separate date and time selection
- Dual layout system
- Persistent layout preference

## License

MIT License.

## Disclaimer

This tool was created with assistance from generative AI.
Always verify critical meeting times independently.
