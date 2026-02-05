# Vue 3 Portfolio Redesign

This directory contains a complete Vue 3 portfolio redesign of Fabian Sellberg's portfolio website.

## Overview

This is a modern, single-page portfolio application built with:
- **Vue 3** with Composition API and TypeScript
- **Tailwind CSS** for styling with custom animations
- **Vite** for fast development and building

## Features

- 🎨 **Flat Design Style**: Clean, bold, colorful graphics
- 🎭 **Fun Animations**: Bounce, float, slide, fade, and scale animations
- 📱 **Responsive Design**: Mobile-first approach
- 🔍 **Interactive Elements**: Expandable project cards, skill progress bars
- 📝 **Contact Form**: With validation and submission handling
- 🚀 **Modern Stack**: Vue 3, TypeScript, Tailwind CSS, Vite

## Project Structure

```
vue-portfolio/
├── src/
│   ├── components/          # All Vue components
│   │   ├── NavBar.vue      # Navigation bar
│   │   ├── HeroSection.vue # Hero section with animations
│   │   ├── AboutSection.vue # About me section
│   │   ├── ProjectsSection.vue # Projects with expandable cards
│   │   ├── SkillsSection.vue # Skills with progress bars
│   │   ├── ExperienceSection.vue # Timeline experience
│   │   ├── ContactSection.vue # Contact form
│   │   └── FooterSection.vue # Footer with newsletter
│   ├── styles/
│   │   └── main.css        # Tailwind CSS and custom styles
│   ├── App.vue             # Main app component
│   └── main.ts            # App entry point
├── index.html             # Main HTML file
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Detailed documentation
```

## Getting Started

1. **Navigate to the vue-portfolio directory**
   ```bash
   cd vue-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Design Highlights

- **Color Palette**: Vibrant gradient-based colors (primary, secondary, accent)
- **Typography**: Poppins for headers, Inter for body text
- **Animations**: Custom keyframe animations defined in Tailwind config
- **Interactive Components**: Hover effects, smooth transitions, expandable sections

## Customization

- Edit `tailwind.config.js` to modify colors and animations
- Update content in each component's data arrays
- Modify `src/styles/main.css` for additional custom styles

## Comparison with Original

This Vue 3 version offers:
- Modern component-based architecture
- Better performance with Vite
- More interactive elements and animations
- TypeScript for type safety
- Better developer experience

## Deployment

The built files can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## License

MIT License