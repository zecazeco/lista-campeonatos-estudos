import React from 'react';
import { ICompetition } from '../../interfaces/competition';

// const Competition = ({name}:ICompetition) => {
// const Competition = (props:ICompetition) => {
// const Competition: React.FC<ICompetition> = ({ children, name }) => {

function Competition({ children, name }: ICompetition) {
  return (
    <>
      <h3>{name}</h3>
      <p>{children}</p>
    </>
  );
}

export default Competition;
