export const initialState = {
  rotating: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "rotate": {
      console.log(action.payload);
      return {
        rotating: action.payload,
      };
    }
    default:
      return state;
  }
};
