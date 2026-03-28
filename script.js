function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
async function sendMessage() {
    const input = document.getElementById("userInput");
    const messageText = input.value.trim();
    if (!messageText) return;

    const chat = document.getElementById("chat");

    // Show user message
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = messageText;
    chat.appendChild(userMessage);

    input.value = "";

    try {
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: messageText })
        });

        const data = await response.json();

        // Show AI reply
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.innerText = data.reply;
        chat.appendChild(botMessage);

        chat.scrollTop = chat.scrollHeight;

    } catch (error) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "message bot";
        errorMessage.innerText = "⚠️ Server not connected.";
        chat.appendChild(errorMessage);
    }
}
function toggleSidebar(){
  document.querySelector(".sidebar").classList.toggle("hide");
  document.querySelector(".main").classList.toggle("full");
}

function toggleChat(){
  let chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage(){
  let input = document.getElementById("chatInput").value;
  let body = document.getElementById("chatBody");

  body.innerHTML += "<p><b>You:</b> "+input+"</p>";
  body.innerHTML += "<p><b>AI:</b> Coming soon...</p>";
}
function toggleDetail(btn){

  let currentCard = btn.parentElement;
  let isOpen = currentCard.classList.contains("active");

  // close all cards
  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("active");
  });

  // open only if it was closed before
  if(!isOpen){
    currentCard.classList.add("active");
  }
}
function submitBooking(e){
  e.preventDefault();

  document.getElementById("successMsg").innerHTML =
  "✅ Booking successful! We will contact you soon.";

  e.target.reset();
}
