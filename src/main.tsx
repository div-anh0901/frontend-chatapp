
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import "./styles/width_768_responsive.css"



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />   
    </BrowserRouter>,
)
