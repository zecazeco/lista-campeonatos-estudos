import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { Competition, TopBar } from '../../components';
import api from '../../services/api';

import { ICompetition } from '../../interfaces/competition';

function CompetitionsList() {
  const [competitions, setCompetitions] = useState<ICompetition[]>([]);

  useEffect(() => {
    async function getCompetitions() {
      const { data } = await api.get('/competitions');
      // console.log('RESPO', data);
      setCompetitions(data);
    }

    getCompetitions();
  }, []);

  // console.log('ep', competitions[0].id);
  return (
    <>
      <TopBar title="Campeonatos" />
      <Stack spacing={2}>
        {
          competitions.length > 0 && competitions.map((item) => (
            <Competition
              key={item.id}
              id={item.id}
              name={item.name}
              country={item.country}
              description={item.description}
            />
          ))
        }
      </Stack>
    </>
  );
}

export default CompetitionsList;
