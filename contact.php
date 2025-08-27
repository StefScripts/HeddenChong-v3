<?php
include 'partials/header.php';
setPageMeta('Contact Us', 'Contact Hedden Chong LLP for professional accounting and tax services. Get in touch with our experienced team for a consultation.');
?>

<section class="hero hero--internal" style="background-image: url('images/hero-contact.jpg');">
    <div class="hero__content">
        <h1 class="hero__title">Contact Us</h1>
        <p class="hero__subtitle">Get in touch with our team of experts today.</p>
    </div>
</section>

<section class="section section" id="contact-form">
    <div class="container">
        <div class="grid grid--2">
            <div class="fade-in">
                <h2>Send Us a Message</h2>
                <form id="contact-form" class="contact-form">
                    <div class="form-group">
                        <label for="name" class="form-label">Full Name *</label>
                        <input type="text" id="name" name="name" class="form-input" required>
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label">Email Address *</label>
                        <input type="email" id="email" name="email" class="form-input" required>
                    </div>

                    <div class="form-group">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input type="tel" id="phone" name="phone" class="form-input">
                    </div>

                    <div class="form-group">
                        <label for="company" class="form-label">Company/Organization</label>
                        <input type="text" id="company" name="company" class="form-input">
                    </div>

                    <div class="form-group">
                        <label for="service" class="form-label">Service Interest</label>
                        <select id="service" name="service" class="form-select">
                            <option value="">Select a service...</option>
                            <option value="tax-preparation">Tax Preparation</option>
                            <option value="accounting-bookkeeping">Accounting & Bookkeeping</option>
                            <option value="business-advisory">Business Advisory</option>
                            <option value="audit-assurance">Audit & Assurance</option>
                            <option value="estate-planning">Estate Planning</option>
                            <option value="business-valuation">Business Valuation</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="message" class="form-label">Message *</label>
                        <textarea id="message" name="message" class="form-textarea" rows="6"
                            placeholder="Please describe how we can help you..." required></textarea>
                    </div>

                    <div class="form-group">
                        <label>
                            <input type="checkbox" name="consent" required>
                            I consent to being contacted by Hedden Chong LLP regarding my inquiry. *
                        </label>
                    </div>

                    <button type="submit" class="btn btn--primary btn--large">Send Message</button>
                </form>
            </div>

            <div class="fade-in">
                <div class="contact-info">
                    <h3>Office Information</h3>
                    <address style="font-style: normal;">
                        <p style="font-size: 1.05rem;"><strong>Hedden Chong LLP</strong><br>
                            #104-3989 Henning Drive<br>
                            Burnaby, BC V5C 6P8<br>
                            Canada</p>

                        <div style="font-size: 1.05rem;">
                            <p><strong>Phone:</strong><br><a href="tel:+16043205850">(604) 320-5850</a><br></p>
                        </div>
                        <div style="font-size: 1.05rem;">
                            <p><strong>Fax:</strong><br>(604) 291-1601<br></p>
                        </div>
                        <div style="font-size: 1.05rem;">
                            <p><strong>Email:</strong><br><a href="mailto:info@heddenchong.com">info@heddenchong.com</a>
                            </p>
                        </div>
                    </address>
                </div>
            </div>

        </div>
    </div>
</section>



<!-- <section class="section section--alt">
    <div class="container">
        <h2 class="section__title">Why Choose Hedden Chong LLP?</h2>
        
        <div class="grid grid--3">
            <div class="fade-in">
                <h3>Experience & Expertise</h3>
                <p>Over 60 years of professional service with a team of certified professionals who stay current with industry developments and regulatory changes.</p>
            </div>
            <div class="fade-in">
                <h3>Personalized Service</h3>
                <p>We take the time to understand your unique situation and provide tailored solutions that align with your financial goals and objectives.</p>
            </div>
            <div class="fade-in">
                <h3>Comprehensive Solutions</h3>
                <p>From tax preparation to complex business advisory services, we offer a full range of accounting and financial services under one roof.</p>
            </div>
        </div>
    </div>
</section> -->

<!-- <section class="cta">
    <div class="container">
        <h2 class="cta__title">Ready to Get Started?</h2>
        <p class="cta__text">Contact Hedden Chong LLP today to schedule a consultation and discover how our professional
            services can benefit you.</p>
        <div class="cta__actions">
            <a href="tel:+16043205850" class="btn btn--white btn--large">(604) 320-5850</a>
            <a href="mailto:info@heddenchong.com" class="btn btn--secondary"
                style="color: white; border-color: white;">Email Us</a>
        </div>
    </div>
</section> -->

<script>
    // Additional form handling for contact form
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // In a real implementation, this would send the form data to a server
        // For demo purposes, we'll show a simple success message
        alert('Thank you for your message! We will contact you within 1 business day.');

        // Reset form
        this.reset();
    });
</script>

<?php include 'partials/footer.php'; ?>