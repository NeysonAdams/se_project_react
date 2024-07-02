# WTWR (What to Wear?) Frontend

## Project Description

Welcome to the WTWR (What to Wear) project! This frontend application helps users decide what to wear based on the current weather conditions. The application integrates with various APIs to provide a seamless user experience, including user authentication, weather data, and dynamic content based on user preferences. The backend for this project can be found at [WTWR Backend Repository](https://github.com/NeysonAdams/se_project_express).

## Features
 1. ### User Authentication and Identification:
    - Secure user registration with email and password.
    - User login with email and password.
    - Persistent user sessions using JWT (JSON Web Tokens) to keep users logged in across visits.
    - Auto-identification of users on subsequent visits using stored JWT tokens
    - Logout functionality to securely end user sessions.
 2. ### Weather Data Integration:
    - Integration with the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data.
    - Custom weather banner that updates based on the time of day and current weather conditions.
 3. ### Temperature Unit Switcher:
    - Users can switch between Fahrenheit (°F) and Celsius (°C) for temperature display.
 4. ### Profile Management:
    - Users can edit their profile information including avatar, username, and other personal details.
 5. ### Clothing Items Management:
    - Users can add and remove clothing items from their wardrobe.
    - Users can like and unlike clothing items to indicate preferences.
 6. ### Dynamic Weather-Based Recommendations:
    - Recommendations for what to wear based on the current weather and user preferences.


## Getting Started

### Prerequisites
- npm (Node Package Manager)
- React.js 

### Installation
 1. Clone the repository:
    ```bash
        git clone https://github.com/NeysonAdams/se_project_react.git
    ```
 2. Navigate to the project directory:
    ```bash
        cd se_project_react
    ```
 3. Install the dependencies:
    ```bash
        npm install
    ```
 4. Running the Application
    To start the development server, run:
    ```bash
        npm start
    ```
    runing in Dev Mode
    ```bash
        npm run dev
    ```
    The application will be available at http://localhost:3000.


## Usage
After starting the application, you can:
- Register a new user or log in with existing credentials.
- View current weather conditions and clothing recommendations.
- Add or remove items from your wardrobe.
- Edit your profile details
- Switch between Fahrenheit and Celsius for temperature readings.

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)
- [Project Link](https://NeysonAdams.github.io/se_project_react)


Enjoy using WTWR and always know what to wear based on the weather!
