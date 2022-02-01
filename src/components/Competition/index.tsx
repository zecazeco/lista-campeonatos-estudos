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

function Competition({
  children, name, country,
}: ICompetition) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {country}
        </Typography>
        <Typography variant="body2">
          {children}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver tabela</Button>
      </CardActions>
    </Card>
  );
}

export default Competition;
