import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error=useRouteError()
  return (
    <div>
      <Navbar/>
      <div>{error.message}</div>
     <Footer/>
    </div>
  );
};

export default ErrorPage;