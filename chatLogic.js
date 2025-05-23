function sendMessage() {
  const chatBody = document.getElementById("chatBody");
  const input = document.getElementById("chatInput");

  if (input.value.trim() !== "") {
    const message = document.createElement("div");
    message.style.fontSize = '20px';
    message.classList.add("p-2", "bg-orange-200", "rounded", "mb-2", "w-[45%]", "ml-[55%]");
    message.textContent = input.value;
    chatBody.appendChild(message);

    chatBody.scrollTop = chatBody.scrollHeight;
    input.value = "";
    res();
  }
}

async function res() {
  const response = await fetch('https://catfact.ninja/fact?max_length=140');
  const data = await response.json();
  receiveMsg(data.fact);
}

function receiveMsg(a) {
  const message = document.createElement("div");
  message.style.fontSize = '20px';
  message.id="rm"
  message.classList.add("p-2", "bg-orange-100", "rounded", "mb-2", "w-[45%]");
  message.textContent = a;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}
