// MENU NAMES //

const menu_names = ["Ciclo","Completa"];
const IEC_html = "13_slide.html";
const IEC_pdf = "iec_folicil_mgf.pdf";




// CREATE BUTTONS OF SIDE MENU //

const new_side_menu = `
<ul class="side_menu">
                <li class="menu_li homebtn" style="">
                    <a href="javascript:CLMPlayer.gotoSlide(null, '01_slide.html',null);">
                    <img style="width: 45px;" src="assets/side-menu/green_icons/home.png" alt="">
                    </a>
                </li>
                <li class="menu_li menu_li_flow menulistbtn" style="">
                    <img class="flowImgBtn" style="width: 45px;" src="assets/side-menu/green_icons/sitemap.png" alt="">
                    <div id="flows_list" class="hide_this">
                        <ul class="menuflows">
                            <li id="flow_01" class="flow" style="">
                                <span>${menu_names[0]}</span>
                                <img src="assets/side-menu/green_icons/sitemap.png" alt="">
                            </li>
                        <!-- <hr style="margin: 5px 10%;">
                            <li id="flow_02" class="flow">
                                <span>${menu_names[1]}</span>
                                <img src="assets/side-menu/green_icons/sitemap.png" alt="">
                            </li> -->
                        <!-- <hr style="margin: 5px 10%;">
                            <li id="flow_03" class="flow">
                                <span>${menu_names[2]}</span>
                                <img src="assets/side-menu/green_icons/sitemap.png" alt="">
                            </li>
                            <hr style="margin: 5px 10%;">
                            <li id="flow_04" class="flow">
                                <span>${menu_names[3]}</span>
                                <img src="assets/side-menu/green_icons/sitemap.png" alt="">
                            </li>
                            <hr style="margin: 5px 10%;"> 
                            <li id="flow_05" class="flow">
                                <span>${menu_names[4]}</span>
                                <img src="assets/side-menu/green_icons/sitemap.png" alt="">
                            </li>
                            <hr style="margin: 5px 10%;">-->
                        </ul>
                    </div>
                </li>
                <li class="menu_li modalref" style="opacity: 0.2;">
                    <img src="assets/side-menu/green_icons/referencias.png" alt="">
                </li>
                <li class="menu_li popref" style="opacity: 0.2;">
                    <img src="assets/side-menu/green_icons/popup.png" alt="">
                </li>
            <!-- <li class="menu_li iecSlide" style="opacity: 1;">
                    <a href="javascript:CLMPlayer.gotoSlide(null, '${IEC_html}',null);">
                        <img src="assets/side-menu/green_icons/iec.png" alt="">
                    </a>
                </li> -->
                <li class="menu_li iecFile" style="opacity: 1;">
                    <a href="assets/pdfs/${IEC_pdf}">
                        <img src="assets/side-menu/green_icons/iec.png" alt="">
                    </a>
                </li>
                <li class="menu_li goback" style="display: block;">
                    <img src="assets/side-menu/green_icons/back.png" alt="">
                </li>
            </ul>
`;

const sideMenu = document.getElementById('sidemenu');
sideMenu.insertAdjacentHTML('afterbegin', new_side_menu);



// OPEN/CLOSE FLOW THUMBS IMAGE //

let flow01_li = document.querySelector('#flow_01');
let flow02_li = document.querySelector('#flow_02');
let flow03_li = document.querySelector('#flow_03');
let flow04_li = document.querySelector('#flow_04');
let flow05_li = document.querySelector('#flow_05');

let menu_01 = document.querySelector('#menu_01');
let menu_02 = document.querySelector('#menu_02');
let menu_03 = document.querySelector('#menu_03');
let menu_04 = document.querySelector('#menu_04');
let menu_05 = document.querySelector('#menu_05');

let closeBtns = document.querySelectorAll('.closeFlow');

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', function(event) {
        menu_01.style.display = "none";
        menu_02.style.display = "none";
        menu_03.style.display = "none";
        menu_04.style.display = "none";
        menu_05.style.display = "none";
    });
});

