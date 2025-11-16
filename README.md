# Yehan Dinuka - Portfolio Website

A modern, fully responsive portfolio website built with React.js showcasing my work as a Fullstack Developer and UI/UX Designer.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode Toggle**: Switch between light and dark themes with persistent storage
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Typewriter Effect**: Dynamic profession display in hero section
- **Skills Categorization**: Organized skills by Programming Languages, Frameworks, Tools, and Databases
- **Education Timeline**: Beautiful timeline layout for educational background
- **Projects Showcase**: Grid layout with GitHub links to all projects
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Links to GitHub, LinkedIn, WhatsApp, and Medium
- **Green Theme**: Consistent green color scheme throughout
- **Scroll Animations**: AOS (Animate On Scroll) library integration
- **Smooth Navigation**: Fixed header with smooth scroll to sections

## 📁 Project Structure

```
Yehan-Dinuka/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Education/
│   │   │   ├── Education.js
│   │   │   └── Education.css
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── Projects.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## 🛠️ Technologies Used

- **React.js**: Frontend library
- **React Icons**: Icon library
- **React Type Animation**: Typewriter effect
- **AOS**: Animate On Scroll library
- **CSS3**: Styling with modern CSS features
- **HTML5**: Semantic markup

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yehandinuka/portfolio.git
   cd Yehan-Dinuka
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Color Scheme

- **Primary Green**: #059669
- **Secondary Green**: #10b981
- **Light Green**: #d1fae5, #a7f3d0, #f0fdf4
- **Dark Text**: #1f2937, #111827
- **Gray Text**: #6b7280, #9ca3af

## 📝 Sections

1. **Home/Hero**: Introduction with typewriter effect and social links
2. **About**: Personal description and categorized skills
3. **Education**: Academic timeline and certifications
4. **Projects**: Portfolio of completed projects with GitHub links
5. **Contact**: Contact form and contact information
6. **Footer**: Quick links, contact info, and social media

## 🔧 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero/Hero.js`):

   - Update name, professions, and statistics
   - Add your photo URL

2. **About Section** (`src/components/About/About.js`):

   - Modify skills arrays
   - Update description text
   - Change experience percentages

3. **Education Section** (`src/components/Education/Education.js`):

   - Edit education data array
   - Update certifications

4. **Projects Section** (`src/components/Projects/Projects.js`):

   - Add your project details
   - Update GitHub links
   - Replace placeholder images

5. **Contact Section** (`src/components/Contact/Contact.js`):

   - Update email, phone, and location
   - Configure form submission

6. **Footer** (`src/components/Footer/Footer.js`):
   - Update contact information
   - Modify social media links

### Replace Images

Replace the placeholder images with your own:

- Hero image: Professional headshot
- About image: Casual or professional photo
- Contact image: Relevant illustration or photo
- Project images: Screenshots of your projects

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 568px

## 🔗 Links

- **Portfolio**: [Add your deployed URL]
- **GitHub**: https://github.com/yehandinuka
- **LinkedIn**: https://linkedin.com/in/yehandinuka
- **Medium**: https://medium.com/@yehandinuka

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Yehan Dinuka**

- GitHub: [@yehandinuka](https://github.com/yehandinuka)
- LinkedIn: [Yehan Dinuka](https://linkedin.com/in/yehandinuka)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Yehan Dinuka
