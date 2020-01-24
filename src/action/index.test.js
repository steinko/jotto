import {correctGuess, actionTypes} from'./index'

it('should return a action with type CORRECT_GUESS', () => {
	correctGuess()
	expect(correctGuess()).toEqual({type: actionTypes.CORRECT_GUESS })
})