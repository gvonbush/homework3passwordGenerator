function passwordGenerator() {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var password = ""

    var passwordLength = ""

    var specialCharacter = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
        "~", "*", "?", ":"]
    
    while (passwordLength == ""){
      debugger
      var newLength =  parseInt (prompt ("how long is the password? (between 8 and 128?)"))
      if (newLength >= 8 && newLength <=128){
          passwordLength = newLength

      }
    }
    var randomNumber = Math.floor(Math.random() * (120) + 8);
    console.log(randomNumber)
    for (i = 0; i < passwordLength; i++) {
        var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log(randomAlphabet)
        var randomSpecialCharacter = specialCharacter[Math.floor(Math.random() * specialCharacter.length)]
        var randomInteger = Math.floor(Math.random() * Math.floor(9))
        console.log(randomSpecialCharacter, randomInteger)
    }
}
document.getElementById("generate").addEventListener("click",passwordGenerator);
//passwordGenerator()

    }
}
debugger
//call a prompt for if else