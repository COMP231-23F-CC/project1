import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SearchContextProvider } from './context/SearchContext.jsx'
import Room from './pages/singleRoom/Room.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchContextProvider>
    <App />
   
    </SearchContextProvider>
  </React.StrictMode>,
)
