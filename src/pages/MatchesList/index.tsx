import React from 'react';
import Stack from '@mui/material/Stack';

import { Match, TopBar } from '../../components';

function MatchesList() {
  return (
    <>
      <TopBar title="Partidas" />
      <Stack spacing={2}>
        <Match id="0" date="27/05/2022" home="home" away="away" competition="campeonato brasileiro" />
        <Match id="0" date="27/05/2022" home="home" away="away" competition="campeonato brasileiro" />
        <Match id="0" date="27/05/2022" home="home" away="away" competition="campeonato brasileiro" />
        <Match id="0" date="27/05/2022" home="home" away="away" competition="campeonato brasileiro" />
      </Stack>
    </>
  );
}

export default MatchesList;
