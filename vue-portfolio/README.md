# Fabian Sellberg - Modern Portfolio

A sleek, modern portfolio built with Vue 3, Tailwind CSS, and Vite. Features a flat design style with bold, colorful graphics, fun animations, and expandable sections for projects and skills.

## 🚀 Features

- **Modern Vue 3 Architecture**: Built with Composition API and TypeScript
- **Tailwind CSS**: Utility-first styling with custom animations
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Elements**:
  - Expandable project cards with detailed views
  - Interactive skill progress bars
  - Animated timeline for experience
  - Contact form with validation
- **Performance Optimized**: Fast loading with Vite build tool
- **Accessibility**: Semantic HTML and ARIA labels

## 🎨 Design Highlights

- **Flat Design Style**: Clean, bold, colorful graphics
- **Fun Animations**: Bounce, float, slide, and fade animations
- **Color Palette**: Vibrant gradient-based color scheme
- **Typography**: Modern fonts (Poppins for headers, Inter for body)
- **Interactive Components**: Hover effects and smooth transitions

## 📁 Project Structure

```
vue-portfolio/
├── src/
│   ├── components/          # Vue components
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
├── public/                 # Static assets
├── index.html             # Main HTML file
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  primary: { /* ... */ },
  secondary: { /* ... */ },
  accent: { /* ... */ },
  success: { /* ... */ }
}
```

### Content
Update the data in each component:
- `ProjectsSection.vue`: Modify `projects` array
- `SkillsSection.vue`: Update skill arrays
- `ExperienceSection.vue`: Edit `timelineItems` array
- `ContactSection.vue`: Update contact information

### Animations
Custom animations are defined in `tailwind.config.js`:
```javascript
animation: {
  'bounce-slow': 'bounce 2s infinite',
  'float': 'float 6s ease-in-out infinite',
  // ... more animations
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Performance

- **Bundle Size**: Optimized with Vite
- **Lazy Loading**: Components load as needed
- **Image Optimization**: Placeholder system for project images
- **Code Splitting**: Automatic with Vue Router (if added)

## 🔧 Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins & Inter fonts

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Fabian Sellberg**
- Email: fabian.sellberg@hotmail.com
- GitHub: [@fabiansyber](https://github.com/fabiansyber)
- LinkedIn: [Fabian Sellberg](https://www.linkedin.com/in/fabian-sellberg-4099b71a0/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Vue.js and Tailwind CSS communities
- All open-source libraries used in this project