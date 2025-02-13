function checkCode() {
    let code = document.getElementById("secretCode").value;
    if (code === "1023") {
        window.location.href = "proposal.html";
    } else {
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = "Who are you, tum hoo kon? Mujhe mera babuu chahiye 😭😭😭";
        errorMessage.style.animation = "shake 0.5s ease-in-out";
    }
}

/* Shake Animation */
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}

function spinWheel() {
    let wheel = document.getElementById("wheel");
    let months = Object.keys(memories);
    let randomIndex = Math.floor(Math.random() * months.length);
    let randomMonth = months[randomIndex];

    let degrees = 3600 + (randomIndex * 30); // More spins for fun effect
    wheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        document.getElementById("memory").innerHTML = `
            <div class="letter">
                <button class="heart" onclick="openLetter('${memories[randomMonth]}')">💖 Open</button>
            </div>
        `;
    }, 4000);
}