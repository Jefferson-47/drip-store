import { Link } from 'react-router-dom'

const Cadastro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Criar conta</h1>
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Nome completo" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" placeholder="E-mail" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Senha" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Confirmar senha" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          <button className="bg-primary text-white font-semibold py-2 rounded-md hover:brightness-110 transition">
            Cadastrar
          </button>
          <p className="text-center text-sm text-gray-500">
            Já tem conta?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cadastro