import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// Importation des Composants
import UpdateClient from './components/UpdateClient'
import ClientDetail from './components/ClientDetail'
import CreateClient from './components/CreateClient'
import ClientList from './components/ClientList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/clients" replace />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/clients/create" element={<CreateClient />} />
        <Route path="/clients/:id" element={<ClientDetail />} />
        <Route path="/clients/:id/update" element={<UpdateClient />} />
      </Routes>
    </Router>
  )
}

export default App
