let view = document.getElementById('view-btn');
let noView = document.getElementById('close-btn');
let image = document.getElementById('photo');

const show = () => {
    image.style.display = 'block';
    view.innerHTML = 'Your Garbage!';
};

const dontShow = () => {
    image.style.display = 'none';
    view.innerHTML = 'Show Picture';
};

view.addEventListener('click', show);
noView.addEventListener('click', dontShow);
