import { Provider } from 'react-redux'
import './App.css'

import store from './store'
import { ApartmentsGallery } from './components/apartments-gallery'

function App() {
  return (<Provider store={store}>
    <ApartmentsGallery/>
  </Provider>)
}

export default App;