if (flow01_li) {
    console.log("flow01 existe");
    flow01_li.addEventListener('click', function(event) {
        menu_01.style.display = "block";
        menu_02.style.display = "none";
        menu_03.style.display = "none";
        menu_04.style.display = "none";
        menu_05.style.display = "none";
    });
}

if (flow02_li) {
    console.log("flow02 existe");
    flow02_li.addEventListener('click', function(event) {
        menu_01.style.display = "none";
        menu_02.style.display = "block";
        menu_03.style.display = "none";
        menu_04.style.display = "none";
        menu_05.style.display = "none";
    });
}


if (flow03_li) {
    console.log("flow03 existe");
    flow03_li.addEventListener('click', function(event) {
        menu_01.style.display = "none";
        menu_02.style.display = "none";
        menu_03.style.display = "block";
        menu_04.style.display = "none";
        menu_05.style.display = "none";
    });
}


if (flow04_li) {
    console.log("flow04 existe");
    flow04_li.addEventListener('click', function(event) {
        menu_01.style.display = "none";
        menu_02.style.display = "none";
        menu_03.style.display = "none";
        menu_04.style.display = "block";
        menu_05.style.display = "none";
    });
}

if (flow05_li) {
    console.log("flow05 existe");
    flow04_li.addEventListener('click', function(event) {
        menu_01.style.display = "none";
        menu_02.style.display = "none";
        menu_03.style.display = "none";
        menu_04.style.display = "none";
        menu_05.style.display = "block";
    });
}


// Get the 'li' element with class 'menu_li_flow'
let liElement = document.querySelector('.menu_li_flow');
let flowImgBtn = document.querySelector('.flowImgBtn');

// Get the 'li' element with ID '#flows_list'
let flowLists = document.querySelector('#flows_list');

// Get all the 'li' elements with class 'menu_li'
let liElements = document.querySelectorAll('.menu_li');

// Initialize the image state (true for image1, false for image2)
var isImage1 = true;

// Add click event listener to the 'li' element with class 'menu_li_flow'
liElement.addEventListener('click', function(event) {

    // Define the image sources
    const image1Src = "assets/side-menu/green_icons/sitemap.png";
    const image2Src = "assets/side-menu/green_icons/sitemap-ativo.png";

    // Function to toggle the image source
    function toggleImageSource() {
        if (isImage1) {
            flowImgBtn.src = image2Src;
        } else {
            flowImgBtn.src = image1Src;
        }
        isImage1 = !isImage1; // Toggle the state
        //console.log(isImage1);
    };
    toggleImageSource();

    flowLists.classList.toggle('hide_this');

});

/* // Assuming you have the title element from the DOM
const titleElement = document.querySelector('title');
const titleText = titleElement.textContent; // Get the text content of the title element

// Extract the number from the title using regular expression
const match = titleText.match(/\d+/); // Matches any sequence of digits

if (match) {
    const number = parseInt(match[0], 10); // Convert the matched string to an integer
    if (number > 5) {
        teste = document.querySelector('.iecSlide a');
        teste.href = "javascript:CLMPlayer.gotoSlide(null, 'IEC_2_slide.html',null);";
        console.log(teste);
    } else {
        console.log(`The number ${number} inside the title is not greater than 20.`);
    }
} else {
    console.log("No number found in the title.");
}  */

/*// ADD ANIMATION TO THE MENU WITH A CLICK //

var isTranslated = false;
document.querySelector('header').addEventListener('click', function() {

        document.querySelector('#flows_list').classList.add('hide_this'); 


    if (isTranslated) {
        document.querySelector('.side_menu').style.transform = 'translateX(-50px)';
    } else {
        document.querySelector('.side_menu').style.transform = 'translateX(0px)';
    }
    isTranslated = !isTranslated;
});

document.querySelector('.side_menu').addEventListener('click', function(event) {
    event.stopPropagation();
});*/

