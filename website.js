const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const clearButton = document.getElementById("clear-button");
const allScreen = document.getElementById("all-screen");
const picture = document.getElementById("question-gif");
const title = document.getElementById("question");
const buttonWidth = 100;
const buttonHeight = 50;
const gifs = ["no.gif", "no2.gif", "happy.gif"];

let yesClicked = false;
let firstNo = true;

noButton.style.top = clearButton.getBoundingClientRect().top + 'px';
noButton.style.left = clearButton.getBoundingClientRect().left + 'px';

let height = window.innerHeight;
let width = window.innerWidth;

noButton.addEventListener('mouseover', function () {
    noButton.style.width = `100px`;
    noButton.style.height = `50px`;
    noButton.style.fontSize = `40px`;

    let xPos = noButton.getBoundingClientRect().left;
    let yPos = noButton.getBoundingClientRect().top;
    console.log(`xPos: ${xPos} yPos: ${yPos}`);

    let widthOffset = getRandom(0, width - buttonWidth);
    let heightOffset = getRandom(0, height - buttonHeight);

    noButton.style.top = heightOffset + 'px';
    noButton.style.left = widthOffset + 'px';
});

noButton.addEventListener('click', function () {
    noClicked = true;
    if (!yesClicked){
        if (firstNo) {
            title.innerHTML = "HEY! STOP THAT";
            picture.src = gifs[0];
            firstNo = false;
        } else {
            title.innerHTML = "YOU BETTER NOT!!";
            picture.src = gifs[1];
            firstNo = true;
        }
    }
});

yesButton.addEventListener('click', function () {
    yesClicked = true;
    title.innerHTML = "YAYYYY I LOVE YOU!!"
    picture.src = gifs[2];
    document.title = "SHE SAID YES!"
});

function getRandom(lower, upper) {
    console.log(`lower: ${lower}`);
    console.log(`upper: ${upper}`);
    let result = (Math.random() * upper) + lower;
    console.log(result)
    return result;
}