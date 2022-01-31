import { ICompetition } from "../../interfaces/competition";

//const Competition = (props:ICompetition) => {
const Competition = ({name}:ICompetition) => {
  return (
    <h3>{name}</h3>
  );
};

export default Competition;