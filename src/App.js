import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';

// lazy
const NewJobs = lazy(() => import('./pages/NewJobs'));

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route
            path="jobs/new"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NewJobs />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
