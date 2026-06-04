function show(section, target){
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.navbutton').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.${section}`).style.display = 'block';
    if (target) target.classList.add('selected');
}
show('start', document.querySelector('.navbutton.selected'));