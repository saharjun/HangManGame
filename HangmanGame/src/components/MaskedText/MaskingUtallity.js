/*
*
* @param {The words which is give as input and expected to guess} originalWord
* @param {Letter which is guess by User already} guessedLetters
* Ex- originalWord : HUMBLE
* guessLetter : ['H', 'M', 'E']
*  return-->   "H _ M _ _ E"
*
*/

export function getMaskedString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase()) //['h', 'M', 'e'] --> ['H', 'M',' 'E']
    const guessedLetterSet = new Set(guessedLetters);

    const result = originalWord.toUpperCase().split('').map(char => {
        if (guessedLetterSet.has(char)) {
            return char
        } else {
            return ' _ '
        }

    }); //['h', 'M', 'e'] --> ['H _ M _ _ E]

    return result;
}