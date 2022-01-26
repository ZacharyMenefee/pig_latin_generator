
let submitBtn = document.querySelector(".submit-btn");
let form = document.querySelector(".translate-form");
let vowels = ['a', 'e', 'i', 'o', 'u'];


form.addEventListener('submit', submit)

function submit(evt){
    evt.preventDefault();
    let textbox = document.querySelector("#text-box");
    let outputbox = document.querySelector("#output-box")
    outputbox.value = generator(textbox.value, vowels)

    console.log("Submit the form")
}

function generator(input, vowels){
    let words = input.toLowerCase().split(" ")
    let generatedWords = words.map(word => {
        const firstLetterChecker = (element) => word[0] === element;

        if(vowels.some(firstLetterChecker)){
            return word = word + "yay";
        }else {
            let i = 0
            let chars = word.split("")
            for(i; i < chars.length; i++){
                if(vowels.indexOf(chars[i]) != -1)
                    { 
                        break;
                    }
            }
            return word = word.slice(i) + word.slice(0, i) + 'ay'
        }
    })
    return generatedWords;
    //TODO: Turn array into a string;
}
