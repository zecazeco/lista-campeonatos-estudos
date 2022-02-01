import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

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
        <Stack direction="row" spacing={2}>
          <Typography variant="h5" component="div">
            {home}
          </Typography>
          <Typography variant="h5" component="div">
            X
          </Typography>
          <Typography variant="h5" component="div">
            {away}
          </Typography>
        </Stack>
        <Typography variant="body2">
          {competition}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Match;
