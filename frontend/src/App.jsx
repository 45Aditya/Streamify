import { Route, Routes } from 'react-router';
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SingUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";
import OnBoardingPage from "./pages/OnBoardingPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import CallPage from "./pages/CallPage.jsx";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = { <HomePage/> } />
        <Route path="/signup" element = { <SignUpPage/> } />
        <Route path="/login" element = { <LoginPage/> } />
        <Route path="/notifications" element = { <NotificationPage/> } />
        <Route path="/chat" element = { <ChatPage/> } />
        <Route path="/call" element = { <CallPage/> } />
        <Route path="/onboarding" element = { <OnBoardingPage/> } />
      </Routes>
    </div>
  )
}

export default App
