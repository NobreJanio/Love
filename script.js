const naoContainer = document.getElementById("nao-container");

      document.addEventListener("mousemove", function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const naoContainerX = naoContainer.getBoundingClientRect().left;
        const naoContainerY = naoContainer.getBoundingClientRect().top;

        if (
          mouseX >= naoContainerX &&
          mouseX <= naoContainerX + naoContainer.clientWidth &&
          mouseY >= naoContainerY &&
          mouseY <= naoContainerY + naoContainer.clientHeight
        ) {
          naoContainer.style.transform = "translateX(-50px)";
        } else {
          naoContainer.style.transform = "none";
        }
      });

      function mostrarCoracoes() {
        const heartsContainer = document.createElement("div");
        heartsContainer.classList.add("heart-container");

        for (let i = 0; i < 10; i++) {
          const heart = document.createElement("div");
          heart.classList.add("heart");
          heart.innerHTML = "&hearts;";
          heartsContainer.appendChild(heart);
        }

        document.body.appendChild(heartsContainer);

        setTimeout(function () {
          heartsContainer.remove();
        }, 5000);
      }