import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from "react-toastify";
import ConversationPage from './pages/ConversationPage';
import { AuthticationRoute } from './components/AuthticationRoute';
import { AuthContext } from './utils/context/AuthContext';
import { useState } from 'react';
import { User } from './utils/types';

function App() {
  const [user, setUser] = useState<User>();
  return (
    <>
    <AuthContext.Provider value={{user, updateUser: setUser}}>
      <Routes>
        <Route path='/' element={
            <AuthticationRoute>
              <ConversationPage/>
            </AuthticationRoute>
          } />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </AuthContext.Provider>
    <ToastContainer/>
    </>
   
  )
}

export default App
