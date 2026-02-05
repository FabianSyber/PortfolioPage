# Project Cards Redesign

## Overview
The project cards have been completely redesigned to provide a better user experience with full-screen expanded views that include scrolling image headers and post content.

## Changes Made

### 1. Small Card Design (Preserved)
- **Key Features**: Always visible, shows first 3 features with "+X more" indicator
- **Technologies**: Shows first 3 technologies with "+X more" indicator  
- **Visual Elements**: Color blocks, icons, and category tags maintained
- **Interaction**: "View Details" button opens full-screen modal

### 2. Full-Screen Modal
- **Layout**: Fills entire screen with dark backdrop
- **Close Button**: Top-right corner for easy access
- **Scrolling**: Modal content is scrollable, body scroll is prevented when open

### 3. Scrolling Image Header
- **Location**: Sticky header at top of modal
- **Functionality**: Horizontal scrolling of project images
- **Image Source**: Loads from `/images/{project-id}/` folder
- **Fallback**: Uses placeholder images if project images not found
- **Interaction**: Click any image to set it as active preview

### 4. Post Content Integration
- **Source**: Loads from `/posts/{project-id}/index.html`
- **Display**: Shows in dedicated section below project overview
- **Fallback**: Shows informative message if post not available

### 5. Modal Content Sections
1. **Project Header**: Title, category, year, and links
2. **Project Overview**: Full description
3. **Post Content**: Dynamic content from posts folder
4. **Key Features**: Grid layout of all features
5. **Sidebar**: Technologies list and active image preview

## Technical Implementation

### Files Modified
- `/src/components/ProjectsSection.vue` - Complete rewrite

### Key Functions
- `openProjectModal()`: Opens full-screen modal for a project
- `closeProjectModal()`: Closes modal and restores scroll
- `loadProjectImages()`: Loads images from project folder
- `loadPostContent()`: Loads post content from posts folder
- `setActiveImage()`: Sets clicked image as active preview

### Data Structure
Projects array includes:
- `id`: Used to map to image/post folders
- `title`, `category`, `year`: Basic info
- `shortDescription`, `fullDescription`: Descriptions
- `technologies`, `features`: Arrays of items
- `demoLink`, `githubLink`: Optional links
- `color`, `icon`: Visual elements

## How to Use

### Adding New Projects
1. Add project object to `projects` array
2. Create image folder at `/images/{project-id}/`
3. Add images (named a.png, b.png, c.png, etc.)
4. Create post at `/posts/{project-id}/index.html` (optional)

### Customizing Images
- Images are loaded from `/images/{project-id}/` folder
- Expected naming: a.png, b.png, c.png, d.png
- Can modify `loadProjectImages()` for different naming

### Customizing Post Content
- Modify `loadPostContent()` to fetch actual HTML content
- In production, implement API endpoint to serve post content

## Responsive Design
- Modal works on all screen sizes
- Grid layouts adjust for mobile/tablet/desktop
- Images scale appropriately
- Text remains readable on small screens

## Browser Compatibility
- Uses modern CSS (Tailwind)
- Requires ES6+ support
- Works in all modern browsers