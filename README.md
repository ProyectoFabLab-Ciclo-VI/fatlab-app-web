# Fatlab - Inventory and Sales Management System

## Overview

Fatlab is a small business focused on 3D printing, large-scale printing, and laser cutting. This system is designed to manage inventory, sales, and loans. Built with Angular for its robustness, the system leverages **Tailwind CSS** for a sleek UI and is structured following clean architecture principles.

## Technologies

- **Angular 18**: Core framework for building the frontend.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TypeScript**: Provides type safety and improved development experience.
- **RxJS**: Reactive programming for handling asynchronous data streams.

## Tailwind CSS Customization

### Color Palette

The custom color palette for the project is defined in `tailwind.config.js` and includes primary, error, neutral, and success colors, each with multiple shades.

#### Primary Colors

| Shade | Hex Code | Preview |
|-------|----------|---------|
| **50**  | `#e8f0fe` | ![#e8f0fe](https://via.placeholder.com/20/e8f0fe?text=+) |
| **100** | `#b9cffb` | ![#b9cffb](https://via.placeholder.com/20/b9cffb?text=+) |
| **200** | `#97b8f9` | ![#97b8f9](https://via.placeholder.com/20/97b8f9?text=+) |
| **300** | `#6797f6` | ![#6797f6](https://via.placeholder.com/20/6797f6?text=+) |
| **400** | `#4983f5` | ![#4983f5](https://via.placeholder.com/20/4983f5?text=+) |
| **500** | `#1c64f2` | ![#1c64f2](https://via.placeholder.com/20/1c64f2?text=+) |
| **600** | `#195bdc` | ![#195bdc](https://via.placeholder.com/20/195bdc?text=+) |
| **700** | `#1447ac` | ![#1447ac](https://via.placeholder.com/20/1447ac?text=+) |
| **800** | `#0f3785` | ![#0f3785](https://via.placeholder.com/20/0f3785?text=+) |
| **900** | `#0c2a66` | ![#0c2a66](https://via.placeholder.com/20/0c2a66?text=+) |

#### Error Colors

| Shade | Hex Code | Preview |
|-------|----------|---------|
| **50**  | `#fce9e9` | ![#fce9e9](https://via.placeholder.com/20/fce9e9?text=+) |
| **75**  | `#f1a6a6` | ![#f1a6a6](https://via.placeholder.com/20/f1a6a6?text=+) |
| **100** | `#eb8181` | ![#eb8181](https://via.placeholder.com/20/eb8181?text=+) |
| **200** | `#e24b4b` | ![#e24b4b](https://via.placeholder.com/20/e24b4b?text=+) |
| **300** | `#dc2626` | ![#dc2626](https://via.placeholder.com/20/dc2626?text=+) |
| **400** | `#9a1b1b` | ![#9a1b1b](https://via.placeholder.com/20/9a1b1b?text=+) |
| **500** | `#861717` | ![#861717](https://via.placeholder.com/20/861717?text=+) |

#### Neutral Colors

| Shade | Hex Code | Preview |
|-------|----------|---------|
| **50**  | `#f0f1f3` | ![#f0f1f3](https://via.placeholder.com/20/f0f1f3?text=+) |
| **75**  | `#bfc6cf` | ![#bfc6cf](https://via.placeholder.com/20/bfc6cf?text=+) |
| **100** | `#a5aebc` | ![#a5aebc](https://via.placeholder.com/20/a5aebc?text=+) |
| **200** | `#7e8c9f` | ![#7e8c9f](https://via.placeholder.com/20/7e8c9f?text=+) |
| **300** | `#64748b` | ![#64748b](https://via.placeholder.com/20/64748b?text=+) |
| **400** | `#465161` | ![#465161](https://via.placeholder.com/20/465161?text=+) |
| **500** | `#3d4755` | ![#3d4755](https://via.placeholder.com/20/3d4755?text=+) |

#### Success Colors

| Shade | Hex Code | Preview |
|-------|----------|---------|
| **50**  | `#e9f9ef` | ![#e9f9ef](https://via.placeholder.com/20/e9f9ef?text=+) |
| **75**  | `#a4e7bd` | ![#a4e7bd](https://via.placeholder.com/20/a4e7bd?text=+) |
| **100** | `#7fdda2` | ![#7fdda2](https://via.placeholder.com/20/7fdda2?text=+) |
| **200** | `#48cf79` | ![#48cf79](https://via.placeholder.com/20/48cf79?text=+) |
| **300** | `#22c55e` | ![#22c55e](https://via.placeholder.com/20/22c55e?text=+) |
| **400** | `#188a42` | ![#188a42](https://via.placeholder.com/20/188a42?text=+) |
| **500** | `#157839` | ![#157839](https://via.placeholder.com/20/157839?text=+) |

### Fonts

The project uses two custom fonts: **`Poppins`** and **`Inter`**.

- **Poppins**: Used primarily for headings and emphasized text.
- **Inter**: Used for body text and general content.

### Font Sizes

The custom font sizes used in the project are defined as:

| Class   | Size        | Pixels |
|---------|-------------|--------|
| `base`  | `0.8125rem` | 13px   |
| `lg`    | `1rem`      | 16px   |
| `xl`    | `1.25rem`   | 20px   |
| `2xl`   | `1.5625rem` | 25px   |
| `3xl`   | `1.9375rem` | 31px   |
| `4xl`   | `2.4375rem` | 39px   |
| `5xl`   | `3.0625rem` | 49px   |

### Box Shadows

Custom box shadows are defined to enhance the visual depth of components:

- **Shadow**: `0px 0px 16px 0px rgba(0,0,0,0.15)`
- **Base**: `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)`
- **Medium**: `0px 2px 4px 0px rgba(0,0,0,0.06), 0px 4px 6px 0px rgba(0,0,0,0.1)`
- **Large**: `0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.05)`
- **XL**: `0px 20px 25px 0px rgba(0,0,0,0.1), 0px 10px 10px 0px rgba(0,0,0,0.04)`
- **2XL**: `0px 25px 50px 0px rgba(0,0,0,0.25)`
- **Inner**: `inset 0px 2px 4px 0px rgba(0,0,0,0.1)`

### Border Radius

Custom border radii are defined to standardize the curvature of UI elements:

| Class | Radius                |
|-------|-----------------------|
| `0`   | `0rem`                |
| `1`   | `0.3077rem`           |
| `2`   | `0.3846rem`           |
| `3`   | `0.4615rem`           |
| `4`   | `0.5385rem`           |
| `5`   | `0.6154rem`           |
| `6`   | `0.9231rem`           |
| `7`   | `1.2308rem`           |
| `8`   | `1.5385rem`           |
| `9`   | `1.8462rem`           |
| `10`  | `3.0769rem`           |
| `11`  | `3.8462rem`           |
| `12`  | `76.8462rem`          |

### Background Images

- **Custom Gradient**: A linear gradient at a 57-degree angle using Tailwind's `--tw-gradient-stops`.

  ```css
  'custom-gradient': 'linear-gradient(57deg, var(--tw-gradient-stops))',
  ```

### Custom Variants

In `tailwind.config.js`, custom variants are added for more control over styling child elements:

- **`child`**: Targets all direct child elements.
- **`child-hover`**: Targets all direct child elements on hover.

## Global Styles (`tailwind.css`)

### Base Styles

- **Scrollbars**: Customized to be thin with specific colors.

  ```css
  * {
    scrollbar-width: thin;
    scrollbar-color: #5C6C7B #EDF0F3;
    scroll-behavior: smooth;
    @apply text-primary-900 font-inter;
  }
  ```

- **Body**: Zero margin and padding, box-sizing set to `border-box`.

  ```css
  body {
    @apply m-0 p-0 box-border;
  }
  ```

### Font Faces

Custom fonts are imported using `@font-face`:

- **Inter**:

  ```css
  @font-face {
    font-family: "inter";
    src: url('/public/font/Inter/Inter-Italic-VariableFont_opsz.ttf'),
         url('/public/font/Inter/Inter-VariableFont_opsz.ttf');
  }
  ```

- **Poppins**:

  ```css
  @font-face {
    font-family: "poppins";
    src: url('/public/font/Poppins/Poppins-Regular.ttf'),
         url('/public/font/Poppins/Poppins-Black.ttf'),
         /* ...additional font weights and styles... */
         url('/public/font/Poppins/Poppins-ThinItalic.ttf');
  }
  ```

### Reset Styles

To maintain consistency across browsers, default styles are reset:

- **Headings and Paragraphs**: Margins set to zero.

  ```css
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  ```

- **Links**: Text decoration removed.

  ```css
  a {
    text-decoration: none;
  }
  ```

- **Lists**: List style removed, margins and padding set to zero.

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ```

## Typography

Throughout the Fatlab application, we follow a consistent set of text styles to maintain visual harmony and readability. The typography system leverages Tailwind CSS utility classes and custom configurations.

### Font Families

- **Inter**: Default font for body text.
- **Poppins**: Used for headings and emphasized text.

### Utility Classes

- **Font Weight**: Use `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, etc.
- **Text Color**: Use `text-primary-500`, `text-error-300`, etc.
- **Text Size**: Use `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.

## Project Structure

The project follows a clean architecture approach to separate concerns and ensure scalability.

```plaintext
/public                   // Static assets like images and fonts
/src
  /app
    └─/core               // Services, guards, and logic not tied to specific views
      ├─/guards           // Route protection
      ├─/interceptors     // HTTP interceptors
      ├─/data             // Interfaces and shared types
        └─base            // Base interfaces for mappers and potential shared services
        └─entities        // Mapping backend responses (entities)
        └─mappers         // Transformation layer between entities and models
        └─models          // Models representing the data structure used in the frontend
      └─/services         // Business logic and services used throughout the app
        └─https           // HTTP services for backend requests (e.g., API calls)
        └─triggers        // Global triggers for actions like notifications or sidebar toggling
    └─/shared             // Reusable components, directives, pipes, and validators
      └─/components       // Shared components (buttons, forms, etc.)
      └─/directives       // Custom Angular directives
      └─/pipes            // Reusable pipes for data transformation
      └─/validators       // Custom validators for forms
    └─/features           // Application modules for distinct features (inventory, sales, loans)
    └─/layouts            // Layouts for organizing views (e.g., dashboard, main layout)
  /environments           // Environment configuration (dev, prod)
```

### Core Concepts

- **Core Module**: Contains services, models, guards, and interceptors that are shared globally across the app.
- **Shared Module**: Contains reusable components, directives, pipes, and validators used across different features.
- **Features Module**: Organized by the different functionalities of the app (e.g., inventory management, sales, loans).

## How to Run

### Prerequisites

- Node.js ^18.19.x and npm installed
- Angular CLI ^v18.1.x
- TypeScript ^5.4.0
- RxJS ^6.5.3

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ProyectoFabLab-Ciclo-VI/fatlab-app-web.git
   cd fatlab-app-web
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   ng serve
   ```

4. **Navigate to the application**:

   Open `http://localhost:4200` in your browser.

### Production Build

To build the project for production, run:

```bash
ng build --prod
```

The output will be located in the `dist/fatlab-app-web` directory, ready to be deployed to a web server.