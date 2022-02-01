import React from 'react';
import Stack from '@mui/material/Stack';
import { Competition, TopBar } from '../../components';

function CompetitionsList() {
  return (
    <>
      <TopBar title="Campeonatos" />
      <Stack spacing={2}>
        <Competition name="comp1" country="Brasil" description="descricao competiçao 1" />
        <Competition name="comp2" country="Brasil" description="descricao competiçao 2" />
        <Competition name="comp3" country="Brasil" description="descricao competiçao 3" />
        <Competition name="comp4" country="Brasil" description="descricao competiçao 4" />
      </Stack>
    </>
  );
}

export default CompetitionsList;
