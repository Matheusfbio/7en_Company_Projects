import Rotas from './routes'
import './App.css'
import { FormProvider } from './contexts/FormContext'

function App() {
  return (
    <FormProvider>
      <Rotas />
    </FormProvider>
  )
}

export default App
