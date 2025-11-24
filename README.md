# React Native Test Project

A simple React Native project for testing component previews.

## Preview Library

This project uses **react-native-web** for previewing React Native components in the browser. The preview system (as seen in `gushi/preview_generator.py`) uses:

- **react-native-web**: Converts React Native components to web-compatible components
- Loaded via CDN: `https://unpkg.com/react-native-web@latest/dist/index.js`

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on different platforms:
- **Web**: `npm run web` (uses react-native-web)
- **iOS**: `npm run ios` (requires Xcode on macOS)
- **Android**: `npm run android` (requires Android Studio)

## Project Structure

```
react-native-test/
├── App.tsx          # Main application component
├── index.js         # Entry point
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── babel.config.js  # Babel configuration
└── app.json         # Expo configuration
```

## Testing Component Previews

The `App.tsx` file contains sample React Native components that can be used for testing:
- View components
- Text components
- TouchableOpacity (buttons)
- StyleSheet styling
- State management

These components can be previewed in the browser using react-native-web, which is the same library used by the preview generator system.

## Notes

- This project uses Expo for easier setup and development
- react-native-web is included as a dependency for web preview support
- The preview system compiles React Native TSX files and renders them using react-native-web in an iframe

