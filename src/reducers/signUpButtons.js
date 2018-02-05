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

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BUTTON:
      return (
         state.map((button)=>{
          if (button.toggle === action.toggle) {
            return {...button, ...action.payload};
          } else return button
         })
        )
    default:
      return state
  }
}

export default dataReducer