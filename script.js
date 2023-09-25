let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Rest of your code...









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

const colorSchemes = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7'];

// Function to set the current color scheme
function setCurrentColorScheme() {
  const storedColorScheme = localStorage.getItem('currentColorScheme');
  if (storedColorScheme) {
    currentColorSchemeIndex = colorSchemes.indexOf(storedColorScheme);
    if (currentColorSchemeIndex === -1) {
      currentColorSchemeIndex = 0; // Default to the first color scheme if the stored one is not found
    }
  }
  applyColorScheme();
}

// Function to apply the current color scheme
function applyColorScheme() {
  const currentColorScheme = colorSchemes[currentColorSchemeIndex];
  root.classList.remove(...colorSchemes);
  root.classList.add(currentColorScheme);
  localStorage.setItem('currentColorScheme', currentColorScheme);
}

// Add a change event listener to the color switch
colorSwitch.addEventListener('change', function () {
  currentColorSchemeIndex = (currentColorSchemeIndex + 1) % colorSchemes.length;
  applyColorScheme();
});

// Call the function to set the current color scheme on page load
setCurrentColorScheme();




// readmore readlesss

const expandableText = document.getElementById("expandable-text");
const readMoreButton = document.getElementById("read-more-button");

let expanded = false;

readMoreButton.addEventListener("click", function () {
  if (!expanded) {
    expandableText.style.maxHeight = "none";
    readMoreButton.textContent = "Read Less";
  } else {
    expandableText.style.maxHeight = "100px"; // Set to the collapsed height
    readMoreButton.textContent = "Read More";
  }

  expanded = !expanded;
});


// Use JavaScript to show the message when the form is successfully submitted:




// Function to scroll the page to the top
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Use "smooth" for smooth scrolling, or "auto" for instant scrolling
    });
  }
  
  // Function to show the fake popup and clear the form fields
  function showFakePopup() {
    const fakePopup = document.getElementById("fake-popup");
  
    // Clear the form fields
    const form = document.querySelector("form");
    form.reset();
  
    fakePopup.style.display = "block";
  
    // Automatically close the popup after 3 seconds (adjust as needed)
    setTimeout(function () {
      fakePopup.style.display = "none";
      scrollToTop(); // Scroll the page to the top after closing the popup
    }, 3000);
  }
  
  // Listen for form submission and show the fake popup
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from actually submitting (for demo purposes)
  
    // Assuming the form submission is successful, you can call the showFakePopup function here
    showFakePopup();
  });
  
  // Close the fake popup when the custom close button is clicked
  document.getElementById("close-fake-popup").addEventListener("click", function () {
    const fakePopup = document.getElementById("fake-popup");
    fakePopup.style.display = "none";
    scrollToTop(); // Scroll the page to the top after closing the popup
  });
  

// show animate to section



  // Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to update the active section
  function updateActiveSection() {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      if (isElementInViewport(section)) {
        section.classList.add('show-animate');
      } else {
        section.classList.remove('show-animate');
      }
    });
  }
  
  // Add a scroll event listener to update the active section on scroll
//   window.addEventListener('scroll', updateActiveSection);
  
  // Initial call to set the active section based on the initial scroll position
  updateActiveSection();








//   to anmate logog text

//   const textToType = "OPTY"; // The text you want to type

// const typedTextElement = document.getElementById("typed-text");
// const ellipsisElement = document.querySelector(".ellipsis");

// let currentIndex = 0;

// function typeText() {
//   if (currentIndex < textToType.length) {
//     typedTextElement.textContent += textToType.charAt(currentIndex);
//     currentIndex++;
//     setTimeout(typeText, 300); // Adjust typing speed (milliseconds)
//   } else {
//     ellipsisElement.style.display = "inline-block";
//     setTimeout(resetText, 1000); // Adjust the delay before resetting (milliseconds)
//   }
// }

// function resetText() {
//   typedTextElement.textContent = "";
//   ellipsisElement.style.display = "none";
//   currentIndex = 0;
//   typeText(); // Restart the typing animation
// }

// // typeText(); // Start the typing animation initially

  
