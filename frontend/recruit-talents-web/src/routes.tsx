import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Cadastro } from './pages/Register/cadastro'
import { Login } from './pages/Login/Login'
import DashboardADM from './pages/AdminDashboard/index'
import UsuarioLogado from './pages/UserDashboard/DashboardUser'
import EditarUsuario from './pages/UserEdit/UserEdit'
import { RequireAuth } from './contexts/auth/RequireAuth'
import * as ROUTES from './constants/routes'
import LandingPage from './pages/LandingPage/LandingPage'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LANDINGPAGE} element={<LandingPage />} />
        <Route path={ROUTES.REGISTER} element={<Cadastro />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.DASHBOARD} element={<DashboardADM />} />
        <Route
          path={ROUTES.USER_LOGIN}
          element={
            <RequireAuth>
              <UsuarioLogado />
            </RequireAuth>
          }
        />
        <Route path={ROUTES.USER_EDIT} element={<EditarUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
