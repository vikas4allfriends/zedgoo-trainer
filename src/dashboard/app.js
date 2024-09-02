import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dash from './dashboard1';
import Help from './help';
import Student from './Students';
import BatchList from './BatchList';
import Layout from './layout';
import Broadcast from './broadcast';
import Setting from './Settings';
import Logout from './logout';
import About from './about';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="Dashboard" element={<Dash/>} />
          <Route path="student" element={<Student />} />
          <Route path="batchlist" element={<BatchList />} />
          <Route path="broadcast" element={<Broadcast/>} />
          <Route path="settings" element={<Setting/>} />
          <Route path="logout" element={<Logout/>} />
          <Route path="about" element={<About/>} />
          <Route path="help" element={<Help />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
