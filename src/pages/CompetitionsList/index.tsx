import React from 'react';
import Stack from '@mui/material/Stack';

import { Competition } from '../../components';

function CompetitionsList() {
  return (
    <div>
      <Stack spacing={2}>
        <Competition name="comp1" country="Brasil" description="descricao competiçao 1" />
        <Competition name="comp2" country="Brasil" description="descricao competiçao 2" />
        <Competition name="comp3" country="Brasil" description="descricao competiçao 3" />
        <Competition name="comp4" country="Brasil" description="descricao competiçao 4" />
      </Stack>
    </div>
  );
}

export default CompetitionsList;
