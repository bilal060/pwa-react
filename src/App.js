import { useLocation } from 'react-router-dom';
import '../src/Pages/common.css';
import RegistrationRoutes from './Components/Registration/routes';
import RegistrationLayout from './Components/Registration';
import AppLayout from './Components/App Layout';
import 'bootstrap/dist/css/bootstrap.css';
import ContentRoutes from './Components/Content/routes';
import Chat from './Pages/Chat';

function App() {
  const homepage = ['/home',
    '/products',
    '/aboutus',
    '/home/seed',
    '/home/buds',
    '/home/dispensary',
    '/home/cannabis',
    '/home/headshop',
    '/favourite',
    '/favourite/userprofile',
    '/favourite/userprofile/edit',
    '/favourite/userprofile/delete',
    '/home/seed/seedinfo',
    '/home/dispensary/detail',
    '/home/cannabis/detail',
    '/home/headshop/detail',
    '/home/seed/map',
    '/home/buds/map',
    '/home/dispensary/map',
    '/home/cannabis/map',
    '/home/headshop/map']
  const chat = ['/chat']

  const location = useLocation();

  if (homepage.includes(location.pathname)) {
    return (
      <AppLayout>
        <ContentRoutes />
      </AppLayout>
    );
  }
  if (chat.includes(location.pathname)) {
    return (
      <Chat />
    );
  }
  else
    return (
      <RegistrationLayout>
        <RegistrationRoutes />
      </RegistrationLayout>
    );
}

export default App;
