import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import * as firebase from 'firebase/app';

import ComingSoon from './pages/comingSoon';
import PreRegister from './pages/preRegister';

import firebaseConfig from './firebaseConfig.json';
import './App.css';

firebase.initializeApp(firebaseConfig);

firebase
  .auth()
  .signInAnonymously()
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // ...
  });

const App: React.FC = () => {
  return (
    <Router>
      <Route path='/' exact component={() => <Redirect to='/comingsoon' />} />
      <Route path='/comingsoon' exact component={ComingSoon} />
      <Route path='/preregister' exact component={PreRegister} />
      <Route path='/SponsorshipProspectus.pdf' exact />
    </Router>
  );
};

export default App;
