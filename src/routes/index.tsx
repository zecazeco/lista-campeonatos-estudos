import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CompetitionsList from '../pages/CompetitionsList';
import MatchesList from '../pages/MatchesList';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CompetitionsList />} />
      <Route path="/competitions" element={<CompetitionsList />} />
      <Route path="/matches" element={<MatchesList />} />
    </Routes>
  );
}

export default AppRouter;
