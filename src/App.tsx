import './assets/scss/main.scss'
import { useRoutes } from 'react-router-dom'
import { PublicRoutes } from './routes/PublicRoutes'

function App() {
  const appRoutes = useRoutes(PublicRoutes)

  return appRoutes
}

export default App
