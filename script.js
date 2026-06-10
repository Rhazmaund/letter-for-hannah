const envelopePage = document.getElementById("envelopePage");
const mainPage = document.getElementById("mainPage");
const openLetter = document.getElementById("openLetter");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const warning = document.getElementById("warning");

let noClicked = false;
let firstMove = true;

// OPEN ENVELOPE
if(openLetter){
    openLetter.addEventListener("click", () => {

        envelopePage.style.display = "none";
        mainPage.style.display = "block";

    });
}

// YES BUTTON
yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `
    <div class="love-window">

        <div class="love-title">
            <span>HANNAH</span>

            <div class="pixel-hearts">
                ❤ • ❤ • ❤
            </div>
        </div>

        <div class="love-content">

            <h2>My Love,</h2>

            <p>
                Dear Hannah,

                Thank you for taking the time to read this letter.
                I just wanted you to know how special you are to me.

                Every day you make my life brighter, happier,
                and more meaningful.

                Your smile, your kindness, your presence,
                and even the little things you do are things
                that I truly appreciate.

                Thank you for being part of my life.
                Thank you for all the memories,
                the laughs, and the moments we share.

                No matter what happens,
                you'll always have a special place in my heart.

                ❤️
            </p>

        </div>

    </div>
    `;
});

// NO BUTTON
function moveNoButton(){

    noClicked = true;

    warning.textContent = "";

    if(firstMove){
        noBtn.style.position = "fixed";
        firstMove = false;
    }

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// CLICK LANG ANG PAG-IWAS
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

// MOBILE SUPPORT
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});
