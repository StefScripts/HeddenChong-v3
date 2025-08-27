<?php
function setPageMeta($title, $description)
{
    global $page_title, $page_description;
    $page_title = $title;
    $page_description = $description;
}

$current_page = basename($_SERVER['REQUEST_URI'], '.php');
if ($current_page === '' || $current_page === 'index') {
    $current_page = 'home';
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php echo isset($page_title) ? $page_title . ' | Hedden Chong LLP' : 'Hedden Chong LLP - Professional Accounting Services'; ?>
    </title>
    <meta name="description"
        content="<?php echo isset($page_description) ? $page_description : 'Professional accounting and tax services from Hedden Chong LLP. Serving clients since 1961 with expert financial guidance.'; ?>">

    <!-- Open Graph -->
    <meta property="og:title"
        content="<?php echo isset($page_title) ? $page_title . ' | Hedden Chong LLP' : 'Hedden Chong LLP - Professional Accounting Services'; ?>">
    <meta property="og:description"
        content="<?php echo isset($page_description) ? $page_description : 'Professional accounting and tax services from Hedden Chong LLP. Serving clients since 1961 with expert financial guidance.'; ?>">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Hedden Chong LLP">

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/css/styles.css">

    <?php if ($current_page === 'home'): ?>
        <!-- JSON-LD Organization Schema -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hedden Chong LLP",
            "foundingDate": "1961",
            "description": "Professional accounting and tax services",
            "url": "https://example.com",
            "logo": "https://example.com/images/logo-hedden-chong.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Professional Drive",
                "addressLocality": "Vancouver",
                "addressRegion": "BC",
                "postalCode": "V6B 1A1",
                "addressCountry": "CA"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-604-555-0123",
                "contactType": "customer service",
                "email": "info@heddenchong.ca"
            }
        }
        </script>
    <?php endif; ?>
</head>

<body>
    <!-- <a href="#main" class="sr-only">Skip to main content</a> -->

    <header class="header" id="header">
        <div class="container">
            <div class="header__content">
                <a href="/index.php" style="text-decoration: none;">
                    <div class="header__brand">
                        <img src="/images/logo-hedden-chong.jpg" alt="Hedden Chong LLP Logo" class="header__logo">
                        <div class="header__text">
                            <h1 class="header__title">Hedden Chong LLP</h1>
                            <p class="header__tagline">since 1961</p>
                        </div>
                    </div>
                </a>

                <nav class="nav" role="navigation" aria-label="Main navigation">
                    <button class="nav__toggle" aria-expanded="false" aria-controls="nav-menu"
                        aria-label="Toggle navigation menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul class="nav__menu" id="nav-menu">
                        <li class="nav__item">
                            <a href="/index.php"
                                class="nav__link <?php echo $current_page === 'home' ? 'nav__link--active' : ''; ?>">Home</a>
                        </li>
                        <li class="nav__item">
                            <a href="/our-team.php"
                                class="nav__link <?php echo $current_page === 'our-team' ? 'nav__link--active' : ''; ?>">Our
                                Team</a>
                        </li>
                        <li class="nav__item">
                            <a href="/services.php"
                                class="nav__link <?php echo $current_page === 'services' ? 'nav__link--active' : ''; ?>">Services</a>
                        </li>
                        <li class="nav__item">
                            <a href="/resources.php"
                                class="nav__link <?php echo $current_page === 'resources' ? 'nav__link--active' : ''; ?>">Resources</a>
                        </li>
                        <!-- <li class="nav__item">
                            <a href="dates.php" class="nav__link <?php echo $current_page === 'dates' ? 'nav__link--active' : ''; ?>">Important Dates</a>
                        </li> -->
                        <li class="nav__item">
                            <a href="/client-portal.php"
                                class="nav__link <?php echo $current_page === 'client-portal' ? 'nav__link--active' : ''; ?>">Client
                                Portal</a>
                        </li>
                        <li class="nav__item">
                            <a href="/contact.php"
                                class="nav__link <?php echo $current_page === 'contact' ? 'nav__link--active' : ''; ?>">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <main id="main" role="main">