# Fatlab - Inventory and Sales Management System

## Overview

Fatlab is a small business focused on 3D printing, large-scale printing, and laser cutting. This system is designed to manage inventory, sales, and loans. Built with Angular for its robustness, the system leverages Angular Material for a sleek UI and is structured following clean architecture principles.

## Technologies

- **Angular 18**: Core framework for building the frontend.
- **Primeng**: UI component library for consistent design.
- **Tailwind CSS**: CSS utility library that makes it easy to create custom styles quickly and efficiently.
- **TypeScript**: Provides type safety and improved development experience.
- **RxJS**: Reactive programming for handling asynchronous data streams.
- **CSS**: For styling components.

## Tailwind CSS Customization

### Color Palette

The custom color palette for the project is as follows:

| Color Name  | Hex Code | Preview |
| ----------- | -------- | ------- |
| **Blue 1**  | `#f3f6fc` | ![#f3f6fc](https://via.placeholder.com/20/f3f6fc?text=+) |
| **Blue 2**  | `#e7eef7` | ![#e7eef7](https://via.placeholder.com/20/e7eef7?text=+) |
| **Blue 3**  | `#80ed99` | ![#80ed99](https://via.placeholder.com/20/80ed99?text=+) |
| **Blue 4**  | `#45dfb1` | ![#45dfb1](https://via.placeholder.com/20/45dfb1?text=+) |
| **Blue 5**  | `#0ad1c8` | ![#0ad1c8](https://via.placeholder.com/20/0ad1c8?text=+) |
| **Blue 6**  | `#14919b` | ![#14919b](https://via.placeholder.com/20/14919b?text=+) |
| **Blue 7**  | `#0b6477` | ![#0b6477](https://via.placeholder.com/20/0b6477?text=+) |
| **Blue 8**  | `#213a57` | ![#213a57](https://via.placeholder.com/20/213a57?text=+) |
| **Blue 9**  | `#16263b` | ![#16263b](https://via.placeholder.com/20/16263b?text=+) |

### Fonts

The project uses two custom fonts: **`Space Grotesk`** and **`Onest`**.

### Text Sizes

Below are the custom text sizes used in the project:

![example](https://firebasestorage.googleapis.com/v0/b/fatlab-e4bbf.appspot.com/o/readme%2Fexample-size-fonts.PNG?alt=media&token=91ad55cf-fcc4-4b32-9b2c-9c2a85f113f2)

## Typography

Throughout the Fatlab application, we follow a consistent set of text styles to maintain visual harmony and readability. The typography system has pre-configured classes that can be applied to various text elements across the project.

### Text Styles Overview:

- **Title Styles**:
  - `.text-title-1`
  - `.text-title-2`
  - `.text-title-3`
  - `.text-title-4`
  - `.text-title-5`

- **Subtitle Styles**:
  - `.text-subtitle-1`
  - `.text-subtitle-2`
  - `.text-subtitle-3`

- **Body Text**:
  - `.text-body-1`
  - `.text-body-2` *(default)*
  - `.text-body-3`

- **Button Text**:
  - `.text-button`

- **Span & Caption**:
  - `.text-span`
  - `.text-span-bold`
  - `.text-caption`
  - `.text-underline`

By default, most body text in the application uses `.text-body-2` for a consistent and clean appearance.

## Project Structure

The project follows a clean architecture approach to separate concerns and ensure scalability.

```plaintext
/public                   // Static assets like images and fonts
/src
  /app
  └─/core                 // Services, guards, and logic not tied to specific views
    ├─/guards             // Route protection
    ├─/interceptors       // HTTP interceptors
    ├─/data               // Interfaces and shared types
      └─base              // Base interfaces for mappers and potential shared services
      └─entities          // Mapping backend responses (entities)
      └─mappers           // Transformation layer between entities and models
      └─models            // Models representing the data structure used in the frontend
    └─/service            // Business logic and services used throughout the app
      └─https             // HTTP services for backend requests (e.g., API calls)
      └─triggers          // Global triggers for actions like notifications or sidebar toggling
  └─/shared               // Reusable components, directives, pipes, and validators
    └─/components         // Shared components (buttons, forms, etc.)
    └─/directives         // Custom Angular directives
    └─/pipes              // Reusable pipes for data transformation
    └─/validators         // Custom validators for forms
  └─/features             // Application modules for distinct features (inventory, sales, loans)
  └─/layouts              // Layouts for organizing views (e.g., dashboard, main layout)
  /environments           // Environment configuration (dev, prod)
```

### Core Concepts:
- **Core Module**: Contains services, models, guards, and interceptors that are shared globally across the app.
- **Shared Module**: Contains reusable components, directives, pipes, and validators used across different features.
- **Features Module**: Organized by the different functionalities of the app (e.g., inventory management, sales, loans).

### How to Run
#### Prerequisites
- Node.js ^18.19.x and npm installed
- Angular CLI ^v18.1.x
- Typescript ^5.4.0
- RxJS ^6.5.3

#### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/ProyectoFabLab-Ciclo-VI/fatlab-app-web.git
    cd fatlab-inventory-management
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    ng serve
    ```
4. Navigate to `http://localhost:4200` in your browser.
#### Production Build
To build the project for production, run:
```bash
ng build --prod
```
The output will be located in the `dist/fatlab-app-web/browser` directory, ready to be deployed to a web server.

<!-- ### Future Plans -->
<!-- - **Tailwind CSS Integration**: For utility-first CSS styling. -->
<!-- - **Reports Module**: Generate PDF reports for inventory, sales, and loan data. -->