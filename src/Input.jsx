import React  from 'react'

function Input({secretWord})  {
	const [currentGuess,setCurrentGuess ] = React.useState("")
	  
	return (
		<div data-testid= "component-input">
			<form className="form-inline">
				<input
					 data-testid="input-box"
					 className= "mb2 mx-sm-3"
					 type= "text"
					 placeholder="Enter Guess" 
					 value = { currentGuess }
					 onChange= {(event)=> setCurrentGuess(event.target.value) }
				  />
				<button
					 data-testid="submit-button"
					 className= "btn btn-primary mb-2"
					 type="submit">
					 Submit
                </button>
			</form>
		</div>)
	 }

export default  Input 