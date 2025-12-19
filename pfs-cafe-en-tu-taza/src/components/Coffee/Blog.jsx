import React, { useState } from 'react'

function Blog() {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Manejador para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log('Término de búsqueda:', e.target.value);
  };

  return (
       <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col ">
        {/* Padding responsivo */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Blog</p></div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div
                    className="text-[#c9ad92] flex border-none bg-[#483623] items-center justify-center pl-4 rounded-l-lg border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search articles"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#483623] focus:border-none h-full placeholder:text-[#c9ad92] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={searchTerm} // Ahora es un componente controlado
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6qYIpwQAKGxBeOuq0XLvSFPlV-QBg0jgs7r5Le1zRdbtaG_WX-ogIqBXIWdk5pYWn9uT_najnpz8mLPvwrmkEtgyMR-8GK-t6A4eu9ExjxwkAbSgNd8Ely3zOMbnp5dX7hz6KY9rJ0lfw-Zxm9XwoHg3xXebJL2FjGplHuIHKyLD_yg1K95DFu3zxK5E_akPSBMVlipwFQtL717CDaZaTFPfCGNK6vtrG5kgpbdpiqaeAY4vNUDXaztmXtt-6ItvDAS3RZwintHk")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">El Pour-Over Perfecto</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Paso a paso para preparar el café pour-over perfecto en casa.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHUe-sKG5HOOEJn3bWQzjwYh7YhbTv-xYiYAV-acVvGtD_mzNYLgg4i1bCBBAn2ESI95dU8C9984-s4wrkTBhadKbsidG6uiOnZTif88PPSmn5ehce-JKPX-My3UUEF8sm4rADuvpjoh9Q6ZxyTkfQcOM8s-NiuhO19YB_IdZW_Z3vZoZu5-mYAUlTc2NbtGLg4dnILlI_GQ78INIb9WP31YhfLywFE-IAlXe2O3fC5FCHHTtmR0Fxcdw3TMBzGmWB5G76srQgQHI")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Master de arte espresso</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Domina el arte de preparar espresso con nuestros consejos expertos y técnicas.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANnGNmDV7srQTIPJDPMbbF-UCYeQ9o2xWncfcQXRkbT9z3WD9aAWFsfFUn0LEdqjaH5-Y5_ombhG91KKXLc0bVh1xopnIl-lHiVyJUmLnv9qMCHJ-LK9zLC0cBvn-f8sJUOdyQMw9oj0IYsJaip7r9VlV41m3SNvEjm_JJPNUfiFZeXqc48_TwD6MBwb3chClPaHjsnyVDFa4QFL-kCe_HbLO46nuUVdEDDUNdjpHMn2_Cxlp5BVmoCiIELS2ilNwl5cNXEHgKqmE")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Arte de latte art</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Aprende a crear hermosos diseños de latte art y sorprende a tus amigos.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtd8gyA1AS94W3kz20oicpb1bkUhRrzjxT1xHBjiQRJCyOMLbVEB1wZ2uex7BqZf2VjDeGrgfDCcoiH3mYQBcJ62SqReGFo9sCeN3FnsOkGz8qVnkj8hNiUzQTWWrU5MTlQwkQ-VBvz0A9iYs2gE3t6pIlzcz67rTJybi1v2wsadhipiXsVP7lRwkkQ5u6ZGxOnix9TP6YNYLoqBBgPvdiLIv0OL-ms2NSnc0Bhym6-qB33znJKpt-2JjJHDG6y8aBd4TDAHZsN0Q")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Orígenes de los granos de café</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Explora los fascinantes orígenes de los granos de café de todo el mundo.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-MTu73S6J9PbO9l5IpgCsMVW78yzr-tDnAxgZx_GZjP5vWcPX1qHSKgnEHZ8C4sgVqaAF4XlUFo2apPp_6Ezb2g_XKjjbGdS35WxDXKmfUE45_G-2LUrm-xs7rAxcvsV3kZC6FuCMX-gxglmDFT8yDInbNiwEZqaL16wINn9laYeV1t5AqD_S4kHXvW3GnSj1GZ0V1nbGKOjlfJPWFU4PipWQJgok3WDizO8aHBeuDZlIG5ei9tTD3ONj48JSUYQtOTPo5JAiuXU")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Café Frío Perfecto</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Descubre los secretos para preparar un café frío delicioso y refrescante.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAF8At_v_B_EaGuBeLs_-KcjiYdzVd-RdimORHU1u34c8WG_hP1XPTvu1_qdr3dE8JJotBEw88vy4OoqFeEELoDsfssuflhlj_XbTlcQXt3lE7A2SiwE-2X1LiLOTysfqMMBVrYgLpJR5vCxjSwjT7DRiAR9UaGox5fwq9tuA1JOtHPyP_BNzl0QgM_P_nGmMdc_fEITLzrx0pxfWUIUIDrLkUuFxbMiZ8VGTWOHbx--5X9jHzeSViE0JUZB-DMXnCwDwF_7rBiios")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Café y Salud</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Descubre los beneficios para la salud del café y cómo puede mejorar tu bienestar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog