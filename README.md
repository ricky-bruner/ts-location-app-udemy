# TypeScript Google Maps Project

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&logo=typescript&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=axios&logoColor=white) ![Google Maps API](https://img.shields.io/badge/Google_Maps_API-4285F4?style=flat&logo=google-maps&logoColor=white)

## Overview
This project is based on the "Understanding TypeScript" course by Maximilian Schwarzmüller on Udemy. It's a simple application that allows users to enter an address and displays the corresponding location on a Google map.

## Features
- User input for addresses.
- Integration with the Google Maps API to display maps.
- Use of Axios for API calls.

## Technologies Used
- TypeScript ^4.9.5
- Webpack ^5.75.0 (with Webpack CLI ^5.0.1, Webpack Dev Server ^4.11.1)
- Google Maps JavaScript API Loader ^1.16.2
- TypeScript type definitions for Google Maps ^3.43.3
- Axios (version information not specified)

## Setup and Configuration

### API Key
Before running the application, you'll need to set up a Google Maps API key:

1. Visit the Google Cloud Console and create a new project.
2. Navigate to the API & Services Dashboard and enable the Google Maps JavaScript API.
3. Create credentials to generate your unique API key.

### Project Configuration
1. Create a file named `apiKeys.ts` in your project's src directory.
2. Inside this file, add your API key as follows:
```js
   export const googleMapsApiKey = "your-api-key";
```
3. Replace `your-api-key` with the API key obtained from Google Cloud Console.

### Installation
Follow these steps to set up the project locally.

1. Clone the repository:
```sh
   git clone https://github.com/ricky-bruner/ts-location-app-udemy.git
```

2. Install NPM packages:
```sh
   npm install
```

## Usage
To run the application locally:

1. Start the development server:
```sh
   npm start
```

2. Open `http://localhost:8080` in your browser to view the application.

## Acknowledgements
- Maximilian Schwarzmüller for his course "Understanding TypeScript"
