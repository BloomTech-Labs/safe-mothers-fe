const initialState = {
  id: ' ',
  firstName: '',
  lastName: '',
  email: '',
  username: '',

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
