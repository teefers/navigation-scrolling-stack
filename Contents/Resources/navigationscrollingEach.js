// -- Start Navigationscrolling Each js Template -- //
// check for document ready
function ready() {
    console.log('page is ready');
    // Define called Functions

    // smooth to anchor on page
    function smoothSamePage (scrollPoint){
        console.log('smoothscroll: ' + scrollPoint);
        ScrollToHere = document.querySelector(scrollPoint);
        ScrollToHere.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
        
    }
    // smoothScroll is used by arrows
    function smoothScroll(amt) {
        slider.scrollBy({
            top: 0, // could be negative value
            left: amt,
            behavior: 'smooth'
        });
    }
    // checkScroll show and hide arrows
    function checkScroll() {
        if (slider.scrollLeft == 0) {
            leftArrow.classList.add('invisible');
        } else {
            leftArrow.classList.remove('invisible');
        }
        if ((slider.clientWidth >= slider.scrollWidth) || ((slider.scrollLeft + slider.clientWidth) >= slider.scrollWidth)) {
            rightArrow.classList.add('invisible');
        } else {
            rightArrow.classList.remove('invisible');
        }
    }
     // Set selectors
    const slider = document.querySelector('#ul-%id%');
    const leftArrow = document.querySelector('#lbtn-%id%');
    const rightArrow = document.querySelector('#rbtn-%id%');
    const samePage = document.querySelectorAll('.navSamePage');
    const anchorPages = document.querySelectorAll('#ul-%id% .navDefPage a');

    
    checkScroll();
    
    // add event listners
    slider.addEventListener('scroll', () => {
        checkScroll();
    });
    window.addEventListener('resize', () => {
        checkScroll();
    });
    leftArrow.addEventListener('click', () => {
        let scrollAmt = parseInt(-slider.clientWidth / 1.3);
        smoothScroll(scrollAmt);
    });
    rightArrow.addEventListener('click', () => {
        let scrollAmt = parseInt(slider.clientWidth / 1.3);
        smoothScroll(scrollAmt);
    });
    if (samePage.length != 0) {
        for (let i = 0; i < samePage.length; i++) {
            const element = samePage[i];
            element.addEventListener('click', (e) => {
                // console.log(e); 
                let myTarget = e.target.dataset.samepagetarget;
                if (myTarget !== '#') {
                    smoothSamePage(myTarget);
                    // console.log(myTarget);
                }
            });
        }
    }
    if (anchorPages.len !=0) {
        for (let i = 0; i < anchorPages.length; i++) {
            const element = anchorPages[i];
            let theHref = element.attributes.href.value;
            if (theHref === './') {
                element.parentNode.classList.add('active');
            }
        }
    }

}

// this is required for the (not so) edge case where your script is loaded after the document has loaded
// https://developer.mozilla.org/en/docs/Web/API/Document/readyState
if (document.readyState !== 'loading') {
    ready();
} else {
    // the document hasn't finished loading/parsing yet so let's add an event handler
    document.addEventListener('DOMContentLoaded', ready)
}


// -- End Navigationscrolling Each js Template -- //