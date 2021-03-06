// Vigenere cipher
// Cryptography is awesome! Let's try to organize production of encryption machines. Our machines will use one of the encryption methods that are easy to understand, but also not amenable to simple cryptanalysis - the Vigenere cipher.
// Our machine will have 2 modifications: direct and reverse (the type of machine is determined at the moment of creation). The direct machine simply encodes and decodes the string that was transmitted to it, and the reverse machine returns an inverted string after encoding and decoding.
// Your task is to implement the class VigenereCipheringMachine. constructor of this class accepts true (or nothing) to create direct machine and false to create reverse machine. Each instance of VigenereCipheringMachine must have 2 methods: encrypt and decrypt.
// 
// encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword).
// decrypt method accepts 2 parameters: encryptedMessage (string to decode) and key (string-keyword).
// 
// These parameters for both methods are mandatory. If at least one of them has not been given, an Error must be thrown. The text returned by these methods must be uppercase. Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged).
// You don't need to validate value sent to constructor and to encrypt and decrypt methods (except throwing an Error on absence of argument for these methods).
// 
// For example:
// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);
// 
// directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
// reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
// 
// Write your code in src/vigenere-cipher.js.

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
