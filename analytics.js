// Lightweight consent-based analytics loader using Plausible

// Set this to your Plausible tracking domain.
const ANALYTICS_DOMAIN = 'example.com';

(function () {
    if (!ANALYTICS_DOMAIN || ANALYTICS_DOMAIN === 'example.com') {
        return; // Skip loading if not configured
    }

    function loadAnalytics() {
        const s = document.createElement('script');
        s.defer = true;
        s.dataset.domain = ANALYTICS_DOMAIN;
        s.src = 'https://plausible.io/js/script.js';
        document.head.appendChild(s);
    }

    function createBanner() {
        const banner = document.createElement('div');
        banner.id = 'analytics-banner';
        banner.textContent = 'This site uses anonymous analytics to improve the game.';

        const accept = document.createElement('button');
        accept.textContent = 'Accept';
        const decline = document.createElement('button');
        decline.textContent = 'Decline';

        accept.addEventListener('click', function () {
            localStorage.setItem('analytics_consent', 'accepted');
            banner.remove();
            loadAnalytics();
        });

        decline.addEventListener('click', function () {
            localStorage.setItem('analytics_consent', 'declined');
            banner.remove();
        });

        banner.appendChild(accept);
        banner.appendChild(decline);
        document.body.appendChild(banner);
    }

    const consent = localStorage.getItem('analytics_consent');
    if (consent === 'accepted') {
        loadAnalytics();
    } else if (consent === 'declined') {
        return;
    } else {
        window.addEventListener('DOMContentLoaded', createBanner);
    }
})();

