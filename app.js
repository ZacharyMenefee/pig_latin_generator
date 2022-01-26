let input = "i am one who knocks"
let vowels = ['a', 'e', 'i', 'o', 'u']

function generator(input, vowels){
    let words = input.toLowerCase().split(" ")
    let generatedWords = words.map(word => {
        const firstLetterChecker = (element) => word[0] === element;

        if(vowels.some(firstLetterChecker)){
            return word = word + "yay";
        }else {
            let i = 0
            for(i; i < words.split("").length; i++){
                if(vowels.indexOf(chars[i]) != -1)
                    { 
                        break;
                    }
            }
            return word = word.slice(i) + word.slice(0, i) + 'ay'
        }
    })
    return generatedWords;
}

console.log(generator(input, vowels))


