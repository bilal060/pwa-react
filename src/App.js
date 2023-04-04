import { useLocation } from 'react-router-dom';
import '../src/Pages/common.css';
import RegistrationRoutes from './Components/Registration/routes';
import RegistrationLayout from './Components/Registration';
import AppLayout from './Components/App Layout';
import ContentRoutes from './Components/Content/routes';

function App() {
  const homepage = ['/home', '/products', '/aboutus']
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
