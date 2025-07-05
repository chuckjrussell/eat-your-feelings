# Eat Your Feelings

Eat Your Feelings is a cross-platform mobile application built with [Expo](https://expo.dev) and React Native. The app leverages file-based routing and modern navigation patterns to deliver a smooth development and user experience.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Cut for Time](#cut-for-time)

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npm start
   ```

   This will launch the Expo development server. You can then open the app in:

   - A development build
   - Android emulator
   - iOS simulator
   - [Expo Go](https://expo.dev/go)

## Available Scripts

- `npm start` — Start the Expo development server.
- `npm run android` — Open the app in an Android emulator.
- `npm run ios` — Open the app in an iOS simulator.
- `npm run web` — Run the app in a web browser.
- `npm run lint` — Lint the project using Expo's ESLint config.
- `npm test` — Run tests using Jest.
- `npm run reset-project` — (If available) Resets the project to a blank state.

## Project Structure

- `app/` — Main application code and screens (file-based routing).
- `api/` — API utilities and types.
- `assets/` — Fonts and images.
- `components/` — UI components for supporting the pages.

## Cut for Time

React native testing library currently has a version mismatch with React 19 and as a result,
unit tests needing RNTL aren't working, and finding a woking version is certainly possible, but would
likely take the entire time, so I've cut addressing that and left in a demo of what that file might look
like to test UI structures.

I've also not fully fleshed out the test suites because of time, but I've integrated Jest and
added a few basic tests to demonstrate what this project would look like with more time and to become production ready.

This has been tested in web and android. It very likely works in IOS as well, but hasn't been tested, so I can make guarantees about its performance.
