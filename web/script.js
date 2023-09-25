// toogle menubar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}











//get all the navbar linkss111
const navbarLinks = document.querySelectorAll('.navbar a');

//now a eventListner to each link
navbarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // prevent the default behavr of link if.. pagereload
        event.preventDefault();

        //remove active aclass from all links
        navbarLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        //adding active to each clicked section
        this.classList.add('active');
        



// .....................active sections...




        //scroll to target section optional

        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
    }
   
});
});


    //stickyheade
window.onscroll = () => {
let header= document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon and nav bar whrn click


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};



// color root SVGPathElement.apply.call.bind.call.bind.



const colorSwitch = document.getElementById('colorSwitch');
const root = document.documentElement;
let currentColorSchemeIndex = 0;

const colorSchemes =[ 'color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7' ];

colorSwitch.addEventListener( 'change', function() {
    currentColorSchemeIndex = (currentColorSchemeIndex + 1) % colorSchemes.length;
    const currentColorScheme = colorSchemes[currentColorSchemeIndex];
    root.classList.remove(...colorSchemes);



    
    root.classList.add(currentColorScheme);
});



