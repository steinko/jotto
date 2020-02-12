import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Input from './Input'


describe('should render', () => {
	

   describe('should word has not been guessed', () => {
	  
	   
	  
	   it('should render compnent without error', ()=> { 
		   const {queryByTestId} = render(<Input />)
		   const component = queryByTestId('component-input')
		   expect(component).not.toBeNull()

	   })

	   it('should reder input box', () => {
		   const {queryByTestId} = render(<Input />)
		   const inputBox = queryByTestId('input-box')
		   expect(inputBox).not.toBeNull()

	    })

	   it('should renders submit button', () => {
		   const {queryByTestId} = render(<Input />)
		   const submitButton = queryByTestId('submit-button')
		   expect(submitButton).not.toBeNull()

	    })
   })
})



describe('state controlled input field', () => {
	it('should update value', () => {
		const mockSetCurrentGuess = jest.fn()
		React.useState = jest.fn(() => ["",mockSetCurrentGuess])
		const {queryByTestId} = render(<Input />)
		const inputBox = queryByTestId('input-box')
		fireEvent.change(inputBox, {
            target: {value: 'train'},
		 })
		 expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
	})

	it('should have a empty value in guessed word ', () => {
		const mockSetCurrentGuess = jest.fn()
		React.useState = jest.fn(() => ["",mockSetCurrentGuess])
		const {queryByTestId} = render(<Input />)
		const submit = queryByTestId('submit-button')
		fireEvent.click(submit)
		expect(queryByTestId('input-box').value).toBe('')
		expect(mockSetCurrentGuess).toHaveBeenCalledWith('')

	})
})