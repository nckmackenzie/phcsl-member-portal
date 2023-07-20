import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GlobalStyles from '../GlobalStyles';
import ProtectedRoute from './pages/ProtectedRoute';
import Payments from './pages/Payments';
import AvailableUnits from './pages/AvailableUnits';
import MyProfile from './pages/MyProfile';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/available-units" element={<AvailableUnits />} />
              <Route path="/my-profile" element={<MyProfile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              maxWidth: '500px',
              fontSize: '16px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
