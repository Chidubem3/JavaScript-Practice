
let input = document.querySelector('#input');
let btn = document.getElementsByClassName('btn');
let text = document.querySelector('#text');
let deleteButton = document.getElementById('delete-btn');
let clearButton = document.getElementById('clear-btn');
let sign = document.querySelectorAll(".sign");
let equalTo = document.getElementById('equalTo');

let firstvalue, secondvalue,whatsign,result;
console.log(btn);

// btn.addEventListener('click',()=>{
//     text.innerHTML = input.value;
// })


// btn[0].addEventListener('click',()=>{
//     input.value = btn[0].innerHTML;
// }); this step now is going to be too long because we have ten button
// so an easier way is to use loop

let currentvalue;
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',()=>{
        input.value += btn[i].innerHTML;
        // input.value = btn[i].innerHTML;
    });   
}
// add a delete and clear button
// deletes the last element
// clear the all elements

// function for the delete button
deleteButton.addEventListener('click',()=>{
    // Convert the last element of the array
    let toArray= input.value.split("");
    console.log(toArray);
    // Remove the last element of the array
    toArray.pop();
    console.log("new array:");
    console.log(toArray);
    // converting it back to a string and updating the value of the input field with the new text(toArray).
    input.value = toArray.join("");
});

// fuction for the clear-btn
clearButton.addEventListener('click',()=>{
    input.value ="";
});


// WHen we click on a sign
// store the current value of input in a variable(firstvalue)
// Check what sign was clicked
// Clear the input field

// when we click on equal to
// Store the secondvalue of input in a variable(secondvalue)
// Do the arithmetic
// Display the result of the arithmetic

const arithmetic = ()=>{
    switch (whatsign) {
        case "+":
            result = Number(firstvalue) + Number(secondvalue);            
            break;
        case "-" :
            result = Number(firstvalue) - Number(secondvalue); 
            break;
        case "/":
            result = Number(firstvalue) / Number(secondvalue); 
            break;
        case "*":
            result = Number(firstvalue) * Number(secondvalue); 
            break;
        case "%":
            result = Number(firstvalue) % Number(secondvalue); 
            break;
        case "½":
            result =Math.sqrt( Number(firstvalue)); 
            break;
        case "^":
            result = Number(firstvalue) ** Number(secondvalue); 
            break;
        default:
            input.value = "Syntax Error"
            break;
    }
}

for (let i = 0; i < sign.length; i++){
    sign[i].addEventListener("click",()=>{
        firstvalue = input.value;
        console.log(firstvalue);
        input.value = "";
        whatsign =sign[i].innerHTML;
        console.log(whatsign);
    })
}

equalTo.addEventListener("click",()=>{
    secondvalue = input.value;
    console.log(secondvalue);
    arithmetic();
    console.log("= "+result);
    input.value= result;
})

// Add modulus and decimal to your calculator
let decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () =>{
    input.value += decimal.innerHTML
})