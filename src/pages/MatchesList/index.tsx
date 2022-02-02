import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import { Match, TopBar } from '../../components';
import api from '../../services/api';

import { IMatch } from '../../interfaces/match';

function MatchesList() {
  const params = useParams();

  const [matches, setMatches] = useState<IMatch[]>([]);

  const fetchMatches = async () => {
    const allMatches = await api.get(`/competitions/${params.id}/matches`);
    const formatedMatches = await Promise.all(allMatches.data.map(async (item: IMatch) => {
      item.home = await (await api.get(`/teams/${item.home}`)).data.name;
      item.away = await (await api.get(`/teams/${item.away}`)).data.name;
      item.competition = await (await api.get(`/competitions/${item.competition}`)).data.name;
      return item;
    }));

    setMatches(formatedMatches);
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <>
      <TopBar title="Partidas" />
      <Stack spacing={2}>
        {
          matches.length > 0 && matches.map((item) => (
            <Match
              key={item.id}
              id={item.id}
              date={item.date}
              home={item.home}
              away={item.away}
              competition={item.competition}
            />
          ))
        }
      </Stack>
    </>
  );
}

export default MatchesList;
