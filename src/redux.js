import { createStore } from 'redux';
import uuid from 'uuid/v4';

const initialState = {
  brews: [
   
  ]
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_BREW':
      return {
        ...state,
        brews: [...state.brews, action.payload]
      };
    
    case 'DELETE_BREW':
      return {
        ...state,
        brews: state.brews.filter((brew) => brew.id !== action.payload)
      };
    default:
      return state;
  }
}
// Actions
export const addBrewAction = (brews) => ({
  type: 'ADD_BREW',
  payload: brews
});


export const deleteBrewAction = (brewsId) => ({
  type: 'DELETE_BREW',
  payload: brewsId
});
