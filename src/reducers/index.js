import { handleActions } from 'redux-actions'
import initialState from './initialState'

const reducer = handleActions({
  'images/get/success'(action, state) {
    const { images } = state;
    return {
      ...state,
      images: images
    }
  },
  'images/get/fail'(action, state) {
    const { error } = state;
    return {
      ...state,
      error: error
    }
  },
}, initialState);

export default reducer
