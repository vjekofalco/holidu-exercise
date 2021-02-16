import { Provider } from 'react-redux'

import store from './store'
import { ApartmentsListPage } from './pages/apartments-list-page'

function App() {
  return (<Provider store={store}>
    <ApartmentsListPage/>
  </Provider>)
}

export default App;
