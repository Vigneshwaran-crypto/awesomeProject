import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Route from '../Router/Route';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Route />
    </QueryClientProvider>
  );
};

export default App;
