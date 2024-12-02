## 7Apps React Native Case

### Description

This case was sent to me by 7apps in response to a React Native Developer job opening.

### Code Quality and Reliability

For ensuring code quality and reliability, the project utilizes _ESLint_, _TypeScript_, _Husky_, and _Prettier_.

### Getting Started

This guide will walk you through how to run the project locally and set up the necessary tools for development.

### Requirements

<ul>
<li>Node.js (v14.0 or higher)</li>
<li>npm or Yarn</li>
<li>Android Studio and Emulator or Physical Device</li>
<li>Java (JDK 11 or higher)</li>
<li>Expo CLI</li>
</ul>

### Installation

- Clone this repo

```bash
$ cd seven-apps-case
yarn install
yarn run start
```

Requirements:

- [x] Expo and Expo Router with TypeScript
- [x] Multi-select implementation according to the design
- [x] Query entered in the input field is queried with the API and listed in the popup content
- [x] Each character in the listed results shows the character image, name, and number of episodes they played in
- [x] The entered query word is highlighted in the listed results (e.g., search for 'ric' shows 'Ric' in bold)
- [x] Adding and removing selected results to and from the input field
- [x] Loading state indication
- [x] Exception handling and error states displayed in the interface
- [x] APK build output

## Android View 🤖

 <img width="400" height="600" src="./assets/android.gif" alt="Android view" />

## IOS View 🍎

 <img width="400" height="600" src="./assets/ios.gif" alt="IOS view" />
