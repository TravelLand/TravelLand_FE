import GlobalStyle from './styles/GlobalStyles';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <body>
        <div id="root"></div>
        <div id="modal-root"></div>
      </body>
    </>
  );
}

export default App;
