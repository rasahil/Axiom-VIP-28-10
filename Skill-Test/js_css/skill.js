// Get all elements with the "hovern" class
const listItems = document.querySelectorAll(".hovern");

// Add click event listeners to toggle the "active" class
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove the "active" class from all items
    listItems.forEach((li) => {
      li.classList.remove("active");

    });

    // Add the "active" class to the clicked item
    item.classList.add("active");
    
  });
});

//<-----------Scrollable Slider Tabs Start----------->

const tabs = document.querySelectorAll(".scrollable-tabs-container a");

//Event Listner for Rightarrow "i"
const rightarrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);

//Event Listner for Lefttarrow "i"
const leftarrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);

const tabsList = document.querySelector(".scrollable-tabs-container ul");
const jquery = document.getElementById('jquery-skill');
const leftArrowContainer = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);
//Remove All Active Classes
const removeallactiveclasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

//Add Event By Clicking on the Button
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeallactiveclasses(); //Call remove function before Adding Active Class
    tab.classList.add("active");

    //   tab.scrollIntoview({
    //   inline: 'center'
    // }) 
  });
});

//If Else Condition For Left And Right
const manageIcons = () => {
  if (tabsList.scrollLeft >= 20) {
    // leftArrowContainer.classList.add("active");
  } else {
    // leftArrowContainer.classList.remove("active");
  }


  //Substraction of scrollwidth - clientwidth
  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
  console.log("scroll width:", tabsList.scrollWidth);
  console.log("client width:", tabsList.clientWidth);

  if (tabsList.scrollLeft >= maxScrollValue) {
    // rightArrowContainer.classList.remove("active");
  } else {
    // rightArrowContainer.classList.add("active");
  }
};
//Event Listner for RightArrow "i"
rightarrow.addEventListener("click", () => {
  tabsList.scrollLeft +=805;
  manageIcons();
});
//Event Listner for LeftArrow "i"
leftarrow.addEventListener("click", () => {
  tabsList.scrollLeft -=805;
  manageIcons();
});


tabsList.addEventListener("scroll", manageIcons);

//Dragging List
let dragging = false;

const drag = (e) => {
  if (!dragging) return;
  tabsList.classList.add("dragging");
  tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
  dragging = true;
});

tabsList.addEventListener("mousemove", drag);

tabsList.addEventListener("mouseup", () => {
  dragging = false;
  tabsList.classList.remove("dragging");
});

// const targetTab = document.getElementById("Ajax-skill");
// if (targetTab) {
//     targetTab.scrollIntoView({behavior: "smooth", inline:"center"})
// }
//<-----------Scrollable Slider Tabs End----------->



/*<!-- Chatbox Script Start -->*/

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // display "thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // if Enter key is pressed Without shift key and the window
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);

// <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>

/*<!-- Chatbox Script End-->*/

