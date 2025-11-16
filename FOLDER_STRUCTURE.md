# Portfolio Website - Complete Folder Structure

## Overview

This document provides a detailed breakdown of the portfolio website's folder structure and file organization.

## 📂 Root Level Structure

```
Yehan-Dinuka/
│
├── public/                     # Public assets and HTML template
│   └── index.html             # Main HTML file with meta tags and fonts
│
├── src/                       # Source code directory
│   │
│   ├── components/            # React components directory
│   │   │
│   │   ├── Header/           # Navigation header component
│   │   │   ├── Header.js     # Header component logic
│   │   │   └── Header.css    # Header component styles
│   │   │
│   │   ├── Hero/             # Hero/Home section component
│   │   │   ├── Hero.js       # Hero component with typewriter effect
│   │   │   └── Hero.css      # Hero section styles
│   │   │
│   │   ├── About/            # About section component
│   │   │   ├── About.js      # About component with skills
│   │   │   └── About.css     # About section styles
│   │   │
│   │   ├── Education/        # Education section component
│   │   │   ├── Education.js  # Education timeline component
│   │   │   └── Education.css # Education section styles
│   │   │
│   │   ├── Projects/         # Projects showcase component
│   │   │   ├── Projects.js   # Projects grid component
│   │   │   └── Projects.css  # Projects section styles
│   │   │
│   │   ├── Contact/          # Contact section component
│   │   │   ├── Contact.js    # Contact form component
│   │   │   └── Contact.css   # Contact section styles
│   │   │
│   │   └── Footer/           # Footer component
│   │       ├── Footer.js     # Footer with links and info
│   │       └── Footer.css    # Footer styles
│   │
│   ├── App.js                # Main application component
│   ├── App.css               # Global application styles
│   ├── index.js              # React DOM render entry point
│   └── index.css             # Global CSS reset and base styles
│
├── .gitignore                # Git ignore configuration
├── package.json              # NPM dependencies and scripts
└── README.md                 # Project documentation
```

## 📄 File Descriptions

### Public Directory

#### `public/index.html`

- Main HTML template
- Includes meta tags for SEO
- Links to Google Fonts (Poppins)
- Sets viewport and theme color
- Contains root div for React app

### Source Directory

#### Root Level (`src/`)

**`index.js`**

- Application entry point
- Renders the App component to the DOM
- Wraps app in React.StrictMode

**`index.css`**

- Global CSS reset
- Base styles for body and html
- Custom scrollbar styling with green theme
- Font family declaration

**`App.js`**

- Main application component
- Imports all section components
- Initializes AOS animation library
- Manages overall app structure

**`App.css`**

- Container and section styles
- Section title styling
- Button styles (primary and secondary)
- Responsive breakpoints

#### Components Directory (`src/components/`)

### 1. Header Component (`components/Header/`)

**`Header.js`**

- Fixed navigation bar
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Sticky header on scroll

**`Header.css`**

- Fixed positioning styles
- Logo styling with brackets
- Navigation menu layout
- Hamburger menu animation
- Mobile responsive design

### 2. Hero Component (`components/Hero/`)

**`Hero.js`**

- Hero section with introduction
- TypeAnimation for profession display
- Social media links (GitHub, LinkedIn, WhatsApp, Medium)
- Call-to-action buttons
- Statistics display

**`Hero.css`**

- Two-column grid layout
- Typewriter effect styling
- Social links hover effects
- Image wrapper with gradient background
- Responsive mobile layout

### 3. About Component (`components/About/`)

**`About.js`**

- Personal description
- Categorized skills display:
  - Programming Languages
  - Frameworks & Libraries
  - Tools & Technologies
  - Databases
- Experience statistics with percentages

**`About.css`**

- Two-column grid for text and image
- Skills grid layout
- Skill card hover effects
- Category title styling
- Experience cards styling

### 4. Education Component (`components/Education/`)

**`Education.js`**

- Timeline layout for education
- Educational qualifications with details
- Achievements list
- Certifications grid

**`Education.css`**

- Timeline with vertical line
- Timeline icons with gradient
- Content cards with hover effects
- Certifications grid layout
- Responsive timeline design

### 5. Projects Component (`components/Projects/`)

**`Projects.js`**

- Projects grid display
- Project cards with images
- GitHub and demo links
- Technology tags
- Call-to-action section

**`Projects.css`**

- Grid layout for projects
- Image overlay on hover
- Project links styling
- Technology tags design
- Card hover animations

### 6. Contact Component (`components/Contact/`)

**`Contact.js`**

- Contact form with validation
- Contact information display
- Form state management
- Submit handler

**`Contact.css`**

- Two-column layout
- Form input styling
- Contact info cards
- Icon styling
- Form focus effects

### 7. Footer Component (`components/Footer/`)

**`Footer.js`**

- Footer with logo
- Quick navigation links
- Contact information
- Social media links
- Scroll-to-top button
- Copyright information

**`Footer.css`**

- Dark gradient background
- Multi-column footer layout
- Social links hover effects
- Scroll-to-top button positioning
- Heart animation

## 🎨 Styling Architecture

### Color System

- Primary: #059669 (Green)
- Secondary: #10b981 (Light Green)
- Backgrounds: #f0fdf4, #ffffff
- Text: #1f2937, #6b7280

### Typography

- Font Family: 'Poppins', sans-serif
- Headings: 600-700 weight
- Body: 400-500 weight

### Responsive Design

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 568px

## 🔧 Component Features

### Header

✓ Fixed navigation
✓ Mobile hamburger menu
✓ Smooth scroll
✓ Scroll detection

### Hero

✓ Typewriter effect
✓ Social links
✓ CTA buttons
✓ Statistics

### About

✓ Categorized skills
✓ Skill icons
✓ Hover effects
✓ Experience stats

### Education

✓ Timeline layout
✓ Achievements
✓ Certifications
✓ Animations

### Projects

✓ Grid layout
✓ GitHub links
✓ Hover overlays
✓ Tech tags

### Contact

✓ Form validation
✓ Contact info
✓ Submit handling
✓ Responsive layout

### Footer

✓ Quick links
✓ Social media
✓ Scroll to top
✓ Animations

## 📦 Dependencies

### Main Dependencies

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-icons`: ^4.12.0
- `react-type-animation`: ^3.2.0
- `aos`: ^2.3.4

### Scripts

- `start`: Development server
- `build`: Production build
- `test`: Run tests
- `eject`: Eject from Create React App

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Open browser to: `http://localhost:3000`
4. Build for production: `npm run build`

## 📝 Notes

- All components are functional components using React hooks
- CSS modules approach with separate CSS files per component
- Fully responsive design with mobile-first approach
- Consistent green color theme throughout
- Smooth animations using AOS library
- Optimized for performance and SEO

---

This structure ensures:

- **Modularity**: Each component is self-contained
- **Maintainability**: Easy to update individual sections
- **Scalability**: Simple to add new sections
- **Organization**: Clear separation of concerns
- **Reusability**: Components can be reused if needed
