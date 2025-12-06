# Jordan Subbiah | Civil Engineer Portfolio

A modern, responsive portfolio website for a civil engineer. Built with Next.js
15, Tailwind CSS v4, and GSAP animations.

## Features

- **Multi-theme support** - 8 colour schemes (Purple, Blue, Red, Green, Orange,
  Teal, Pink, Monochrome)
- **Smooth animations** - GSAP ScrollTrigger for scroll-based reveals
- **Typewriter effect** - Dynamic role display in hero section
- **Responsive design** - Mobile-first approach with adaptive layouts
- **Code-based graphics** - SVG and CSS components replace static images

## Tech Stack

- [Next.js 15](https://nextjs.org) - React framework with App Router
- [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS
- [GSAP](https://gsap.com) - Animation library
- [react-icons](https://react-icons.github.io/react-icons/) - Icon library
- [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) -
  Typewriter effect

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Theme Configuration

Change the colour theme by modifying the `THEME` constant in `app/layout.tsx`:

```tsx
// Options: "purple" | "blue" | "red" | "green" | "orange" | "teal" | "pink" | "monochrome"
const THEME = "blue";
```

Or use the theme picker in the header to switch themes at runtime.

## Project Structure

```txt
├── app/
│   ├── globals.css      # Theme variables & global styles
│   ├── layout.tsx       # Root layout with theme config
│   └── page.tsx         # Home page
├── components/
│   ├── icons/           # SVG & CSS graphic components
│   │   ├── CurvedArrow.tsx
│   │   ├── EllipseHighlight.tsx
│   │   └── index.ts
│   ├── Header.tsx       # Navigation with theme picker
│   ├── HeroSection.tsx  # Hero section
│   ├── WorkExperience.tsx
│   ├── TechStack.tsx    # Skills visualization
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx # GSAP animation wrapper
└── public/
    └── images/          # Avatar & project images
```

## Customisation

### Content

Update the following files to personalise:

- `components/HeroSection.tsx` - Name, tagline, bio
- `components/WorkExperience.tsx` - Services offered
- `components/TechStack.tsx` - Skills & tools
- `components/ProjectsSection.tsx` - Featured projects
- `components/ContactSection.tsx` - Contact info & social links
- `app/layout.tsx` - Page title & meta description

### Images

Add your images to `public/images/`:

- `avatar.png` - Profile photo (240x240)
- `Portfolio.png` - Project screenshots

## Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT
