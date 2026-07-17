window.addEventListener("load", () => {
    const welcomeBox = document.querySelector(".welcome-box");
    const commandElement = document.querySelector("#command");
    const typing = document.querySelector("#typing");
    const command = "./benvinguda.sh ";
    const lines = [
        "\n > Hola a tothom! Benvinguts al meu jardí digital.",
        "> Un petit espai personal, als marges de la internet corporativa, per reflexionar i intercanviar idees sense cap afany productivista ni completista: per gaudi i prou.",
        "> Sentiu-vos lliures de xafardejar tot el que vulgueu :) "
    ];
    let commandIndex = 0;
    let lineIndex = 0;

    function typeCommand() {
        commandElement.classList.add("typing");
        if (commandIndex >= command.length) {
            commandElement.classList.remove("typing");
            setTimeout(typeLines, 1500);
            return;
        }
        commandElement.textContent = command.slice(0, commandIndex);
        commandIndex++;
        setTimeout(typeCommand, 40);
    }

    function typeLines() {
        if (lineIndex >= lines.length) {
            return;
        }
        typing.textContent += lines[lineIndex] + "\n";
        lineIndex++;
        setTimeout(typeLines, 150);
    }
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setTimeout(typeCommand, 700);
            observer.disconnect(); // només una vegada
        }
    }, {threshold: 1});
    observer.observe(welcomeBox);
});