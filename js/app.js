let heart = document.getElementById('toggleHeart');

function changeHeart(){
    if (!heart.classList.contains('heartchange')){
        heart.classList.add('heartchange');
    } else if (heart.classList.contains('heartchange')){
        heart.classList.remove('heartchange');
    }
}

heart.addEventListener('click', changeHeart);


const myself = {
    name: 'Bobby'
}

function changeObj(obj){
    obj.name = 'Josh';
    obj.age = 18;
};

changeObj(myself);
changeObj(myself);

console.log(myself);