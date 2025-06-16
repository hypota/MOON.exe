const terminal = document.getElementById('terminal');

const messages = [
  "[SYSTEM] Booting in restricted mode...",
  "[ERROR] Kernel breach detected.",
  "[MOON.exe] Initializing core corruption...",
  "[MOON.exe] Infecting processes...",
  "[DATA] ████████ ███ ERROR ███ ██ ███",
  "[MOON.exe] Executing recursive overwrite...",
  "[SYSTEM] //:override::granted",
  "[MOON.exe] You can't stop it.",
  "[WARNING] He sees you.",
  "[MOON.exe] █ MIMIC UPLINK ESTABLISHED █"
];

let index = 0;

function showNextMessage() {
  if (index < messages.length) {
    const line = document.createElement('div');
    line.textContent = messages[index];
    
    if (messages[index].includes("ERROR") || messages[index].includes("WARNING")) {
      line.classList.add('glitch');
    }

    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    index++;

    setTimeout(showNextMessage, 1000 + Math.random() * 1000);
  } else {
    // Loop or add final payload
    const endMsg = document.createElement('div');
    endMsg.innerHTML = "<span class='glitch'>[FATAL] System Override Complete.</span>";
    terminal.appendChild(endMsg);
  }
}

setTimeout(showNextMessage, 2000);
