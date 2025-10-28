# 🚀 Abdelrahman Al Shkh Nimer - Portfolio Website

A stunning, modern portfolio website built with React + Vite, featuring smooth animations, dark mode, and a beautiful purple & cyan gradient theme.

## ✨ Features

- 🎨 **Modern Design**: Eye-catching purple & cyan gradient color scheme
- 🌓 **Dark Mode**: Custom dark mode toggle with smooth transitions
- ✨ **Smooth Animations**: Framer Motion & AOS animations
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast load times
- 🎯 **Interactive UI**: Hover effects, typing animations, and more
- 📊 **Counter Animations**: Animated statistics section
- 🗺️ **Google Maps Integration**: Location display
- 📬 **Contact Form**: Interactive contact form

## 📁 Project Structure

```
abdelrahman-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Stats.jsx
│   │   ├── Stats.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── TechStack.jsx
│   │   ├── TechStack.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Testimonials.jsx
│   │   ├── Testimonials.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── hooks/
│   │   └── useDarkMode.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Step 1: Create the Project

```bash
# Create Vite React project
npm create vite@latest abdelrahman-portfolio -- --template react

# Navigate to project directory
cd abdelrahman-portfolio
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install

# Install additional libraries
npm install framer-motion react-icons react-type-animation aos
```

### Step 3: Create Project Structure

Create all the folders and files as shown in the project structure above.

### Step 4: Copy All Code Files

Copy all the provided code into their respective files:

1. **Hooks**: `src/hooks/useDarkMode.js`
2. **Styles**: `src/index.css`, `src/App.css`
3. **Components**: All component files in `src/components/`
4. **Main Files**: `src/App.jsx`, `src/main.jsx`
5. **Config Files**: `package.json`, `vite.config.js`, `index.html`

### Step 5: Run the Development Server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🎨 Color Palette

- **Primary Purple**: `#8B5CF6`
- **Secondary Cyan**: `#06B6D4`
- **Accent Orange**: `#F59E0B`
- **Success Green**: `#10B981`
- **Light Background**: `#F8FAFC`
- **Dark Background**: `#0F172A`

## 📦 Technologies Used

- **React** 18.2.0 - UI Library
- **Vite** 5.0.0 - Build Tool
- **Framer Motion** 10.16.4 - Animations
- **React Icons** 4.11.0 - Icon Library
- **React Type Animation** 3.2.0 - Typing Effect
- **AOS** 2.3.4 - Scroll Animations

## 🚀 Build for Production

```bash
npm run build
```

The optimized production files will be in the `dist` folder.

## 📝 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx` - Update name and title
2. **About Section**: Edit `src/components/About.jsx` - Update bio and education
3. **Contact Info**: Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`
4. **Projects**: Edit `src/components/Projects.jsx` - Add your projects
5. **Experience**: Edit `src/components/Experience.jsx` - Update work history

### Change Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: #8B5CF6;
  --secondary: #06B6D4;
  --accent: #F59E0B;
  /* ... other colors */
}
```

### Add/Remove Sections

Edit `src/App.jsx` to add or remove sections as needed.

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🎯 Performance Optimization

- ✅ Code splitting with lazy loading
- ✅ Optimized images from CDN
- ✅ Minimal CSS (no Tailwind compilation needed)
- ✅ Fast Vite build system
- ✅ Smooth animations with GPU acceleration

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👨‍💻 Developer

**Abdelrahman Al Shkh Nimer**
- Email: mohammed.n.jumaa@gmail.com
- Phone: +962 787665773
- Location: Amman, Jordan

---

Made with ❤️ and React# 
