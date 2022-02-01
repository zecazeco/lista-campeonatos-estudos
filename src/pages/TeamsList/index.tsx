import React from 'react';
import Stack from '@mui/material/Stack';

import { Team, TopBar } from '../../components';

function TeamsList() {
  return (
    <>
      <TopBar title="Times" />
      <Stack spacing={2}>
        <Team id="0" name="nome 1" city="cidade" />
        <Team id="1" name="nome 2" city="cidade 2" />
      </Stack>
    </>
  );
}

export default TeamsList;
