// Importa el hook `useRef` de React para crear referencias a elementos del DOM.
import { useRef } from "react";
// Importa los componentes reutilizables del Footer y la Barra de Navegación.
import Footer from "../../components/Everywere/Footer"
import NavBar from "../../components/Everywere/NavBar"

function Home() {
  // Crea una referencia (`ref`) que se asociará a la sección de "Tienda de café".
  const featuredCoffeesRef = useRef(null);

  // Función que se ejecuta al hacer clic en el botón "Comprar".
  // Utiliza la referencia para hacer un scroll suave hasta la sección de cafés destacados.
  const handleShopNowClick = () => {
    featuredCoffeesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Función de marcador de posición para manejar la navegación.
  // Actualmente, solo imprime en la consola. En una aplicación real, aquí iría la lógica de enrutamiento (ej. con React Router).
  const handleNavigation = (type, name) => {
    console.log(`Navegando a la página de ${type}: ${name}`);
  };

  return (
    <div>
      {/* Renderiza el componente de la barra de navegación en la parte superior de la página. */}
      <NavBar />
      {/* Contenedor principal de la página de inicio. */}
      <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col"></div> {/* Contenedor de layout, puede ser para espaciado o estructura. */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuByiS5BzLn4kf3nr4qxk-Gw0luz80bRDJr-5hpLo-oV3-YsVzg77QD8pnC3nGndOLqQZc3l5aLDn5xhIgzMQhlnsLPSwFkzSl2_omOR-aKww8gM6GyEjO83bvK5iC4JNiJJGQd3t8husn5AB5iYzm9y9lkYWLwWvtUufK5CBv0v-qrNS4CmMmbnqaAo6Aae8d4G1osIAZvVAklgH0oFfAdvgFPb1WV-dmUePuGL1GjB8cwVr2RN79uZODYwNBHe51HAyex8Og4u1aA")' }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    {/* Título principal del banner. */}
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Descubre el Arte del Café
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Desde el grano hasta la taza, vive la experiencia completa del café conmigo.
                    </h2>
                  </div>
                  {/* Botón "Comprar" que activa el scroll suave. */}
                  <button
                    onClick={handleShopNowClick}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#d47211] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Comprar</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Título de la sección "Tienda de café". La referencia `featuredCoffeesRef` se adjunta aquí. */}
            <h2 ref={featuredCoffeesRef} className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Tienda de café</h2>
            {/* Contenedor para la lista de cafés, con scroll horizontal. */}
            <div className="flex overflow-y-auto [-ms-scrollbar-img:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {/* Primer producto de café. */}
                <div
                  onClick={() => handleNavigation('café', 'Ethiopian Yirgacheffe')}
                  className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer transition-transform duration-200 hover:scale-105"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3ObU_qMHDCjRGw3AzgarvATmCk7k0hx-krNQLHweHCnRrE697unTsy1SAF1vzYe7YlsY_sVOb4XM9yAC4Vl0P-MuWx1YTx-E_MVssVSKav8MemuxuiKdwO0pqbNHiC36nuGWUVgpO0y1X1M9bpNuDEGUQOfuL0D7tBtfn1z8D2qwOrCumaT8Xnwe9bFxliKmyrd91qX0pov7bpVYF_ZEGIGwjv4ZqqYlRobIZoLn4iT56shdBU0SX5ZhGNniNwmQ3lDGLBCTJcHI")' }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Café Etiopio</p>
                    <p className="text-[#c9ad92] text-sm font-normal leading-normal">Un café ligero con notas florales y cítricas.</p>
                  </div>
                </div>
                {/* Segundo producto de café. */}
                <div
                  onClick={() => handleNavigation('café', 'Guatemalan Antigua')}
                  className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer transition-transform duration-200 hover:scale-105"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAONNI-fPDdElUA8FaFZ_bxcN-2aqRkmwPoZX717jmCyfNCRal0wKUDFfbQAZWNLAPrXjYOY9H_EpzAOvl2BjqRAcWo8-6prVvA6tPYF8sVJ8oqhR8xRI1PNANdPDjRh83mdhnxNAzppZ40DowY7SdR8qp07Iuu-_CxN_PxS5oUrlBcfXuYON296X8NqmvfOcd7rNxOpxQAyS9dFSe6-wTSepLFdLRKoVabiKDGSG9exD9Wn4yM30f61EImQc3pV6KF5R2FQNXi_E0")' }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Guatemala Antigua</p>
                    <p className="text-[#c9ad92] text-sm font-normal leading-normal">Un café equilibrado con sabores de chocolate y caramelo.</p>
                  </div>
                </div>
                {/* Tercer producto de café. */}
                <div
                  onClick={() => handleNavigation('café', 'Sumatran Mandheling')}
                  className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer transition-transform duration-200 hover:scale-105"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAY9BVQGz1qRC9rH4eBiAmi4St9Xfe0njpKmE6Q6TQTCnhw53x-8DnQ4X7ulgXAYb9yLRHNfvAiox4f2c78S4RpLfVdT4_FRn6x-zW5WMDBk380URvn_1bXGPGUMVLJcLtfM7i6J9uAwqZAVdwu2WNDyjUOhyHBJoK3I2HGKdIZRWPynOzsHo_c1OI_apzoekrruImzihJL8f7w0WWG6Uu2LCHoG5dNeoGqQN4AlyeZ7a1tW1sGlqy0OfhY791heV4Os8PXJGJzpiw")' }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Café Sumatráno</p>
                    <p className="text-[#c9ad92] text-sm font-normal leading-normal">Un café con cuerpo completo y notas terrosas y picantes.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Título de la sección del blog. */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Lo ultimo en el Blog</h2>
            {/* Contenedor de la cuadrícula (grid) para las entradas del blog. */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* Primera entrada del blog. */}
              <div
                onClick={() => handleNavigation('blog', 'Perfect Pour-Over Coffee')}
                className="flex flex-col gap-3 pb-3 cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMMNpxSwCp0IsTTGecVV3_ZZkZ1EezUNCIktFKwGjVqFcKX0H-re3cPIfHBHyB8YCpznhEfnM0PqtPHvxAT19W7_Yu25Khp3Rv_D00zLHS7IjPVNZIRQimx5oeil3y0qfilywbZxYAx4TqTPLseDAgWnNiAXHmkus669AJIscZYWEWfsxkIkb8jhTXFcIHqf3WPHMpYWk2qNmOBhJ2gaDhjcZLMzrZCMG4o0CLtYIDuaiM1n7Tk-hQgDdxTxYH6TVXjhhUdf6B1vs")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Un perfecto Pour-Over Coffee</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Maestra el arte del pour-over con nuestra guía paso a paso.</p>
                </div>
              </div>
              {/* Segunda entrada del blog. */}
              <div
                onClick={() => handleNavigation('blog', 'The Science of Coffee Roasting')}
                className="flex flex-col gap-3 pb-3 cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZZ6d4qC5t-vbCuCUm--zBACvZqLk1k1SdZ4wHLqyfcqjqINEJGVT0M9McvXlg2py_h86nKwTNvtGYzraN9u9urgzb1Bw3rHmmZpZr0U7AFfpoiQysuZeP70G5SzYbghha3VgeOXh0k603iVIKgIblRA9tXplge0Tjhd1nmi49bJpDXpkPAKlEPBvy0UiNrDTcomKFb0-dfdzMvVo31Y2dcN6eBRPZgWM7fS7eE3ejppMJBqh8M0OIN0YUsj7F2IZCf1_TE-Dz3EQ")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">La Ciencia del Tostado del Café</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Aprende sobre las reacciones químicas que crean los sabores únicos del café.</p>
                </div>
              </div>
              {/* Tercera entrada del blog. */}
              <div
                onClick={() => handleNavigation('blog', 'Coffee and Food Pairings')}
                className="flex flex-col gap-3 pb-3 cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjD3aDIwIj9AeKfTOhwVbsSVTC0B6eVIhr0xZ7Sl1bW8fmzx9JA38onLsRCOsyQc8MFkYoJgyty9QmirhFOAgJXh5gEZmFPu_Jvzh2ovOJNuEOtsn7lodetwfNAKl4BSTLE4h_vcmzK5bdnvma-6Oh6gMpGVYI6Wg3__ovOcRdaKuH1gX8ec6F8ERRJtiyp7oypXmrKMNu6rRfEMhyrDAyuhZU1CBOMVoNpXWe16AzsbiOpOpfCtMDgL7H_DTKHwUSL4ahXPDrCBE")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Parejas de Café y Comida</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Descubre las mejores combinaciones de comida para complementar tu café favorito.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Renderiza el componente del pie de página al final de la página. */}
      <Footer />
    </div>
  </div>
  )
}

export default Home;