import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, NotFound, Notifications } from './pages'
import { Layout } from './components'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/notifications' element={<Notifications />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
