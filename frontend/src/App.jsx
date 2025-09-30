import { Route, Routes } from 'react-router';
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";
import OnBoardingPage from "./pages/OnBoardingPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import CallPage from "./pages/CallPage.jsx";

import {useQuery} from "@tanstack/react-query";
import { Navigate } from 'react-router';
import PageLoader from './components/PageLoader.jsx';
import { getAuthUser } from './lib/api.js';
import useAuthUser from './hooks/useAuthUser.js';

const App = () => {

  const {isLoading, authUser} = useAuthUser();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;
  if(isLoading) return <PageLoader/>

  return (
    <div>
      <Rooutes>
        <Route path="/" element = { isAuthenticated && isOnboarded ? (
          <HomePage/>
        ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboarding"}/>
        ) } />
        <Route path="/signup" element = { !isAuthenticated ? <SignUpPage/> :  <Navigate to={"/"}/>} />
        <Route path="/login" element = { !isAuthenticated ? <LoginPage/> : <Navigate to={"/"}/>} />
        <Route path="/notifications" element = { isAuthenticated ? <NotificationPage/> : <Navigate to={"/login"}/> } />
        <Route path="/chat" element = { isAuthenticated ? <ChatPage/> : <Navigate to={"/login"}/> } />
        <Route path="/call" element = { isAuthenticated ? <CallPage/> : <Navigate to={"/login"}/>} />
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <OnBoardingPage />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Rooutes>
    </div>
  )
}

export default App
