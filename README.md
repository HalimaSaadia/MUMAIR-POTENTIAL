# Portfolio Landing Page

This project is a portfolio landing page designed to showcase personal information, skills, services, projects, testimonials, and contact details. It is built using **Next.js** for server-side rendering and leverages the **shadcn/ui** component library for a sleek and modern user interface.

### Github Repo: https://github.com/HalimaSaadia/MUMAIR-POTENTIAL
### Live Link : https://mumair-potential.vercel.app

## Features

- **Home Section**: A welcoming section that introduces the portfolio.
- **About Me**: A brief overview of personal background and expertise.
- **Services**: Details about the services offered.
- **Projects**: A showcase of previous projects with descriptions and links.
- **Testimonials**: Client or peer reviews displayed in a slider format.
- **Contact**: A form or contact details to get in touch.
- **Dark/Light Mode Toggle**:  A switch to toggle between dark and light themes for better user experience..

## Technologies Used

- **Next.js**: For server-side rendering and fast performance.
- **shadcn/ui**: For building reusable and aesthetic UI components.
- **Swiper.js**: For creating smooth and interactive sliders.
- **CSS,tawilwind**: For styling components.



## Project Structure

```
MUMAIR-POTENTIAL/
├── public/                      # Static assets
├── app/                         # Routes
├── lib/                         # Utility functions
├── src/components/ 
|   ├──ui                        # Shadcn UI components
|   ├──shared                    # Reusable UI components
|   ├──frontend/                 # Frontend UI components
├── pages/             
│   ├── Home.jsx                 # Home page   
├── provider/             
│   ├── ThemeProvider.jsx        # Theme Provider Component   
└── package.json                 # Project metadata and dependencies
```

## Installation and Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/HalimaSaadia/MUMAIR-POTENTIAL.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MUMAIR-POTENTIAL
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Navigate through the sections using the navigation menu.
- Explore the portfolio, view projects, and read testimonials.
- Use the contact form to send messages.

## Components and Libraries

- **Swiper.js**: Used for the slider in the Testimonials section.
- **shadcn/ui**: Provides customizable components for building the UI.
- **Next.js**: Ensures fast load times and server-side rendering.





