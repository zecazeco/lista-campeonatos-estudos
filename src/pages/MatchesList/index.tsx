import React from 'react';
import Stack from '@mui/material/Stack';

import { Match, TopBar } from '../../components';

function MatchesList() {
  return (
    <>
      <TopBar title="Partidas" />
      <Stack spacing={2}>
        <Match date="27/05/2022" home="home" away="away" competition="campeonato brasileiro" />
        <Match date="27/05/2022" home="home" away="away" competition="campeonato brasileiro" />
        <Match date="27/05/2022" home="home" away="away" competition="campeonato brasileiro" />
        <Match date="27/05/2022" home="home" away="away" competition="campeonato brasileiro" />
      </Stack>
    </>
  );
}

export default MatchesList;
