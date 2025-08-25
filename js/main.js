/**
 * Main JavaScript file for Hedden Chong LLP website
 * Handles navigation interactions, scroll effects, and mobile menu
 */

(function () {
  'use strict';

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Sticky Header Functionality
   * Adds shadow to header when scrolled
   */
  function initStickyHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let ticking = false;

    function updateHeaderState() {
      const scrolled = window.pageYOffset > 10;
      header.classList.toggle('header--scrolled', scrolled);
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  /**
   * Mobile Navigation Toggle
   * Handles mobile menu open/close functionality
   */
  function initMobileNavigation() {
    const toggleButton = document.querySelector('.nav__toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!toggleButton || !navMenu) return;

    let isMenuOpen = false;

    function toggleMenu() {
      isMenuOpen = !isMenuOpen;

      toggleButton.setAttribute('aria-expanded', isMenuOpen.toString());
      navMenu.classList.toggle('nav__menu--open', isMenuOpen);

      // Prevent body scroll when menu is open
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    function closeMenu() {
      if (isMenuOpen) {
        isMenuOpen = false;
        toggleButton.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav__menu--open');
        document.body.style.overflow = '';
      }
    }

    // Toggle menu on button click
    toggleButton.addEventListener('click', toggleMenu);

    // Close menu when clicking on nav links
    navMenu.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav__link')) {
        closeMenu();
      }
    });

    // Close menu when clicking outside or pressing escape
    document.addEventListener('click', function (e) {
      if (isMenuOpen && !toggleButton.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
        toggleButton.focus();
      }
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024 && isMenuOpen) {
        closeMenu();
      }
    });
  }

  /**
   * Scroll Reveal Animation
   * Animates elements as they come into view using IntersectionObserver
   */
  function initScrollReveal() {
    if (prefersReducedMotion) return;

    // Elements to animate
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .team-member, .testimonial, .service-item');

    if (animatedElements.length === 0) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add animation classes and observe elements
    animatedElements.forEach(function (element, index) {
      // Add staggered delay for elements in the same container
      if (!prefersReducedMotion) {
        element.style.transitionDelay = (index % 4) * 100 + 'ms';
      }

      // Add appropriate animation class if not already present
      if (!element.classList.contains('fade-in') && !element.classList.contains('slide-in-left') && !element.classList.contains('slide-in-right')) {
        element.classList.add('fade-in');
      }

      observer.observe(element);
    });
  }

  /**
   * Form Validation
   * Provides client-side form validation with accessible error messages
   */
  function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        // Clear previous errors
        clearFormErrors(form);

        requiredFields.forEach(function (field) {
          if (!validateField(field)) {
            isValid = false;
          }
        });

        // Validate email fields
        const emailFields = form.querySelectorAll('input[type="email"]');
        emailFields.forEach(function (field) {
          if (field.value && !isValidEmail(field.value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
          }
        });

        if (!isValid) {
          e.preventDefault();
          // Focus on first error field
          const firstError = form.querySelector('.form-error');
          if (firstError && firstError.previousElementSibling) {
            firstError.previousElementSibling.focus();
          }
        }
      });

      // Real-time validation
      form.addEventListener(
        'blur',
        function (e) {
          if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            validateField(e.target);
          }
        },
        true
      );
    });
  }

  function validateField(field) {
    let isValid = true;

    // Check if required field is empty
    if (field.hasAttribute('required') && !field.value.trim()) {
      showFieldError(field, 'This field is required');
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showFieldError(field, message) {
    clearFieldError(field);

    const errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    errorElement.textContent = message;
    errorElement.id = field.id + '-error';

    field.setAttribute('aria-describedby', errorElement.id);
    field.classList.add('form-input--error');

    field.parentNode.appendChild(errorElement);
  }

  function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.form-error');
    if (existingError) {
      existingError.remove();
      field.removeAttribute('aria-describedby');
      field.classList.remove('form-input--error');
    }
  }

  function clearFormErrors(form) {
    const errors = form.querySelectorAll('.form-error');
    errors.forEach(function (error) {
      error.remove();
    });

    const errorFields = form.querySelectorAll('.form-input--error');
    errorFields.forEach(function (field) {
      field.classList.remove('form-input--error');
      field.removeAttribute('aria-describedby');
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   * Provides smooth scrolling for internal anchor links
   */
  function initSmoothScroll() {
    if (prefersReducedMotion) return;

    document.addEventListener('click', function (e) {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href === '#') return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();

      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }

  /**
   * Skip Link Functionality
   * Ensures skip link works properly
   */
  function initSkipLink() {
    const skipLink = document.querySelector('.sr-only');
    if (!skipLink) return;

    skipLink.addEventListener('focus', function () {
      this.style.position = 'fixed';
      this.style.top = '10px';
      this.style.left = '10px';
      this.style.width = 'auto';
      this.style.height = 'auto';
      this.style.padding = '10px';
      this.style.backgroundColor = 'var(--color-primary)';
      this.style.color = 'white';
      this.style.textDecoration = 'none';
      this.style.zIndex = '9999';
      this.style.border = '2px solid white';
    });

    skipLink.addEventListener('blur', function () {
      this.style.position = 'absolute';
      this.style.width = '1px';
      this.style.height = '1px';
      this.style.padding = '0';
      this.style.margin = '-1px';
      this.style.overflow = 'hidden';
      this.style.clip = 'rect(0, 0, 0, 0)';
      this.style.whiteSpace = 'nowrap';
      this.style.border = '0';
      this.style.backgroundColor = 'transparent';
    });
  }

  /**
   * Performance Optimization
   * Lazy load images and optimize performance
   */
  function initPerformanceOptimizations() {
    // Lazy loading for images (if not natively supported)
    if ('loading' in HTMLImageElement.prototype === false) {
      const images = document.querySelectorAll('img[data-src]');

      if (images.length > 0) {
        const imageObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(function (img) {
          imageObserver.observe(img);
        });
      }
    }
  }

  /**
   * Initialize all functionality when DOM is ready
   */
  function init() {
    initStickyHeader();
    initMobileNavigation();
    initScrollReveal();
    initFormValidation();
    initSmoothScroll();
    initSkipLink();
    initPerformanceOptimizations();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Handle browser back/forward buttons
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      // Page was loaded from cache, ensure proper state
      document.body.style.overflow = '';
      const navMenu = document.getElementById('nav-menu');
      const toggleButton = document.querySelector('.nav__toggle');

      if (navMenu) navMenu.classList.remove('nav__menu--open');
      if (toggleButton) toggleButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Accordion functionality for Resources page
  function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length === 0) return;

    accordionHeaders.forEach((header) => {
      header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.accordion-icon');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Close all other accordions
        accordionHeaders.forEach((otherHeader) => {
          if (otherHeader !== this) {
            otherHeader.setAttribute('aria-expanded', 'false');
            otherHeader.nextElementSibling.classList.remove('open');
            const otherIcon = otherHeader.querySelector('.accordion-icon');
            if (otherIcon) otherIcon.textContent = '+';
          }
        });

        // Toggle current accordion
        if (isExpanded) {
          this.setAttribute('aria-expanded', 'false');
          content.classList.remove('open');
          if (icon) icon.textContent = '+';
        } else {
          this.setAttribute('aria-expanded', 'true');
          content.classList.add('open');
          if (icon) icon.textContent = '−';
        }
      });
    });
  }

  // Initialize accordions when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordions);
  } else {
    initAccordions();
  }
})();
