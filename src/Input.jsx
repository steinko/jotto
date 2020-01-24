import React ,{Component} from 'react'

export default class Input extends Component {
	render() {
	   const contents =
			(
			   <form className="form-inline">
				  <input
					 data-testid="input-box"
					 className= "mb2 mx-sm-3"
					 type= "text"
					 placeholder="Enter Guess" />
				  
				  <button
					 data-testid="submit-button"
					 className= "btn btn-primary mb-2"
					 type="submit">
					 Submit
                  </button>
			  </form>
			)
		
		return (<div data-testid="component-input">
		     {contents}
		</div>)
	 }
}