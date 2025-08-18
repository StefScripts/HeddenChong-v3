# Hedden Chong LLP Website

A modern, professional, mobile-responsive website for Hedden Chong LLP accounting firm, built with PHP 8, HTML5, CSS3, and vanilla JavaScript.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1280px+
- **Professional Aesthetic**: Conservative, clean design with no rounded buttons or card UI
- **Accessibility Compliant**: WCAG AA standards with semantic HTML, proper focus states, and screen reader support
- **SEO Optimized**: Proper meta tags, Open Graph, JSON-LD schema markup
- **Performance Focused**: Lightweight vanilla JavaScript, optimized CSS, lazy loading
- **Client Portal**: Secure access portal for client documents and communication
- **Team Profiles**: Individual profile pages for all 14 team members
- **Service Pages**: Comprehensive service listings and descriptions
- **Resources Section**: Valuable financial resources and tools
- **Important Dates**: Tax deadlines and compliance dates table

## Setup Instructions

### Requirements

- PHP 8.0 or higher
- Web server (Apache, Nginx, or PHP built-in server)
- Modern web browser

### Quick Start

1. **Navigate to the project directory** in your terminal:
   ```bash
   cd C:\Users\user\OneDrive\Documents\HeddenChong-v3
   ```

2. **Start the PHP built-in server** (easiest for local development):
   ```bash
   php -S localhost:8000
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

### Alternative Setup Methods

#### Apache/Nginx
1. Copy project files to your web root directory (e.g., `/var/www/html/` or `htdocs/`)
2. Ensure your web server is configured to serve PHP files
3. Access via your configured domain or localhost

#### XAMPP/WAMP/MAMP
1. Copy project folder to the `htdocs` or `www` directory
2. Start Apache and PHP services
3. Access via `http://localhost/HeddenChong-v3/`

## Project Structure

```
HeddenChong-v3/
├── index.php                    # Homepage with hero, services, team, testimonials
├── our-team.php                 # Team overview page with all members
├── services.php                 # Comprehensive service listings
├── resources.php                # Resource library with categories
├── dates.php                    # Important tax dates and deadlines
├── client-portal.php            # Client portal information and access
├── contact.php                  # Contact form and office information
├── css/
│   └── styles.css               # Complete CSS framework (responsive)
├── js/
│   └── main.js                  # JavaScript functionality and interactions
├── images/
│   ├── logo-hedden-chong.jpg    # Company logo
│   ├── CPA-BC-300x127.jpg       # CPA BC certification logo
│   ├── hero-*.jpg               # Hero background images (5 pages)
│   ├── client-portal.jpg        # Portal interface placeholder
│   └── team/                    # Team member headshots (14 people)
├── partials/
│   ├── header.php               # Shared header with navigation
│   └── footer.php               # Shared footer with contact info
├── our-team/                    # Individual team member profiles
│   ├── index.php                # Redirect to main team page
│   ├── andrew-young.php         # Managing Partner profile
│   ├── foo-chan.php             # Senior Manager profile
│   └── [12 other profiles].php # All team member pages
└── README.md                    # This documentation file
```

## Design System

### Color Palette
- **Primary**: `#0f2a4a` (Dark blue)
- **Text**: `#111` (Near black)
- **Muted**: `#666` (Gray)
- **Background**: `#fff` (White)
- **Alt Background**: `#f3f4f6` (Light gray)
- **Dark**: `#0b1320` (Near black)

