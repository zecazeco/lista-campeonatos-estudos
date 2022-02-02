import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CompetitionsList from '../pages/CompetitionsList';
import MatchesList from '../pages/MatchesList';
import TeamsList from '../pages/TeamsList';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CompetitionsList />} />
      <Route path="/competitions" element={<CompetitionsList />} />
      <Route path="/competitions/:id/matches" element={<MatchesList />} />
      <Route path="/competitions/:id/teams" element={<TeamsList />} />
    </Routes>
  );
}

export default AppRouter;
