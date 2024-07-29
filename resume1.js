const adjustContainer = () => {
    const screenWidth = window.innerWidth;
    const div = document.querySelector('body');

    // Adjust width based on screen size
    if (screenWidth <= 600) {
        // Phone
        div.style.width = '100%';
        div.style.height = 'auto'; // Height adjusts automatically
    } else if (screenWidth > 600 && screenWidth <= 900) {
        // Tablet
        div.style.width = '80%';
        div.style.height = 'auto'; // Height adjusts automatically
    } else if (screenWidth > 900 && screenWidth <= 1200) {
        // Laptop
        div.style.width = '70%';
        div.style.height = 'auto'; // Height adjusts automatically
    } else {
        // Desktop
        div.style.width = '50%';
        div.style.height = 'auto'; // Height adjusts automatically
    }
};

// Call adjustContainer on window resize
window.addEventListener('resize', adjustContainer);

// Call adjustContainer initially to set the correct size on load
adjustContainer();



    const items = document.querySelectorAll("#section-ul > li");
    items.forEach(element => {
        element.style.color = "maroon";
        element.style.backgroundColor = "#aceafa";
        element.style.fontSize = "20px";
    
}); 
    items.forEach(item => {
        item.addEventListener("click", function() {
           
            const content = this.querySelector(".content");
            content.style.display=(content.style.display === "block" )? "none" : "block"; 
           
            
        });
    });


    
    const imageSources = ['medium.webp', 'medium (1).webp', 'medium (2).webp']; // Replace with your image paths

    // Create a single img element
    const image = document.createElement('img');
    image.className="secimg";
    image.src = imageSources[0]; // Set the initial image
    image.style.width = '200px'; // Set a default size
    image.style.height = 'auto';
    image.style.position='relative'
    
    // Append the image to the .section2 container
    document.querySelector('.section2').appendChild(image);

    let currentIndex = 0; // To keep track of the current image index
    let imageChanged = false; // To track if the image has been changed in the current event

    // Add event listener for mouse movement
    image.addEventListener('mousedown', function() {
        if (!imageChanged) {
            // Move to the next image
            currentIndex = (currentIndex + 1) % imageSources.length;
            image.src =  imageSources[currentIndex];
            // Mark that the image has been changed
           imageChanged=true
        } 
        
    });

    // Reset imageChanged flag when mouse leaves the image
    image.addEventListener('mouseleave', function() {
        imageChanged = false;
    });
    

     // Create a div element
const display = document.createElement('div');

// Set the inner text of the div
display.innerText = 'Please click the image.';

// Add a class to the div
display.classList.add('message-box');

// Append the div to the .section2 element
document.querySelector('.section2').appendChild(display);
display.style.position='relative'

// script.js
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";
}
// Move tabcontent elements after the display element
const tabContents = document.querySelectorAll('.tabcontent');
tabContents.forEach(content => {
    document.querySelector('.section2').appendChild(content);
});





