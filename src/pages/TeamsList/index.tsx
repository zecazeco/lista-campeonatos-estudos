import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import { Team, TopBar } from '../../components';
import api from '../../services/api';

import { ITeam } from '../../interfaces/team';

function TeamsList() {
  const params = useParams();

  const [teams, setTeams] = useState<ITeam[]>([]);

  const fetchTeams = async () => {
    const allTeams = await api.get(`/competitions/${params.id}/teams`);
    const formatedTeams = await Promise.all(allTeams.data.map(async (item: any) => {
      const res = await api.get(`/teams/${item.team}`);
      // console.log('dddd', res.data);
      return res.data;
    }));
    // console.log('form', formatedTeams);
    setTeams(formatedTeams);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <>
      <TopBar title="Equipes" />
      <Stack spacing={2}>
        {
          teams.length > 0 && teams.map((item) => (
            <Team
              key={item.id}
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
