

    
    document
      .querySelector('input[type="file"]')
      .addEventListener("change", function () {
        // Reset the file input to clear any selected file
        this.value = "";
      });
   
  
    var activeParentButton = null;
   
    function toggleButtons(parentButton, childButton) {
        if (parentButton.id === "quiz") {
            // displayQuizQuestions();
            document.getElementById('quizcontent').hidden=false;
             } else {
            //    hideQuizContent();
               document.getElementById('quizcontent').hidden=true;
              }
        if (activeParentButton !== parentButton) {
            if (activeParentButton) {
                activeParentButton.style.backgroundColor = "#ffffff";
                activeParentButton.style.color = "#004080";
                var siblingButton = activeParentButton.nextElementSibling;
                while (siblingButton) {
                    siblingButton.style.display = "none";
                    siblingButton = siblingButton.nextElementSibling;
                }
            }

            parentButton.style.backgroundColor = "#004080";
            parentButton.style.color = "#ffffff";
            var siblingButton = parentButton.nextElementSibling;
            while (siblingButton) {
                siblingButton.style='display:block; color: white;background-color: #004080;';
                siblingButton = siblingButton.nextElementSibling;
            }

            activeParentButton = parentButton;
        } else {
            // Clicking the same parent button again should hide its child buttons
            parentButton.style.backgroundColor = "#ffffff";
            parentButton.style.color = "#004080";
            var siblingButton = parentButton.nextElementSibling;
            while (siblingButton) {
                siblingButton.style.display = "none";                    siblingButton = siblingButton.nextElementSibling;
            }

            activeParentButton = null;
        }
    }
 
   
       
    
      
        // Get all elements with the "hovern" class
const listItems = document.querySelectorAll(".hovern");

// Add click event listeners to toggle the "active" class
listItems.forEach(item => {
    item.addEventListener("click", () => {
        // Remove the "active" class from all items
        listItems.forEach(li => {
            li.classList.remove("active");
        });

        // Add the "active" class to the clicked item
        item.classList.add("active");
    });
});
    
function showDropdown(button) {
            // Remove the 'clicked' class from all buttons
            const buttons = document.querySelectorAll('button');
            buttons.forEach(btn => {
                btn.classList.remove('clicked');
            });
    
            // Add the 'clicked' class to the clicked button
            button.classList.add('clicked');
        }
     
     
