import { MenuDashboard } from '../../components/menuDashboard/index'
import './index.css'
import UsuariosCadastradosComp from '../../components/UserRegister/index'

export default function DashboardADM() {
  return (
    <div className="container-user">
      <MenuDashboard />
      <UsuariosCadastradosComp />
    </div>
  )
}
