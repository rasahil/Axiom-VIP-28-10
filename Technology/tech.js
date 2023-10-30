

    
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
     



    // code for quiz section
        function showScoreModal() {
            // Check if all questions have been answered
            var question1 = document.querySelector('input[name="aa"]:checked');
            var question2 = document.querySelector('input[name="ab"]:checked');
            var question3 = document.querySelector('input[name="c"]:checked');
            var question4 = document.querySelector('input[name="d"]:checked');
            var question5 = document.querySelector('input[name="e"]:checked');
            var question6 = document.querySelector('input[name="f"]:checked');
            var question7 = document.querySelector('input[name="g"]:checked');
            var question8 = document.querySelector('input[name="h"]:checked');
            var question9 = document.querySelector('input[name="i"]:checked');
            var question10 = document.querySelector('input[name="j"]:checked');
            
            if (question1 &&question2 &&question3 &&question4 &&question5 &&question6 &&question7 &&question8 && question9 && question10) {
                // Calculate the score and update the modal
                var score = calculateScore(); // Implement your score calculation logic
                document.getElementById('userScore').textContent = score + '/10';

                // Show the modal
                var modal = new bootstrap.Modal(document.getElementById('scoreModal'));
                modal.show();
            } else {
                // Show a validation message to select answers for all questions
                alert("Please answer all questions before submitting.");
            }
        }

        // Implement your score calculation logic here
        function calculateScore() {
            var score = 0; // Initialize the score to 0
        
            // Define the correct answers for each question
            var correctAnswers = {
                'aa':'flexradiobd',
                'ab':'2',
                'c':'a3',
                'd':'z4',
                'e':'b3',
                'f':'c3',
                'g':'d3',
                'h': 'e3', // Correct answer for the first question
                'i': 'f4', // Correct answer for the second question
                'j': 'g3'  // Correct answer for the third question
            };
        
            // Loop through the questions and compare user answers with correct answers
            for (var question in correctAnswers) {
                var userAnswer = document.querySelector('input[name="' + question + '"]:checked').id;
                if (userAnswer === correctAnswers[question]) {
                    score++;
                }
            }
        
            return score; // Return the calculated score
        }
        