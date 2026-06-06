import React from 'react';
import NavBar from '../../components/Everywere/NavBar';
import Footer from '../../components/Everywere/Footer';

function Login() {
  return (
    <div>
      <NavBar />
      <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-[#181411]">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXYsaETNcRzchDqbBAI3Nms0Yk4UszkTPS_c4dHhdYskELyqI-60StwB57V-2dvDO75osaHrCdMQnSfC1WD7KWQJAZuYecfTFTc_AmSxcwFqsTmNdBeKhEqNLPySxBb3TixPBCe0Ic6AUj6uMzQK3dutrFBErcUK4n0nLk7Z2rl43LQrtbDVnJyxOxLLZuCEEV5_ikhJAcK1GXKLOqdYaLNkyKhOEfFNijkYOk6MDepxiLD1w6fKV6SywK0igYvH9KqFnqrCVJ-Lg")' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#181411]/90 via-[#181411]/80 to-[#181411]/95 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 w-full max-w-[420px] bg-[#221d18] border border-[#3a322b] rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#d47211] to-[#a3560b]" />
          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="w-16 h-16 bg-[#2f2822] rounded-full flex items-center justify-center mb-5 ring-1 ring-[#3a322b] shadow-inner">
                <span className="material-symbols-outlined text-[#d47211]" style={{ fontSize: 32 }}>local_cafe</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Iniciar Sesión</h2>
              <p className="text-[#9ca3af] text-sm mt-2">Panel de Administrador</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#b9ab9d] uppercase tracking-wider ml-1">Correo electrónico</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-[#6b5f56] group-focus-within:text-[#d47211] transition-colors" style={{ fontSize: 20 }}>mail</span>
                  </div>
                  <input className="block w-full pl-11 pr-4 py-3 bg-[#181411] border border-[#393028] rounded-lg text-sm text-white placeholder-[#584f48] focus:outline-none focus:ring-2 focus:ring-[#d47211]/50 focus:border-[#d47211] transition-all duration-200" placeholder="admin@coffeeapp.com" type="email" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#b9ab9d] uppercase tracking-wider ml-1">Contraseña</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-[#6b5f56] group-focus-within:text-[#d47211] transition-colors" style={{ fontSize: 20 }}>lock</span>
                  </div>
                  <input className="block w-full pl-11 pr-4 py-3 bg-[#181411] border border-[#393028] rounded-lg text-sm text-white placeholder-[#584f48] focus:outline-none focus:ring-2 focus:ring-[#d47211]/50 focus:border-[#d47211] transition-all duration-200" placeholder="••••••••" type="password" />
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-[#d47211] hover:bg-[#c0650e] text-white text-sm font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-[#d47211]/20 transition-all transform active:scale-[0.98]" type="submit">
                <span>Iniciar Sesión</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;