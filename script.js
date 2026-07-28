function show(section, target){
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.navbutton').forEach(b => b.classList.remove('selected'));
    // restore CSS-controlled display (don't force 'block' which breaks flex layouts)
    document.querySelector(`.${section}`).style.display = '';
    if (target) target.classList.add('selected');
}
show('start', document.querySelector('.navbutton.selected'));

(function(){
    const nav = document.querySelector('nav');
    if (!nav) return;
    const buttons = Array.from(nav.querySelectorAll('.navbutton'));
    if (!buttons.length) return;

    let indicator = nav.querySelector('.nav-indicator');
    if (!indicator){
        indicator = document.createElement('span');
        indicator.className = 'nav-indicator';
        nav.appendChild(indicator);
    }

    function moveTo(target, instant){
        const left = target.offsetLeft;
        const width = target.offsetWidth;
        if (instant){
            indicator.style.transition = 'none';
        } else {
            indicator.style.transition = '';
        }
        requestAnimationFrame(()=>{
            indicator.style.width = width + 'px';
            indicator.style.left = left + 'px';
            if (instant){
                // restore transition after layout
                requestAnimationFrame(()=> indicator.style.transition = 'left .28s cubic-bezier(.2,.8,.2,1), width .28s cubic-bezier(.2,.8,.2,1)');
            }
        });
    }

    const selected = nav.querySelector('.navbutton.selected') || buttons[0];
    moveTo(selected, true);

    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => moveTo(btn, false));
        btn.addEventListener('click', () => setTimeout(() => moveTo(btn, false), 0));
    });

    nav.addEventListener('mouseleave', () => {
        const sel = nav.querySelector('.navbutton.selected') || buttons[0];
        moveTo(sel, false);
    });

    window.addEventListener('resize', () => {
        const sel = nav.querySelector('.navbutton.selected') || buttons[0];
        moveTo(sel, true);
    });
})();