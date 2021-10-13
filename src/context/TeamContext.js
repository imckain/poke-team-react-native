import createDataContext from './createDataContext';

const teamsReducer = (state, action) => {
  switch (action.type) {
    case 'add_team':
      return [...state, { name: `Team #${state.length + 1}`}];
    default:
      return state;
  }
};

const addTeam = dispatch => {
  return () => {
    dispatch({ type: 'add_team' });
  };
};

export const { Context, Provider } = createDataContext(
  teamsReducer, 
  { addTeam }, 
  []
);