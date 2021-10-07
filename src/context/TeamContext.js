import React, { useState, useReducer } from 'react';

const TeamContext = React.createContext();

const teamsReducer = (state, action) => {
  switch (action.type) {
    case 'add_team':
      return [...state, { name: `Team #${state.length + 1}`}];
    default:
      return state;
  }
};

export const TeamProvider = ({ children }) => {
  const [teams, dispatch] = useReducer(teamsReducer, []);

  const addTeam = () => {
    dispatch({ type: 'add_team' });
  };

  return (<TeamContext.Provider value={{ data: teams, addTeam }}>{children}</TeamContext.Provider>)
};

export default TeamContext;