### Typography
- **Font Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`
- **Base Size**: 16px (responsive)
- **Line Height**: 1.75 for body text, 1.2 for headings

### Layout
- **Max Width**: 1200px container with responsive padding
- **Breakpoints**: 0-480px, 481-768px, 769-1279px, 1280px+
- **Hero Heights**: 70vh for homepage, 420px for internal pages

## Content Overview

### Homepage (index.php)
- Hero section with firm introduction
- Value proposition and services overview
- Team member highlights (4 featured)
- Client testimonials (5 professional testimonials)
- Call-to-action sections

### Team Pages
- **our-team.php**: Grid of all 14 team members
- **Individual profiles**: Each member has dedicated page with:
  - Professional headshot and qualifications
  - Detailed biography and expertise areas
  - Contact information and specialties
  - Breadcrumb navigation

### Services (services.php)
- **Tax Services**: Personal & corporate tax, planning, estate
- **Accounting & Bookkeeping**: Financial statements, payroll, reporting
- **Business Advisory**: Strategic planning, valuations, succession
- **Audit & Assurance**: Financial audits, reviews, compliance

### Resources (resources.php)
- **Tax Information**: Guides, rates, strategies
- **Business Resources**: Templates, guides, compliance
- **Financial Planning**: Calculators, investment guides
- **Industry Updates**: Newsletters, regulatory changes

### Important Dates (dates.php)
- Personal tax deadlines table
- Corporate tax deadlines
- GST/HST filing dates
- Other compliance requirements

### Client Portal (client-portal.php)
- Portal features and benefits
- Security information
- Setup instructions and FAQ
- Technical requirements

### Contact (contact.php)
- Contact form with validation
- Office information and hours
- Map placeholder and directions
- Transportation details

## Technical Features

### JavaScript Functionality
- Sticky header with scroll effects
- Mobile navigation toggle
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Form validation with accessible error messages
- Smooth scrolling for anchor links
- Performance optimizations

### Accessibility Features
- Semantic HTML5 structure
- Proper heading hierarchy (h1-h6)
- Alt text for all images
- Keyboard navigation support
- Focus indicators for interactive elements
- Screen reader compatibility
- WCAG AA color contrast compliance
- Skip to main content link

### SEO Optimization
- Proper meta tags for each page
- Open Graph tags for social sharing
- JSON-LD structured data (homepage)
- Semantic markup and microdata
- Descriptive URLs and page titles
- Image alt attributes

## Browser Support

- Chrome 60+
- Firefox 60+  
- Safari 12+
- Edge 79+
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 6+)

## Performance Features

- Lightweight vanilla JavaScript (no frameworks)
- CSS custom properties for consistent theming
- Optimized images and lazy loading
- Minimal HTTP requests
- Compressed and efficient code

## Customization Guide

### Replacing Placeholder Content

1. **Images**: Replace placeholder images in `/images/` with actual:
   - Company logos and branding
   - Professional team member headshots
   - Hero background images
   - CPA certification logos

2. **Contact Information**: Update in:
   - `partials/footer.php`: Address, phone, email
   - `contact.php`: Office details, hours, location
   - `partials/header.php`: Schema markup data

3. **Team Members**: Update profiles in `/our-team/`:
   - Replace lorem ipsum with actual bios
   - Update qualifications and specialties
   - Correct email addresses and contact info

4. **Services**: Customize `services.php`:
   - Update service descriptions
   - Modify pricing or packages
   - Add/remove service categories

5. **Resources**: Update `resources.php`:
   - Replace dummy links with real resources
   - Add actual downloadable documents
   - Update regulatory information

### Adding New Features

1. **New Team Member**:
   - Create profile page in `/our-team/`
   - Add to team grid in `our-team.php`
   - Include headshot in `/images/team/`

2. **New Page**:
   - Create PHP file in root directory
   - Include header/footer partials
   - Use `setPageMeta()` for SEO
   - Add to navigation menus

3. **New Service Category**:
   - Add section to `services.php`
   - Update homepage service teasers
   - Consider dedicated landing page

## Production Deployment

### Before Going Live

1. **Replace all placeholder content** with real information
2. **Optimize images** for web (compress, proper formats)
3. **Implement backend form handling** for contact form
4. **Set up web hosting** with PHP 8+ support
5. **Configure SSL certificate** for HTTPS
6. **Test across browsers and devices**
7. **Validate HTML/CSS** and check accessibility
8. **Set up analytics** (Google Analytics, etc.)

### Security Considerations

- Contact form is client-side only (needs backend)
- No database connections or user data storage
- All placeholder links should be updated
- Implement proper form handling with CSRF protection
- Regular security updates and monitoring

## Support & Maintenance

- Built with modern web standards
- Clean, commented code for easy maintenance  
- Modular structure for scalability
- Performance optimized and accessibility compliant
- Ready for professional deployment

## Version Information

**Version**: 3.0  
**Built**: 2024  
**Requirements**: PHP 8.0+, Modern browsers  
**Framework**: None (Vanilla JavaScript)  
**Status**: Production ready with placeholder content
