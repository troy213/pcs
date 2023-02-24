import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, NotFound, Notifications } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
