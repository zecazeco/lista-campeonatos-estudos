import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ICompetition } from '../../interfaces/competition';
// const Competition = ({name}:ICompetition) => {
// const Competition = (props:ICompetition) => {
// const Competition: React.FC<ICompetition> = ({ children, name }) => {

function Competition({ name, description, country }: ICompetition) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {country}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver partidas</Button>
      </CardActions>
    </Card>
  );
}

export default Competition;
