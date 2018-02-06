import { UPDATE_BUTTON } from './constants'

export const buttonUpdate = (buttonTitle) => {
  return {
    type: UPDATE_BUTTON,
    buttonTitle
  }
}