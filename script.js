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

// YES button
yesBtn.addEventListener("click", () => {

    if(!noClicked){
        warning.textContent = "❗ Click NO first!";
        return;
    }

    // Letter page
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:#ffd6e7;
            text-align:center;
            padding:20px;
            font-family:monospace;
        ">
            <h1>💌 For Hannah 💌</h1>

            <p>
                Dear Hannah,<br><br>

                Thank you for taking the time to read this.
                I just wanted to tell you that you are
                someone very special to me. ❤️
                <br><br>

                (Dito mo ilalagay yung buong letter mo)
            </p>
        </div>
    `;
});

// NO button
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

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});
