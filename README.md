# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./images/Screenshot%202023-07-12%20202530.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/calculatorapp-0zZJkVB0JQ](https://www.frontendmentor.io/solutions/calculatorapp-0zZJkVB0JQ)
- Live Site URL: [https://tahobbit11.github.io/Calculator-app/](https://tahobbit11.github.io/Calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to use switch cases and change CSS settings using JS

To see how you can add code snippets, see below:

```html
<div class="inputs-wrapper">
  <button class="button button-theme1" value="7">7</button>
  <button class="button button-theme1" value="8">8</button>
  <button class="button button-theme1" value="9">9</button>
  <button class="button button-theme1" value="del">DEL</button>
  <button class="button button-theme1" value="4">4</button>
  <button class="button button-theme1" value="5">5</button>
  <button class="button button-theme1" value="6">6</button>
  <button class="button button-theme1" value="+">+</button>
  <button class="button button-theme1" value="1">1</button>
  <button class="button button-theme1" value="2">2</button>
  <button class="button button-theme1" value="3">3</button>
  <button class="button button-theme1" value="-">-</button>
  <button class="button button-theme1" value=".">.</button>
  <button class="button button-theme1" value="0">0</button>
  <button class="button button-theme1" value="/">/</button>
  <button class="button button-theme1" value="*">x</button>
</div>
<div class="options-wrapper">
  <button class="button-command button-command-theme1" id="reset" value="reset">RESET</button>
  <button class="button-command button-command-theme1" id="equals" value="=">=</button>
</div>
```
```css
     .theme-buttons1 {
      position: relative;
      right: 10px;
      background-color: hsl(223, 31%, 20%);
      height: 25px;
      width: 68px;
      border-radius: 20px;
     }

     .theme-buttons2 {
      position: relative;
      right: 10px;
      background-color: hsl(0, 5%, 81%);
      height: 25px;
      width: 68px;
      border-radius: 20px;
     }

     .theme-buttons3 {
      position: relative;
      right: 10px;
      background-color: hsl(268, 71%, 12%);
      height: 25px;
      width: 68px;
      border-radius: 20px;
     }
```
```js
function operators(operator) {
    switch(operator){
        case "*":
            if(total === 0){
                total = 1                
            }
            if(numberString == ""){
                numberString = "1";
            }
            total = total * Number(numberString);
            numberArray = [];
            numberString = "";
            totalText.innerHTML = total;
            break;
        case "/":
            console.log(numberArray);
            if(total === 0){
                total = 1
                total = Number(numberString) / total;                
            } 
            if(numberString == "") {
                numberString = "1"
                console.log(numberString);
                total = total / Number(numberString)
            }
            numberArray = [];
            numberString = "";
            totalText.innerHTML = total;
            break;
        case "-":
            total = Number(numberString) - total;
            numberArray = [];
            numberString = "";
            totalText.innerHTML = total;
            break;
        case "+":
            total = total + Number(numberString);
            numberArray = [];
            numberString = "";
            totalText.innerHTML = total;
            break;
        case "del":
            numberArray.pop();
            numberString = numberString.slice(0, -1)
            inputText.innerHTML = numberString;
            break;
        case "reset":
            numberArray = [];
            operatorArray = [];
            numberString = "";
            total = 0;
            totalText.innerHTML = total;
            inputText.innerHTML = total;
            break;
        case "=":
            if(operatorArray.slice(-1) == "*") {
                total = total * Number(numberString);
            } else if (operatorArray.slice(-1) == "/") {
                total = total / Number(numberString);
            } else if (operatorArray.slice(-1) == "-") {
                total = total - Number(numberString);
            } else if (operatorArray.slice(-1) == "+"){
                total = total + Number(numberString);
            }
            operatorArray = [];
            numberString = "";
            console.log(numberString)
            console.log(numberArray)
            totalText.innerHTML = total;
            break;
        default: 
            break;    
    }
}
```

### Continued development

I plan on coming back and adding some animations when switching between the themes


## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
