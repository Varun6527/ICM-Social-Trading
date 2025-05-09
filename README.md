# ICM Copy Trading

Welcome to the Social Trading Angular Frontend! In this platform where users can create **Provider** and **Follower** accounts to subscribe to or create copy trading offers.

## Project Overview

The Social Trading platform allows users to:
- **Providers**: Create offers and generate a join link for followers to subscribe to their trades. Providers can set a performance fee for followers.
- **Followers**: Subscribe to a provider's offer and copy their trades.

This Angular frontend is part of the clone of the original Social Trading platform. The UI has been modernized, and new functionality, including a **Provider List** page, was added.

## Features
- **UI Modernization**: Updated UI design for a more modern and user-friendly experience.
- **Provider List**: New functionality for displaying the provider list with ratings.
- **Subscription Workflow**: Users can subscribe to a provider’s offers and manage subscriptions.
- **Performance Fee Management**: Providers can set and manage performance fees for their followers.

## Technologies Used

- **Frontend**: Angular 18+
- **CSS Framework**: Scss
- **Routing**: Angular Router
- **HTTP Requests**: HttpClient
- **Third-Party API Integration**: Brokeree API for trading functionality
- **Build Tool**: Angular CLI
- **Version Control**: Git

## Installation

To get started with the project locally, follow these steps:

### Prerequisites
- **Node.js**: Ensure Node.js (version 18 or later) is installed on your system.
- **Angular CLI**: If you don't have Angular CLI installed, you can install it globally using:

npm install -g @angular/cli

To install the project dependencies:

npm install

After installing the dependencies, run the following command:

ng serve --open

By default, the application will run on http://localhost:4200/. You can access the app in your browser by visiting this URL.

If you want to change the default port (e.g., to avoid port conflicts), you can specify a port when running ng serve:

ng serve --port 4201

To build the Angular application for production, use the following command:

ng build

This will create an optimized production build of the application in the dist/ directory. The production-ready files will be available in:

/dist/icm/browser