import React from 'react'
import {render} from '@testing-library/react'
import Input from './Input'


describe('should render', () => {
	

   describe('should word has not been guessed', () => {
	   let store
	   
	  
	   it('should render compnent without error', ()=> { 
		   const {queryByTestId} = render(<Input store= {store} sucess= {false } />)
		   const component = queryByTestId('component-input')
		   expect(component).not.toBeNull()

	   })

	   it('should reder input box', () => {
		   const {queryByTestId} = render(<Input store= {store} sucess= {false }/>)
		   const inputBox = queryByTestId('input-box')
		   expect(inputBox).not.toBeNull()

	    })

	   it('should renders submit button', () => {
		   const {queryByTestId} = render(<Input store= {store} sucess= {false}/>)
		   const submitButton = queryByTestId('submit-button')
		   expect(submitButton).not.toBeNull()

	    })
   })
})

describe('should word has been guessed', ()=> { 
	let store

	 it('should not render compnent without error', ()=> { 
		 const {queryByTestId} = render(<Input store= {store} sucess= {true } />)
		   const component = queryByTestId('component-input')
		   expect(component).not.toBeNull()

	   })

	   it('should not render input box', () => { 
		    const {queryByTestId} = render(<Input store= {store} sucess= {true }/>)
		   const inputBox = queryByTestId('input-box')
		   expect(inputBox).toBeNull()
	   })

	   it('should not render submit button', () => { 
		   
		   const {queryByTestId} = render(<Input store= {store} sucess= {true}/>)
		   const submitButton = queryByTestId('submit-button')
		   expect(submitButton).toBeNull()

	   })

} )