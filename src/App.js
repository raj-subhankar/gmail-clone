import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import EmailList from './EmailList';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Header from './Header';
import Mail from './Mail';
import SendMail from './SendMail';
import Sidebar from './Sidebar';

function App() {
  
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
      <div className="app">
        <Header/>

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        { sendMessageIsOpen && <SendMail />}

      </div>
      </Router>
  );
}

export default App;
