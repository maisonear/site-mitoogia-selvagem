document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.biome-section');

    // Dynamic Sound System based on Scroll (Placeholder logic)
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Ativo: ${entry.target.id}`);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Unified Parallax System for Android and iOS
    const parallaxElements = [document.getElementById('hero'), ...document.querySelectorAll('.biome-section')];

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            if (!el) return;

            // Calculate if element is in view
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                // Determine relative position to the viewport
                const offset = (window.pageYOffset - el.offsetTop) * 0.4;
                el.style.backgroundPositionY = offset + 'px';
            }
        });
    });

    // Accessibility: High Contrast Toggle (Simulated)
    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key === 'H') {
            document.body.classList.toggle('high-contrast');
            console.log("High Contrast Toggled");
        }
    });
});
