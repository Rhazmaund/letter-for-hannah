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

        openLetter.classList.add("match-cut");

        setTimeout(() => {

            envelopePage.style.opacity = "0";

            setTimeout(() => {

                envelopePage.style.display = "none";

                mainPage.style.display = "block";
                mainPage.classList.add("popup-enter");

            },300);

        },500);

    });

}

// YES BUTTON
yesBtn.addEventListener("click", () => {

    mainPage.classList.add("window-exit");

    setTimeout(() => {

        document.body.innerHTML = `
        <div class="love-window letter-enter">

            <div class="love-title">
                <span>HANNAH</span>

                <div class="pixel-hearts">
                    ❤ • ❤ • ❤
                </div>
            </div>

            <div class="love-content">

                <h2>For Hannah,</h2>

                <p>
                    Dear Hannah,

                   I just want to say sorry for everything na pinakita o pinaramdam ko sayo nung mga nakaraan. hindi ko siya sadyang gawin sayo na para kitang minamadali sa isang relasyon. Hindi sa nag eexpect ako or what pero sabi ko nga na nasanay lang talaga ako maging ganon. hindi sa tipong sayo nalang umiikot yung mundo ko pero ganon lang talaga yung way ng kung how ko napapakita na show yung tipong ako. Yes, alam kong kailangan kong paghirapan at patunayan na karapat-dapat ako sa tiwala at pagmamahal mo. pero nag kulang talaga ako sa adjustment sa pinapakita ko or inaact ko as your man. Im sorry if hindi ako nag adjust kaya napagod ka dahil sakin, hindi ikaw yung mga reasona ng heavy heart ko, hindi ko gustong iparamdam sayo. Im so sorry if naffeel mo or nakokikita mo sa perspective mo na ni rrush kita sa lahat ng bagay. <br></br>


 I just wanted you to know how special you are to me. Even the little things you do are things that I truly appreciate. Thank you for being part of my life, memories and the moments we share. No matter what happens, you'll always have a special place in my heart.<br></br>


Ginawa ko tong letter para masabi sa’yo na naiintindihan ko na ngayon kung bakit ka napagod. Dahil sa space na binigay natin sa isa’t isa, narealize ko yung mga bagay na kailangan kong baguhin at i-improve sa sarili ko. Hindi ko inaasahan na maniwala ka agad sa mga sinasabi ko, pero gusto kong ipakita sa pamamagitan ng actions ko na kaya kong respetuhin ang pace na komportable ka. Hindi kita mamadaliin at gusto kong maging mas maayos na tao para sa sarili ko at para sa atin. I won’t rush you anymore. Ang gusto ko ngayon ay mabuo ulit ang tiwala at comfort mo sa akin sa tamang panahon. Naiintindihan ko na hindi lahat ng bagay kailangang madaliin, at handa akong respetuhin kung ano man ang pace na kailangan mo. I miss you, Hannah. Pero naiintindihan ko rin na kailangan nating bigyan ng oras ang mga bagay para maging maayos.  Thank you dahil naisip mong magbigay muna tayo ng space. Dahil doon, mas nakita at naintindihan ko yung mga bagay na hindi ko napapansin noon, lalo na yung mga pagkakataong napapagod ka na pala dahil sa mga ginagawa ko. sorry if nung una is ayoko pa tanggapin kasi takot talaga ako na mawala ka sakin, kaya mas naisip ko nalang na intindiihin and irespeto yung sinabi mo para din naman satin to.<br></br>

Gusto na kita makausap, makasama and maka bonding ulit after ng mga nangyare about satin. ipapa kita ko sayo na kaya ko mag adjust about sa naging reason kung bakit ka napagod sakin, i will treat you better habang may mga priorities ako na ginagawa, ipapafeel ko din sayo na di lang sayo naikot yung mundo ko para makita mo din na may mga ginagawa din ako sa mga priorties and responsibilites ko sa sarili ko. Im really sorry sa pag papakita ko sayo na parang responsibility moko dahil sa mga act ko sayo or sa way ng love na binibigay ko sayo.<br></br>


Enjoy your birthday hannah.  Gusto ko maging special yung day mo at sana maging masaya ka sa birthday mo. Simula ngayon, gusto kong hayaan na ang mga actions ko ang magsalita para sa akin. Patuloy pa rin akong mag-eeffort at ipapakita sa’yo ang sincerity ko, pero sa paraan na hindi ka mapo-pressure at komportable ka
                </p>

            </div>

        </div>
        `;

    },700);

});

// NO BUTTON
function moveNoButton(){

    noClicked = true;
    warning.textContent = "";

    if(firstMove){
        noBtn.style.position = "fixed";
        firstMove = false;
    }

    const rect = noBtn.getBoundingClientRect();

    const buttonWidth = rect.width;
    const buttonHeight = rect.height;

    const padding = 15;

    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    const minX = padding;
    const minY = padding;

    const x = Math.floor(
        Math.random() * (maxX - minX)
    ) + minX;

    const y = Math.floor(
        Math.random() * (maxY - minY)
    ) + minY;

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
