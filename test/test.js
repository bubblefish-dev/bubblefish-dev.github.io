const body = document.getElementsByTagName('body')[0];
const toggles = [...document.getElementsByClassName('button-toggle')];
toggles.forEach(toggle => {
    toggle.addEventListener('click', _ => {
        if (!body.classList.contains('toggled')) body.classList.add('toggled');
        else body.classList.remove('toggled');
    });
});