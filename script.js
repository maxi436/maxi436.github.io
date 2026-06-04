function show(section){
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.navbutton').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.${section}`).style.display = 'block';
    event.target.classList.add('selected');
}
show('start');