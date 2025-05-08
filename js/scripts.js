// ATIVA/DESATIVA OS BOTÕES REF E POPUP //

function hideshowbtn() {

    // STORE THE CURRENT AND LAST URL WHEN THE PAGE LOADS //

    var url = window.location.href; //console.log (url);
    //CLMPlayer.alert("URL: " + url);
    var lastPart = url.split("/").pop(); //console.log (lastPart);
    lastPart = lastPart.replace(".mustache.html", "");
    localStorage.setItem('previousUrl', localStorage.getItem('currentUrl') || lastPart);
    localStorage.setItem('currentUrl', lastPart);

    var imgGoBack = document.querySelector('.goback img');
    var aTag = document.createElement('a');
    //aTag.setAttribute('href', localStorage.getItem('previousUrl'));
    aTag.setAttribute('href', 'javascript:CLMPlayer.gotoSlide(null, "' + localStorage.getItem('previousUrl') + '",null)');
    //document.querySelector('.goback').appendChild(aTag);

    // Add the previous URL to an <a> around the menu btn image//

    aTag.appendChild(imgGoBack.cloneNode(true));
    imgGoBack.parentNode.replaceChild(aTag, imgGoBack);


    var currentPageTitle = document.title;
    //CLMPlayer.alert("PageTitle: " + currentPageTitle);
    // Extract the last 2 characters from the page title
    var slideNumber = currentPageTitle.slice(-2);
    // Define REF an POP the image filename based on the page title
    var imageFilenameRefimg = `assets/${slideNumber}_slide-r.png`;
    var imageFilenamePopimg = `assets/${slideNumber}_slide-i.png`;

    // Check if the image file exists
    /*const imageExistsRefimg = false;
    const imageExistsPopimg = false;*/
    var imageExistsRefimg = checkImageExistsRef(imageFilenameRefimg);
    var imageExistsPopimg = checkImageExistsPop(imageFilenamePopimg);


    function checkImageExistsRef(filename) {
        var imgRef = new Image();
        imgRef.onload = function() {
            // The image loaded successfully, so it exists
            console.log('Image REF exist: ');
            var buttonRef = document.querySelector(".modalref");
            buttonRef.style.opacity = 1;

            var modalRefImg = document.querySelector("#refimg");
            var openModalRefBtn = document.querySelector(".modalref");

            openModalRefBtn.addEventListener("click", () => {
                modalRefImg.showModal();
            });
            modalRefImg.addEventListener("click", () => {
                modalRefImg.close();
            });
        };
        imgRef.onerror = function() {
            // The image did not load successfully, so it does not exist
            console.log('Image REF does not exist: ');
            var buttonRef = document.querySelector(".modalref");
            buttonRef.style.opacity = 0.3;

        };
        imgRef.src = imageFilenameRefimg; // This triggers the load/error event
    }

    function checkImageExistsPop(filename) {
        var imgPop = new Image();
        imgPop.onload = function() {
            // The image loaded successfully, so it exists
            console.log('Image POP exists: ');
            var buttonPop = document.querySelector(".popref");
            buttonPop.style.opacity = 1;


            var modalPopImg = document.querySelector("#popimg");
            var openModalPopBtn = document.querySelector(".popref");

            openModalPopBtn.addEventListener("click", () => {
                modalPopImg.showModal();
            });
            modalPopImg.addEventListener("click", () => {
                modalPopImg.close();
            });
        };
        imgPop.onerror = function() {
            // The image did not load successfully, so it does not exist
            console.log('Image POP does not exist: ');
            var buttonPop = document.querySelector(".popref");
            buttonPop.style.opacity = 0.3;

        };
        imgPop.src = imageFilenamePopimg; // This triggers the load/error event
    }

    // NO PRE-LOAD OF VIDEO //

    if (document.querySelector('video')) {
        var videoId = document.querySelector("video");
        videoId.pause();
        videoId.currentTime = 0;
        videoId.load();
    }



    // ACTIVATE SHADOWBOX OF PRESENT SLIDE THUMB //

    var thumbShadow = document.querySelector('#thumb' + slideNumber);
    thumbShadow.style.boxShadow = "3px 6px 6px 0px #a08585";




}

hideshowbtn(); 

CLMPlayer.registerEventListener("viewappearing", hideshowbtn);
