import AuthContextProvider from './context/auth/AuthContext'
import './index.css'
import Roots from './routes/Routes'

function App() {

  return (
    <AuthContextProvider>
      <Roots />
    </AuthContextProvider>
  )
}

export default App
