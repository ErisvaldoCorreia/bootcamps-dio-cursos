import { DECREMENT, INCREMENT } from './actions';
const initialState = {
  count: 0
}
export function reducer(state = initialState, actions) {
  switch(actions.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
