import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo - Formulário em Modal */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 bg-purple-100">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Acesse sua conta</h1>
          <p className="text-sm text-gray-500 mb-8">
            Novo cliente? Então registre-se{' '}
            <Link to="/register" className="text-primary font-semibold hover:underline">aqui</Link>
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Login *</label>
              <input
                type="text"
                placeholder="Insira seu login ou email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Senha *</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Insira sua senha"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-primary text-sm hover:underline">Esqueci minha senha</a>
            </div>
            <button className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:brightness-110 transition">
              Entrar
            </button>
          </div>
        </div>
      </div>

      {/* Lado direito - Imagem */}
      <div className="hidden md:flex w-1/2 bg-purple-100 items-center justify-center p-12">
        <img
          src="/src/assets/White-Sneakers-PNG.png"
          alt="Tênis"
          className="max-w-full object-contain drop-shadow-xl"
        />
      </div>
    </div>
  )
}

export default Login