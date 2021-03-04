const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.direction = direction;
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Required parameter missing');
    }

    let encryptString = '';
    string = string.toUpperCase();
    key = key.toUpperCase().repeat(Math.ceil(string.length / key.length));

    for (let i = 0, j = 0; i < string.length; i++) {
      const letterIndex = this.alphabet.indexOf(string[i]);
      const keyIndex = this.alphabet.indexOf(key[i - j]);

      if (letterIndex === -1) {
        encryptString += string[i];
        j++
        continue;
      }

      encryptString += this.alphabet[(letterIndex + keyIndex) % this.alphabet.length];
    }

    if (this.direction === false) {
      return this.reverseResult(encryptString);
    }
    
    return encryptString;
  }

  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Required parameter missing');
    }

    let decryptString = '';
    string = string.toUpperCase();
    key = key.toUpperCase().repeat(Math.ceil(string.length / key.length));

    for (let i = 0, j = 0; i < string.length; i++) {
      const letterIndex = this.alphabet.indexOf(string[i]);
      const keyIndex = this.alphabet.indexOf(key[i - j]);

      if (letterIndex === -1) {
        decryptString += string[i];
        j++
        continue;
      }

      decryptString += this.alphabet[(this.alphabet.length + (letterIndex - keyIndex)) % this.alphabet.length];
    }

    if (this.direction === false) {
      return this.reverseResult(decryptString);
    }
    
    return decryptString;
  }

  reverseResult(result) {
    return result.split('').reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
