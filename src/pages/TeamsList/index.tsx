import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { Team, TopBar } from '../../components';
import api from '../../services/api';

import { ITeam } from '../../interfaces/team';

function TeamsList() {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    async function getTeamss() {
      const { data } = await api.get('/teams');
      // console.log('RESPO', data);
      setTeams(data);
    }

    getTeamss();
  }, []);

  return (
    <>
      <TopBar title="Equipes" />
      <Stack spacing={2}>
        {
          teams.length > 0 && teams.map((item) => (
            <Team
              id={item.id}
              name={item.name}
              city={item.city}
            />
          ))
        }
      </Stack>
    </>
  );
}

export default TeamsList;
