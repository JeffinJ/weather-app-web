# Weather Lookup Application

A modern web application that provides weather information for cities around the world.

![Weather Lookup App Screenshot](image-3.png)

## Features

- Search cities by first letter
- View detailed weather information including temperature, humidity, wind, and more
- Data from OpenWeatherMap API

## Table of Contents

- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Environment Setup](#environment-setup)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Usage](#api-usage)
- [Contributing](#contributing)
- [License](#license)

## Screenshots

### Home Screen
![Home Screen](image.png)


### City Search Results
![Search Results](image-1.png)

### Weather Details
![Weather Details](image-2.png)

## Tech Stack

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Icons**: Lucide React
- **Weather Data**: OpenWeatherMap API - SpringBoot API

## Environment Setup

### Prerequisites

- Node.js (v16.0 or higher)
- npm or pnpm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JeffinJ/weather-app-web
   cd weather-app-web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables) section)

## Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running in Production Mode

```bash
npm run start
# or
yarn start
```

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
# OpenWeatherMap API
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5

# Application Settings
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
```

### Getting an API Key

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/)
2. Navigate to the API keys section
3. Generate a new API key
4. Add the key to your `.env.local` file

## API Usage

The application uses the following API endpoints:

- `/api/cities/by-letter/:letter` - Get cities starting with a specific letter
- `/api/weather/:cityId` - Get detailed weather information for a specific city

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created by [Jeffin Jose](https://jeffinjose.dev) with ❤️