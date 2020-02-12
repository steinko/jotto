import checkPropTypes from 'check-prop-types';
import {createStore, applyMiddelware} from 'redux'

import rootReducer from '../src/reducsers/rootReducer'
import { middlewares } from '../src/configureStore'
/**
* Throw error if conformingProps do not pass propTypes validation.
* @param {React.Component} component - Component to check props against.
* @param {object} conformingProps - Props we expect to conform to defined propTypes.
*/
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}

export const storeFactory = (initalState) =>  {
  const createStoreWithMiddleware = applyMiddelware(...middlewares)
  return createStoreWithMiddleware(rootReducer,initalState)
 }