import { useLocation } from 'react-router-dom';
import '../src/Pages/common.css';
import RegistrationRoutes from './Components/Registration/routes';
import RegistrationLayout from './Components/Registration';
import AppLayout from './Components/App Layout';
import 'bootstrap/dist/css/bootstrap.css';
import ContentRoutes from './Components/Content/routes';

function App() {
  const homepage = ['/home', '/products', '/aboutus', '/home/seed', '/home/buds', '/home/dispensary', '/home/cannabis', '/home/headshop', '/likes', '/home/seed/seedinfo', '/home/dispensary/detail', '/home/cannabis/detail', '/home/headshop/detail']
  const location = useLocation();

  if (homepage.includes(location.pathname)) {
    return (
      <AppLayout>
        <ContentRoutes />
      </AppLayout>
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
