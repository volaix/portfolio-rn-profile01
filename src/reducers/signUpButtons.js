import { UPDATE_BUTTON } from "../constants";

const initialState = {
  Philosophy: true,
  Music: true,
  Travelling: false,
  Sport: true,
  Soccer: false,
  'Rock\'n\'Roll': false,
  Swimming: false,
  Radiohead: false,
  Dog: true,
  Religion: true,
  'Michael Jackson': true,
  France: true
}

const signUpButtons = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BUTTON:
    console.log('we are trying to do the reduce thing now')
    const updatedButton = action.buttonTitle
    console.log(updatedButton)
    console.log(state[updatedButton])
      return ({
        ...state,
        [updatedButton]: !state[updatedButton]
      })
    default:
      return state
  }
}

export default signUpButtons