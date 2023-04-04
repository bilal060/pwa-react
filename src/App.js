import '../src/Pages/common.css';
import ContentRoutes from './Components/Content/routes';
import AppLayout from './Components/App Layout';
import RegistrationLayout from './Components/Registration';
import RegistrationRoutes from './Components/Registration/routes';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
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
