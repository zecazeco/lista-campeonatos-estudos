import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { IMatch } from '../../interfaces/match';

function Match({
  date, home, away, competition,
}: IMatch) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
          {home} x {away}
        </Typography>
        <Typography variant="body2">
          {competition}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Match;
