# E-Commerce Web App

An interactive e-commerce website built with Next.js 15, styled with custom CSS, and state-managed via Redux Toolkit. This project simulates a modern online shopping experience with dynamic API usage and responsive UI/UX design.

## Features

-Responsive Sticky Navbar  
  Colorful accent line, responsive layout. On larger screens: full horizontal menu. On mobile: hamburger menu opens and closes the full menu smoothly.

-Dropdown Menu Support 
  Submenus appear on hover (desktop) or click (mobile) for categories like "Sofra" → "Yemek Takımları".

-Main Slider (Deal of the Day)
  Large rotating slider with clickable images linking to external URLs. Includes auto-slide and manual navigation buttons.

-Electronics Deals Slider  
  Compact, rotating slider showcasing selected electronic items, dynamically fetched from the database.

-Personalized Product Section ("Sana Özel Ürünler")  
  Products are dynamically fetched from `/api/recommendations`, displayed in card format, and redirect to detail pages.

-Visited Products 
  Previously viewed products tracked and displayed using Redux. Cards update instantly as users explore items.

-Quick Links (Campaign Section) 
  Visually rich campaign cards with images and labels, sourced from SQLite and rendered in a flexible grid.

-Product Detail Page  
  Dynamic route `/products/[id]` loads individual product content from the database using API routes.

-Local SQLite Database 
  Connected via Next.js API routes (`/api/...`), powering all product and campaign data dynamically.

-Fully Mobile Compatible 
  All sections are responsive. Layout adapts across screen sizes using `grid` and `flex` with media queries.

## Technologies Used

Technologies Used
Next.js 15
React
Redux Toolkit
SQLite (via API routes)
CSS Modules / Global Styles
Resimlink.com (for CDN image hosting)


## Live Preview
https://se-3355-assignment1.onrender.com/
