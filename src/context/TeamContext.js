import uuid from 'react-native-uuid'
import createDataContext from './createDataContext';

const teamsReducer = (state, action) => {

  switch (action.type) {
    case 'edit_team' :
      return state.map((team) => {
        return team.id === action.payload.id ? 
        action.payload
        : 
        team
      });
    case 'delete_team':
      return state.filter(team => team.id !== action.payload)
    case 'add_team':
      if(state !== null) {
        return [
          ...state, 
          { 
            id: uuid.v4(), 
            name: action.payload.name,
            content: action.payload.content
          }
        ];
      } else {
        return [
          { 
            id: uuid.v4(), 
            name: action.payload.name,
            content: action.payload.content
          }
        ];
      }
    case 'hydrate':
      return action.payload
    default:
      return state;
  }
};

const addTeam = dispatch => {
  return (name, content) => {
    dispatch({ type: 'add_team', payload: { name, content } });
  };
};

const editTeam = dispatch => {
  return (id, name, content) => {
    dispatch({ type: 'edit_team', payload: { id, name, content } })
  };
};

const deleteTeam = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_team', payload: id })
  };
};

const hydrate = dispatch => {
  return (state) => {
    dispatch({ type: 'hydrate', payload: state })
  }
}

export const { Context, Provider } = createDataContext(
  teamsReducer, 
  { addTeam, deleteTeam, editTeam, hydrate },
  [{ id: 0, name: 'Build Your Team', content: {} }]
);