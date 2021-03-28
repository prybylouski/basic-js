const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(direction) {
    let alphabet = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z';
    this.alphabet = alphabet.split(', ')
      
      if (direction === false) {
        this.direction = false
      } else {
        this.direction = true
      }
    }
   
    encryptDecrypt(str, key, encrypt) {
      let chifr = ''
    
      let k = 0
      for (let j = 0; j < str.length; j++) {
        let letter = str.charAt(j).toUpperCase()
        let letterIndex = this.alphabet.indexOf(letter)
        if (letterIndex < 0) {
            if ( this.direction === false ) {
                chifr = letter + chifr 
            } else {
                chifr += letter;
            }
        } else {
          let keyLetter = key.charAt(k++).toUpperCase()
  
          if (k > key.length - 1) {
            k = 0
          }
  
          let keyLetterindex = this.alphabet.indexOf(keyLetter)
  
  
          if (encrypt) {
            let codedLetter = letterIndex + keyLetterindex;
            if (codedLetter >= this.alphabet.length) {
              codedLetter -= this.alphabet.length
            } 
  
            if ( this.direction === false ) {
              chifr = this.alphabet[codedLetter] + chifr
            } else {
              chifr += this.alphabet[codedLetter]
            }
            
  
          } else {
            let unCodedLetter = letterIndex - keyLetterindex;
            if (unCodedLetter < 0) {
              unCodedLetter += this.alphabet.length
            }
            if ( this.direction === false ) {
              chifr = this.alphabet[unCodedLetter] + chifr
            } else {
              chifr += this.alphabet[unCodedLetter]
            }
          }
  
        }
  
      }
      return chifr
    }

    encrypt(str, key) {
        return this.encryptDecrypt(str, key, true)
      }
      decrypt(str, key) {
        return this.encryptDecrypt(str, key, false)
      }
  
  }



module.exports = VigenereCipheringMachine;
