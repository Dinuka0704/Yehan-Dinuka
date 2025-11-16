# 🚀 Quick Setup Guide - Yehan Dinuka Portfolio

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher): [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git**: [Download here](https://git-scm.com/)

## 📥 Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd c:\Uni\Yehan-Dinuka
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:

- react & react-dom
- react-icons
- react-type-animation
- aos (Animate On Scroll)
- react-scripts

### Step 3: Start Development Server

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

## 🎨 Customization Checklist

### ✅ Essential Updates

1. **Personal Information**

   - [ ] Update name in all components
   - [ ] Change email address
   - [ ] Update phone number
   - [ ] Modify location

2. **Social Media Links**

   - [ ] Update GitHub URL
   - [ ] Update LinkedIn URL
   - [ ] Update WhatsApp number
   - [ ] Update Medium profile

3. **Images**

   - [ ] Replace hero image
   - [ ] Replace about image
   - [ ] Replace contact image
   - [ ] Add project screenshots

4. **Content**
   - [ ] Update About description
   - [ ] Modify education details
   - [ ] Add your projects
   - [ ] Update certifications

## 📝 Where to Update What

### Hero Section (`src/components/Hero/Hero.js`)

```javascript
// Update these values:
- Social links (lines 34-37)
- Statistics (lines 46-62)
- Image URL (line 67)
```

### About Section (`src/components/About/About.js`)

```javascript
// Update these:
- Description text (lines 57-65)
- Skills arrays (lines 10-44)
- Experience percentages (lines 83-127)
```

### Education Section (`src/components/Education/Education.js`)

```javascript
// Update these:
- educationData array (lines 7-47)
- certifications array (lines 49-72)
```

### Projects Section (`src/components/Projects/Projects.js`)

```javascript
// Update these:
- projects array with your projects (lines 7-99)
- GitHub links
- Project images
```

### Contact Section (`src/components/Contact/Contact.js`)

```javascript
// Update these:
- Email (line 57)
- Phone (line 65)
- Location (line 73)
- WhatsApp link in Header and Footer
```

## 🖼️ Image Replacement Guide

### Current Placeholder Images

All images use placeholder URLs. Replace them with your actual images:

1. **Hero Image** (`Hero.js` line 67)

   - Recommended size: 500x600px
   - Format: JPG or PNG
   - Shows: Professional photo

2. **About Image** (`About.js` line 75)

   - Recommended size: 500x600px
   - Format: JPG or PNG
   - Shows: Casual or working photo

3. **Contact Image** (`Contact.js` line 46)

   - Recommended size: 500x600px
   - Format: JPG or PNG
   - Shows: Contact illustration

4. **Project Images** (`Projects.js` projects array)
   - Recommended size: 600x400px
   - Format: JPG or PNG
   - Shows: Project screenshots

### How to Add Your Images

**Option 1: External URL**

```javascript
<img src="https://your-image-url.com/image.jpg" alt="Description" />
```

**Option 2: Local Images**

1. Create `src/assets/images/` folder
2. Add your images there
3. Import in component:

```javascript
import heroImage from "../../assets/images/hero.jpg";
<img src={heroImage} alt="Description" />;
```

## 🔧 Common Commands

```bash
# Start development server
npm start

# Create production build
npm run build

# Run tests
npm test

# Install new package
npm install package-name

# Install all dependencies
npm install
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder

### Deploy to GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

## 🐛 Troubleshooting

### Issue: Dependencies won't install

**Solution:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Solution:**

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
set PORT=3001 && npm start
```

### Issue: Module not found errors

**Solution:**

```bash
# Install missing dependencies
npm install

# Or install specific package
npm install package-name
```

### Issue: Build fails

**Solution:**

```bash
# Clean build
rm -rf build

# Rebuild
npm run build
```

## 📚 Folder Structure Reference

```
Yehan-Dinuka/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Education/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## 🎯 Next Steps After Setup

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Update personal information
4. ✅ Replace images
5. ✅ Update social links
6. ✅ Add your projects
7. ✅ Test on mobile devices
8. ✅ Build for production
9. ✅ Deploy to hosting platform

## 💡 Tips

- **Test Responsiveness**: Use browser dev tools to test on different screen sizes
- **Optimize Images**: Compress images before adding them to reduce load time
- **Update Links**: Ensure all external links open in new tabs
- **SEO**: Update meta tags in `public/index.html`
- **Performance**: Run `npm run build` to create optimized production build
- **Version Control**: Use Git to track changes

## 📞 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure Node.js version is 14 or higher
4. Clear browser cache
5. Try restarting the development server

## 🎉 Success!

Once everything is set up, you should see your portfolio running at `http://localhost:3000`

Enjoy your new portfolio website! 🚀

---

**Made with ❤️ by Yehan Dinuka**
