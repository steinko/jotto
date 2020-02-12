import {storeFactory} from '../test/testutil'
import {guessWord} from './action/index'

describe ('guessword action dispatcher', () => {
	const secretWord = 'party';
	const unsuccessfulGuess = 'train';
	describe('no guessed words', () => {
	  let store;
	  const initialState = { secretWord	}
	  beforeEach (() => {
		  store = storeFactory(initialState)
	  })
	  it ('udate correctly for unsucessful guess', ()=>  { 
		  store.dispatch(guessWord(unsuccessfulGuess))
		  const newState = store.getState()
		  const expectedState = { 
			  ...initialState ,
			  success: false,
			  guessedWords: [{ 
				  guessWord: unsuccessfulGuess,
				  letterMatchCount:3
				  }]
				}
				expect(newState).toEqual(expectedState)
	  })
   })
})