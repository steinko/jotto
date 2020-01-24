let secretLetterSet
let guessdedLetterSet

function getLetterMatchCount(word,secretWord) {
   secretLetterSet = new Set(secretWord.split(''))
   guessdedLetterSet = new Set(word.split(''))
  return  [...secretLetterSet].filter(letter=> guessdedLetterSet.has(letter)).length 
}
export { getLetterMatchCount }