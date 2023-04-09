import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'App/store';
import router from './Routes';

import 'Assets/Scss/reset.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
