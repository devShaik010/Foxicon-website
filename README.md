# 🦊 Foxicon Academy

> **Learn. Connect. Explore.** - A modern learning platform built with React and love 💜

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-cyan?logo=tailwindcss)](https://tailwindcss.com/)

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/devShaik010/Foxicon-website.git
   cd foxicon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Visit: `http://localhost:5173`
   - You should see the Foxicon Academy homepage! 🎉

## 📁 Project Structure

```
foxicon/
├── public/                 # Static assets
│   └── logo.svg           # Logo files
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation with mobile drawer
│   │   └── Layout.jsx     # Page layout wrapper
│   ├── pages/             # Main pages
│   │   ├── Home.jsx       # Landing page with animations
│   │   ├── About.jsx      # About us page
│   │   ├── Courses.jsx    # Courses listing
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Bootcamps.jsx  # Bootcamps page
│   │   └── Login.jsx      # Login page
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies & scripts
└── README.md             # You are here! 📍
```

## 🎨 Features

### ✨ **UI/UX Excellence**
- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Animated Hero**: Typed text animation with highlighted "community"
- **Tech Showcase**: Infinite marquee with 18+ technology icons
- **Glass Morphism**: Modern mobile drawer with blur effects
- **Micro-interactions**: Hover effects and smooth transitions

### 🎭 **Technical Highlights**
- **React 19**: Latest React with hooks and functional components
- **Vite**: Lightning-fast development and build tool
- **Tailwind CSS**: Utility-first styling for rapid development
- **React Router**: Client-side routing for SPA experience
- **React Icons**: FontAwesome and Simple Icons integration

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## 🎯 Development Guidelines

### 📋 **For Team Members**

1. **Branch Management**
   ```bash
   # Create feature branch
   git checkout -b feature/your-feature-name
   
   # Make changes and commit
   git add .
   git commit -m "feat: add new feature"
   
   # Push and create PR
   git push origin feature/your-feature-name
   ```

2. **Component Development**
   - Use functional components with hooks
   - Follow existing naming conventions
   - Add responsive classes for mobile-first design
   - Include hover states and animations

3. **Styling Guidelines**
   - Use Tailwind utility classes
   - Follow existing color scheme (purple primary)
   - Maintain responsive breakpoints: `sm:` `md:` `lg:` `xl:`
   - Use Space Grotesk font family

### 🎨 **Design System**

- **Primary Color**: Purple (`purple-600`, `purple-700`)
- **Typography**: Space Grotesk font family
- **Spacing**: Tailwind spacing scale
- **Breakpoints**: Mobile-first responsive design

## 🐛 Troubleshooting

### Common Issues

**1. Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

**2. Dependencies issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**3. Build errors**
```bash
# Check for ESLint errors
npm run lint
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** your feature branch
3. **Commit** your changes
4. **Push** to the branch
5. **Open** a Pull Request

### 📝 Commit Message Format
```
feat: add new feature
fix: resolve bug issue
docs: update documentation
style: formatting changes
refactor: code improvements
```

## 📞 Support

- **Repository**: [GitHub](https://github.com/devShaik010/Foxicon-website)
- **Issues**: Create GitHub issue for bugs/features
- **Team Lead**: @devShaik010

## 🎉 Ready to Code?

You're all set! Start exploring the codebase and building amazing features for Foxicon Academy! 

Happy coding! 🚀✨
