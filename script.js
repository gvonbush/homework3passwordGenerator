function passwordGenerator (){
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var password = ""

    var specialCharacter = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":"]
var randomNumber = Math.floor(Math.random() * (120) + 8);
  console.log(randomNumber)
    for (i=0; i<randomNumber; i++){
        var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log(randomAlphabet)
        var randomSpecialCharacter = specialCharacter[Math.floor(Math.random() * specialCharacter.length)] 
        var randomInteger = Math.floor(Math.random() * Math.floor(9))
        console.log (randomSpecialCharacter, randomInteger)
    }
}
passwordGenerator ()