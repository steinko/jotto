import {actionTypes} from '../action/index'
import sucessReducer from './sucessReducer'

it('should return default initial state of false when no action is passed',() => {
	expect(sucessReducer(undefined,{})).toBe(false)
})

it('should return  state of true when reciving an action of type CORRECT_GUESS',() => {
	expect(sucessReducer(undefined,{type: actionTypes.CORRECT_GUESS})).toBe(true)
})

