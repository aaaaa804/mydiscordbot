(() => {
    // 1. JS 로드 상태 표시
    document.body.classList.add('js-ready');
    // 2. 단순 기본 동작 차단 이벤트 통합 (우클릭, 드래그, 텍스트 선택)
    const prevent = (e) => e.preventDefault();
    ['contextmenu', 'dragstart', 'selectstart'].forEach(ev => {
        document.addEventListener(ev, prevent);
    });
    // 3. 단축키 방지 최적화 (Set을 사용하여 검색 속도 향상)
    const blockedKeys = new Set(['c', 'v', 'u', 's']);
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || (e.ctrlKey && blockedKeys.has(e.key.toLowerCase()))) {
            prevent(e);
        }
    });
    // 4. 스크롤 애니메이션 (IntersectionObserver)
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { 
                entry.target.classList.add('v'); 
                obs.unobserve(entry.target); // 한 번 나타나면 관찰 해제
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -32px 0px' });
    
    document.querySelectorAll('.r').forEach(el => observer.observe(el));
})();