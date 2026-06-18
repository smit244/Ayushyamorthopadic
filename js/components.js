// ============================================
// Ayushyam Hospital — Shared Components
// Dynamically injects Header, Footer, and
// Floating Action Buttons into every page.
// ============================================

(function () {
    // Determine base path based on page depth
    const depth = (window.AYUSHYAM_PATH_DEPTH || 0);
    const base = depth === 0 ? '' : '../'.repeat(depth);

    // Current page for active nav highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    function isActive(href) {
        const hrefPage = href.split('/').pop().split('#')[0];
        if (currentPage === 'index.html' || currentPage === '') {
            return href.startsWith('#') || hrefPage === 'index.html';
        }
        return hrefPage === currentPage;
    }

    function activeClass(href) {
        return isActive(href) ? ' active' : '';
    }

    // ---- NAV ITEMS ----
    const navItems = [
        { label: 'Home', href: base + 'index.html' },
        { label: 'Doctor', href: base + 'doctor.html' },
        { label: 'Specialities', href: base + 'services.html' },
        { label: 'About Us', href: base + 'about.html' },
        { label: 'Contact Us', href: base + 'contact.html' },
        { label: 'Gallery', href: base + 'gallery.html' }
    ];

    const navLinksHtml = navItems.map(item =>
        `<a href="${item.href}" class="${activeClass(item.href)}">${item.label}</a>`
    ).join('');

    const mobileNavHtml = navItems.map(item =>
        `<a href="${item.href}" class="${activeClass(item.href)}">${item.label}</a>`
    ).join('');

    // ---- FLOATING BUTTONS ----
    const floatingHtml = `
    <a href="https://wa.me/918140740781?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Chat on WhatsApp">
        <i data-lucide="message-circle"></i>
    </a>
    <a href="tel:+918140740781" class="call-float" aria-label="Call Now">
        <i data-lucide="phone"></i>
    </a>
    `;

    // ---- MOBILE MENU ----
    const mobileMenuHtml = `
    <div id="mobile-menu" class="mobile-menu">
        <div class="mobile-menu-header">
            <a href="${base}index.html" class="logo"><img src="${base}public/images/logo.png" alt="Ayushyam Logo"></a>
            <button id="mobile-menu-close" class="mobile-menu-close" aria-label="Close Menu"><i data-lucide="x"></i></button>
        </div>
        <nav class="mobile-nav">
            ${mobileNavHtml}
        </nav>
        <div class="mobile-menu-actions">
            <a href="${base}appointment.html" class="btn btn-primary" style="width:100%">Book Appointment</a>
            <a href="tel:+918140740781" class="btn btn-secondary" style="width:100%"><i data-lucide="phone"></i> Call Now</a>
        </div>
    </div>
    `;

    // ---- HEADER ----
    const headerHtml = `
    <header id="header" class="header glass">
        <div class="container header-container">
            <a href="${base}index.html" class="logo">
                <img src="${base}public/images/logo.png" alt="Ayushyam Orthopedic Hospital Logo">
            </a>
            <nav class="nav-links">
                ${navLinksHtml}
            </nav>
            <div class="header-actions">
                <a href="tel:+918140740781" class="call-now">
                    <i data-lucide="phone"></i> Call Now
                </a>
                <a href="${base}appointment.html" class="btn btn-primary">Book Appointment</a>
            </div>
            <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Menu">
                <i data-lucide="menu"></i>
            </button>
        </div>
    </header>
    `;

    // ---- FOOTER ----
    const footerHtml = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="${base}index.html" class="logo"><img src="${base}public/images/logo.png" alt="Ayushyam Logo"></a>
                    <p>Ayushyam Orthopedic & Multispeciality Hospital is Surat's leading center for advanced orthopedic care, providing world-class treatment with compassion and expertise.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
                        <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
                        <a href="#" aria-label="Youtube"><i data-lucide="youtube"></i></a>
                        <a href="#" aria-label="Linkedin"><i data-lucide="linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="${base}index.html">Home</a></li>
                        <li><a href="${base}about.html">About Us</a></li>
                        <li><a href="${base}doctor.html">Our Doctor</a></li>
                        <li><a href="${base}testimonials.html">Testimonials</a></li>
                        <li><a href="${base}gallery.html">Gallery</a></li>
                        <li><a href="${base}blog.html">Blog</a></li>
                        <li><a href="${base}contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="${base}services/knee-replacement.html">Knee Replacement</a></li>
                        <li><a href="${base}services/arthroscopy.html">Arthroscopy</a></li>
                        <li><a href="${base}services/sports-injury.html">Sports Injury</a></li>
                        <li><a href="${base}services/physiotherapy.html">Physiotherapy</a></li>
                        <li><a href="${base}services/trauma-care.html">Trauma Care</a></li>
                        <li><a href="${base}services/fracture-treatment.html">Fracture Treatment</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Contact Info</h4>
                    <p><i data-lucide="map-pin"></i> Surat, Gujarat, India</p>
                    <p><i data-lucide="phone"></i> <a href="tel:+918140740781">+91 8140740781</a></p>
                    <p><i data-lucide="mail"></i> <a href="mailto:info@ayushyamhospital.com">info@ayushyamhospital.com</a></p>
                    <div class="newsletter">
                        <h4>Newsletter</h4>
                        <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
                            <input type="email" placeholder="Your email address" required>
                            <button type="submit" aria-label="Subscribe"><i data-lucide="send"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Ayushyam Orthopedic & Multispeciality Hospital. All Rights Reserved.</p>
                <div class="footer-bottom-links">
                    <a href="${base}privacy-policy.html">Privacy Policy</a>
                    <a href="${base}terms.html">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // ---- INJECT INTO DOM ----
    document.body.insertAdjacentHTML('afterbegin', floatingHtml + mobileMenuHtml + headerHtml);
    document.body.insertAdjacentHTML('beforeend', footerHtml);

    // ---- RE-INIT LUCIDE ICONS for injected content ----
    if (window.lucide) lucide.createIcons();

    // ---- MOBILE MENU LOGIC ----
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileClose = document.getElementById('mobile-menu-close');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }
    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    }
    // Close on nav link click
    if (mobileMenu) {
        mobileMenu.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- STICKY HEADER ----
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                header.classList.remove('glass');
            } else {
                header.classList.remove('scrolled');
                header.classList.add('glass');
            }
        });
    }
})();
