import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from "react-toastify";
import ConversationPage from './pages/ConversationPage';
import { AuthticationRoute } from './components/AuthticationRoute';
import { AuthContext } from './utils/context/AuthContext';
import { useState } from 'react';
import { User } from './utils/types';
import { socket, SocketContext } from './utils/context/SocketContext';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './utils/store';
function App() {
  const [user, setUser] = useState<User>();
  return (
    <>
    <ReduxProvider store={store}>
      <SocketContext.Provider value={socket}>
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
      </SocketContext.Provider>
    </ReduxProvider>
    </>
   
  )
}

export default App
