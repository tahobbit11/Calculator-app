const buttons = document.querySelectorAll(".button");
const commandButtons = document.querySelectorAll(".button-command");
const body = document.querySelector("body");
const themeButtonBackground = document.querySelector(".theme-buttons1")
const appTheme = document.querySelector(".app-theme1")
const totalWrapper = document.querySelector(".toggle-wrapper1") 
// Header--------------------------------------------------------------------
const toggleTheme = document.querySelectorAll(".toggle");

buttons.forEach((button) => {
    commandButtons.forEach(commandBtn => {
        toggleTheme.forEach((theme, i) => {
            theme.addEventListener("click", () => {
                if(i == 0){
                    toggleTheme[0].checked = true
                    toggleTheme[1].checked = false
                    toggleTheme[2].checked = false
                    button.classList.remove("button-theme2", "button-theme3")
                    button.classList.add("button-theme1")

                    commandBtn.classList.remove("button-command-theme2", "button-command-theme3")
                    commandBtn.classList.add("button-command-theme1")

                    body.classList.remove("theme-background2", "theme-background3")
                    body.classList.add("theme-background1")

                    themeButtonBackground.classList.remove("theme-buttons2", "theme-buttons3")
                    themeButtonBackground.classList.add("theme-buttons1")

                    appTheme.classList.remove("app-theme2", "app-theme3")
                    appTheme.classList.add("app-theme1")

                    totalWrapper.classList.remove("toggle-wrapper2", "toggle-wrapper3")
                    totalWrapper.classList.add("toggle-wrapper1")
                } else if(i == 1){
                    toggleTheme[0].checked = false
                    toggleTheme[1].checked = true
                    toggleTheme[2].checked = false
                    button.classList.remove("button-theme3", "button-theme1")
                    button.classList.add("button-theme2")

                    commandBtn.classList.remove("button-command-theme1", "button-command-theme3")
                    commandBtn.classList.add("button-command-theme2")

                    body.classList.remove("theme-background1", "theme-background3")
                    body.classList.add("theme-background2")

                    themeButtonBackground.classList.remove("theme-buttons3", "theme-buttons1")
                    themeButtonBackground.classList.add("theme-buttons2")

                    appTheme.classList.remove("app-theme1", "app-theme3")
                    appTheme.classList.add("app-theme2")

                    totalWrapper.classList.remove("toggle-wrapper1", "toggle-wrapper3")
                    totalWrapper.classList.add("toggle-wrapper2")
                } else {
                    toggleTheme[0].checked = false
                    toggleTheme[1].checked = false
                    toggleTheme[2].checked = true
                    button.classList.remove("button-theme2", "button-theme1")
                    button.classList.add("button-theme3")

                    commandBtn.classList.remove("button-command-theme2", "button-command-theme1")
                    commandBtn.classList.add("button-command-theme3")

                    body.classList.remove("theme-background2", "theme-background1")
                    body.classList.add("theme-background3")

                    themeButtonBackground.classList.remove("theme-buttons2", "theme-buttons1")
                    themeButtonBackground.classList.add("theme-buttons3")

                    appTheme.classList.remove("app-theme2", "app-theme1")
                    appTheme.classList.add("app-theme3")

                    totalWrapper.classList.remove("toggle-wrapper2", "toggle-wrapper1")
                    totalWrapper.classList.add("toggle-wrapper3")
                }
            })
        })    
    })
});

// Main body---------------------------------------------------------------------
// buttons
/*const buttons = document.querySelectorAll(".button");


function operators() {
    switch(operator){
        case "x":

            break;
        case "/":

            break;
        case "-":

            break;
        case "+":

            break;    
    }
}

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        console.log(i)
        console.log(button.value);
        let n1 = "";
        let n2 = "";
    })
}) */