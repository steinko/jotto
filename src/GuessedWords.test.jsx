import React from 'react' /* eslint-disable-line no-unused-vars */
import GuessedWords from './GuessedWords'
import { render } from '@testing-library/react';
import { checkProps } from '../test/testutil';

const defaultProps = {
  guessedWords: [{guessedWord: 'train', letterMatchCount: 3 }],
}


it('should not throw any warning', () => {
  checkProps(GuessedWords, defaultProps)
})


describe ('should be no word guessed',()=> {
 
  it('should deliver no error', () => {
    const {getByTestId } = render(<GuessedWords guessedWords={[]} />)
    expect(getByTestId('component-test-words')).toBeTruthy()
})

  it('should deliver instruction to a guessed word', () => { 
    const {getByTestId } = render(<GuessedWords guessedWords={[]} />)
    expect(getByTestId('guess-instructions')).toBeTruthy()
  })


  it('should deliver Text to guessed word', () => {
   const {getByText } = render(<GuessedWords guessedWords={[]} />)
   expect(getByText('Try to guess the secret word!')).toBeTruthy()
 })

})

describe ('should be a word guessed',()=> {
  const guessedWords = [
    {guessedWord: 'train', letterMatchCount: 3 },
    {guessedWord: 'agile', letterMatchCount: 1 },
    {guessedWord: 'party', letterMatchCount: 5 },
  ]
  it('should render without error', () => {
    const {getByTestId } = render(<GuessedWords guessedWords={guessedWords} />)
    expect(getByTestId('component-test-words')).toBeTruthy()
  })

  it('should render "guessed word"', () => { 
    const {getByTestId } = render(<GuessedWords guessedWords={guessedWords} />)
    expect(getByTestId('guessed-words')).toBeTruthy()

  })


  xit('should render guessed words', () => { 
    const {getByTestId } = render(<GuessedWords guessedWords={guessedWords} />)
    expect(getByTestId('guessed-word').length).toBe(guessedWords.length)

  })
})