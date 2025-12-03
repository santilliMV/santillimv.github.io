# Astro Cartoon Portfolio

A modern, responsive portfolio website built with Astro 5, featuring a beautiful cartoon-style design with smooth animations, interactive project carousel, blog system, and comment integration.

## Quick Deploy

[![Deploy to Tencent Cloud](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?template=https://github.com/tomcomtang/astro-cartoon-portfolio&output-directory=./dist&build-command=npm%20run%20build&install-command=npm%20install&entry_from=childtom)

## Preview

You can preview the project online at:

<https://astro-cartoon-portfolio.edgeone.app/>

## Features

- 🎨 Modern cartoon-style design with smooth page transitions
- 📱 Fully responsive layout
- 📝 Blog system with Markdown support and Astro Content Collections
- 🎠 Interactive 3D coverflow carousel for project showcase
- 💬 Giscus comment system integration
- 🎯 SEO optimized
- ⚡ Fast static site generation
- 🎭 Smooth scroll-triggered animations
- 🔍 Blog post search and tag filtering
- 📊 Skills proficiency display with circular progress animations

## Tech Stack

- **Framework**: Astro 5.x
- **UI Library**: React (for Giscus comments)
- **Styling**: Custom CSS with CSS Variables
- **Animations**: Framer Motion (for carousel effects)
- **Content**: Markdown with Astro Content Collections
- **Comments**: Giscus (GitHub Discussions)
- **Language**: TypeScript
- **Build Tool**: Vite

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/tomcomtang/astro-cartoon-portfolio.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── AboutSection.astro
│   │   ├── Footer.astro
│   │   ├── GiscusComments.tsx
│   │   ├── HeroSection.astro
│   │   ├── Navigation.astro
│   │   ├── ProficiencySection.astro
│   │   └── ProjectsSection.astro
│   ├── config/            # Configuration files
│   │   ├── posts-images.ts
│   │   ├── projects.ts
│   │   └── site.ts
│   ├── content/           # Markdown blog posts
│   │   ├── config.ts
│   │   └── posts/
│   ├── pages/             # Astro pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── comments.astro
│   │   ├── posts.astro
│   │   └── posts/
│   │       └── [slug].astro
│   └── styles/            # CSS stylesheets
│       ├── home.css
│       ├── posts.css
│       ├── post-detail.css
│       ├── contact.css
│       ├── comments.css
│       └── page-transitions.css
└── public/                # Static assets
    ├── svg/              # SVG icons and images
    ├── images/           # Image assets
    └── fonts/            # Custom fonts
```

## Content Management

### Blog Posts

1. Create your markdown files in `src/content/posts/` directory
2. Each markdown file should follow this format:

```markdown
---
title: Your Post Title
description: A brief description of your post
date: 6/27/2025
author: Someone
tags: ["Tag1", "Tag2"]
readTime: 5 min read
excerpt: Optional excerpt for the post list
image: "/images/posts/your-image.png"
---

Your post content here...
```

### Site Configuration

You can customize the content of different pages by modifying `src/config/site.ts`:

- Site metadata and social links
- Hero section content
- About section content
- Contact page information
- Navigation items
- Footer links

### Projects Configuration

Update project showcase in `src/config/projects.ts`:

- Project images (SVG files)
- Project titles and descriptions
- Technologies used
- Live and GitHub links

### Post Images

Map post slugs to images in `src/config/posts-images.ts`:

```typescript
export const postImages: Record<string, string> = {
  "post-slug": "/images/posts/image.png",
  // ...
};
```

## Blog System

The blog system supports:

- Markdown content with full syntax support
- Code syntax highlighting
- Reading time estimation
- Tag-based filtering
- Search functionality
- Excerpt extraction from markdown
- Custom cover images per post
- Date-based grouping

## Key Features

### Interactive Project Carousel

- 3D coverflow effect with smooth animations
- Auto-play with pause on interaction
- Infinite loop scrolling
- Click-based navigation
- Synchronized project description scrolling

### Skills Proficiency Display

- Circular progress bars with gradient colors
- Scroll-triggered animations
- Smooth number counting animations
- Customizable skill colors

### Page Transitions

- Smooth fade-in and scale animations
- Staggered delays for elements
- Scroll restoration management

### Comments System

- Giscus integration (GitHub Discussions)
- Configurable via environment variables
- Multiple theme options

## Customization

1. **Add new blog posts**: Create Markdown files in `src/content/posts/`
2. **Update site content**: Modify `src/config/site.ts`
3. **Customize projects**: Edit `src/config/projects.ts`
4. **Modify styles**: Update CSS files in `src/styles/`
5. **Change colors**: Update CSS variables in `src/styles/home.css`

## Environment Variables

For Giscus comments, you can set these environment variables:

```env
PUBLIC_GISCUS_REPO=your-username/your-repo
PUBLIC_GISCUS_REPO_ID=your-repo-id
PUBLIC_GISCUS_CATEGORY_ID=your-category-id
```

## License

MIT

## Author

tomcomtang

## About

A modern portfolio website template built with Astro, featuring a cartoon-style design, interactive project showcase, and a complete blog system with comment integration.
