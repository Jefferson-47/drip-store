import { Link } from 'react-router-dom'

const AuthLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-primary transition">
        Cadastre-se
      </Link>
      <Link to="/login" className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-md hover:brightness-110 transition">
        Entrar
      </Link>
    </div>
  )
}

export default AuthLinks