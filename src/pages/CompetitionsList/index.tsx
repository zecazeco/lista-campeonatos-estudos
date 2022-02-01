import React from 'react';
import Stack from '@mui/material/Stack';

import { Competition } from '../../components';

function CompetitionsList() {
  return (
    <div>
      <Stack spacing={2}>
        <Competition name="comp111" country="Brasil">descricao competiçao 1</Competition>
        <Competition name="comp222" country="Brasil">descricao competiçao 2</Competition>
        <Competition name="comp3" country="Brasil">descricao competiçao 3</Competition>
        <Competition name="comp5" country="Brasil">descricao competiçao 5</Competition>
      </Stack>
    </div>
  );
}

export default CompetitionsList;
