import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      return [
        ...state, 
        { 
          id: uuid.v4(), 
          name: action.payload.name,
          content: action.payload.content
        }
      ];
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

export const { Context, Provider } = createDataContext(
  teamsReducer, 
  { addTeam, deleteTeam, editTeam }, 
  []
);