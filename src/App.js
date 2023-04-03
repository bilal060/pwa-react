import '../src/Pages/common.css';
import ContentRoutes from './Components/Content/routes';
import AppLayout from './Components/App Layout';
import RegistrationLayout from './Components/Registration';
import RegistrationRoutes from './Components/Registration/routes';

function App() {


  // <AppLayout>
  //   <ContentRoutes />
  // </AppLayout>

  return (
    <RegistrationLayout>
    <RegistrationRoutes />
    </RegistrationLayout>
  )


}

export default App;
