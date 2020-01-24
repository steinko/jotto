import React from 'react' /* eslint-disable-line no-unused-vars */
import { render } from "@testing-library/react";
import {checkProps} from '../test/testutil'

import Congrats from './Congrats' /* eslint-disable-line no-unused-vars */




it('should exist',() => {
  const wrapper = render(<Congrats sucess={false }/>)
  expect(wrapper).toBeTruthy()
})



it('should deliver no text', ()=> {
  const {getAllByText }= render(<Congrats sucess={false }/>)
  expect(getAllByText('')).toBeTruthy()
})

it('should deliver congrats message', ()=> {
  const {getByText } = render(<Congrats sucess={true }/>)
  expect(getByText('Congrats You guessed the word')).toBeTruthy()
})

it('should not trrow and error', () => {
  const expectedProps = {sucess: false}
  checkProps(Congrats,expectedProps)
})

