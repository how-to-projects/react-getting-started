/**https://www.youtube.com/watch?v=Dorf8i6lCuk */

import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorites';

import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
  
     <Layout>
      <Routes>
        <Route exact path='/' element={ <AllMeetupsPage /> }></Route>
        <Route exact path='/new-meetup' element={ <NewMeetupsPage /> }></Route>
        <Route exact path='/favorites' element={ <FavoritePage /> }></Route>
      </Routes>
      </Layout>
  
  );
}

export default App;
