import React from 'react' /* eslint-disable-line no-unused-vars */
import PropTypes from 'prop-types'
const Congrats = (props) => {
  if (props.sucess) {
    return (
      <div data-testid= "component-congrats" className="allert alert-sucess">
        <span data-testid="congrats-message">
        Congrats You guessed the word
        </span>
      </div>
    )
  } else {
    return (
      <div data-testid= "component-congrats"> </div>
    )
  }
}
Congrats.propTypes = {
  sucess: PropTypes.bool.isRequired
}

export default Congrats

