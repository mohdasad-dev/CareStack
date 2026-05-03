import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProdiver  from './context/AppContext.jsx'
import AdminContextProdiver  from './context/AdminContext.jsx'
import DoctorContextProdiver  from './context/DoctorContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProdiver>
      <DoctorContextProdiver>
        <AppContextProdiver>
          <App />
        </AppContextProdiver>
      </DoctorContextProdiver>
    </AdminContextProdiver>
  </BrowserRouter>,
)
