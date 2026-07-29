function show(section, target){
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.navbutton').forEach(b => b.classList.remove('selected'));
    // restore CSS-controlled display (don't force 'block' which breaks flex layouts)
    document.querySelector(`.${section}`).style.display = '';
    if (target) target.classList.add('selected');
}
show('start', document.querySelector('.navbutton.selected'));