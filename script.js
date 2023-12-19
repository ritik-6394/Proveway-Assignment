const box1El = document.getElementById('box-1');
const box2El = document.getElementById('box-2');
const box3El = document.getElementById('box-3');

const boxBodyEl1 = document.querySelector('#box1-body')
const boxBodyEl2 = document.querySelector('#box2-body')
const boxBodyEl3 = document.querySelector('#box3-body')



boxBodyEl1.style.display = "none";
boxBodyEl2.style.display = "block";
boxBodyEl3.style.display = "none";

function ClickOnBox1() {
    box1El.classList.add('active');
    box2El.classList.remove('active');
    box3El.classList.remove('active');

    boxBodyEl1.style.display = "block";
    boxBodyEl2.style.display = "none";
    boxBodyEl3.style.display = "none";
}


function ClickOnBox2() {
    box1El.classList.remove('active');
    box2El.classList.add('active');
    box3El.classList.remove('active');

    boxBodyEl1.style.display = "none";
    boxBodyEl2.style.display = "block";
    boxBodyEl3.style.display = "none";
}


function ClickOnBox3() {
    box1El.classList.remove('active');
    box2El.classList.remove('active');
    box3El.classList.add('active');

    boxBodyEl1.style.display = "none";
    boxBodyEl2.style.display = "none";
    boxBodyEl3.style.display = "block";
}