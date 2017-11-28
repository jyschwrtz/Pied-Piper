import merge from 'lodash/merge';

const UiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    default:
      return state;
  }
};

export default UiReducer;
