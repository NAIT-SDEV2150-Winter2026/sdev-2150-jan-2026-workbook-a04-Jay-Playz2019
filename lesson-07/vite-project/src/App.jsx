import Header from './components/Header';
import Filters from './components/filters'
import Results from './components/results'
// import Details from './components/details'

import './App.css';

function App() {
  return (
  <>
  <Header tagline='Find the right resources, right away!'/>
  <Filters />
  <Results />
  </>
)
  ;
}

export default App;