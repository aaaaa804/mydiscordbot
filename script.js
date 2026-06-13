(() => {
    document.body.classList.add('js-ready');
    const prevent = (e) => e.preventDefault();
    ['contextmenu', 'dragstart', 'selectstart'].forEach(ev => {
        document.addEventListener(ev, prevent);
    });
    const blockedKeys = new Set(['c', 'v', 'u', 's']);
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || (e.ctrlKey && blockedKeys.has(e.key.toLowerCase()))) {
            prevent(e);
        }
    });
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { 
                entry.target.classList.add('v'); 
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -32px 0px' });
    document.querySelectorAll('.r').forEach(el => observer.observe(el));
})();