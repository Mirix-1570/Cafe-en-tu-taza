import React from 'react'

function Shop() {
  return (
        <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Tienda</p></div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#483623] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Café</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#483623] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Mercado</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#483623] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Equipo</p>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Filtrar</h3>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#674d32] bg-[#332619] focus:border-[#674d32] h-14 bg-[image:--select-button-svg] placeholder:text-[#c9ad92] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Grano</option>
                  <option value="two">Molido</option>
                  <option value="three">Fruto</option>
                </select>
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#674d32] bg-[#332619] focus:border-[#674d32] h-14 bg-[image:--select-button-svg] placeholder:text-[#c9ad92] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Occidental</option>
                  <option value="two">Oriental</option>
                  <option value="three">Americano</option>
                </select>
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#674d32] bg-[#332619] focus:border-[#674d32] h-14 bg-[image:--select-button-svg] placeholder:text-[#c9ad92] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Claro</option>
                  <option value="two">Medio</option>
                  <option value="three">Oscuro</option>
                </select>
              </label>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-JOETPqkDKVu36KKc4nS_zGYHPCHdwl8y87NiY7tRxRvZ5tSbtb2kMfkHI7iWH5_tN_bhXQKXRHt9xyawFCaZE9BBdEcp0HJJ3lIyFhXqhwjZ7HsNqUT84n9pq10q0-wD0hLq8JXJE-GNlXZEtgX1AdH9k5m7XWBI--B5I3-2GphaaumMa2conLdvHK9UJh1B-mo4zGZT0oeGJtCg2AwYeOkRDm-34Mqbdzt4_poxMTZra8NDdQVBEOMKRAvASmhI9Cf7aztqTYo")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Ethiopian Yirgacheffe</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Floral, citrico, acidez media</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbXHUCtTVRwTWP1jgiBQNiGd-q7YBh-6pJslTffMdYC9AJKa2lbTwR7idjyZHlbg1LJHM_1Q-lODubS81d-HSwltZ7a5_jhe_MrJSgekwBPqZOJRPw_ahqxmYvh0PLU6k9jMeM8EkmjhEkvQ7SPrdl5Y18CpHwOFbgzdT9B9E1wkj27yjNPHOYpZZIcBSo_oG8ZuM_aWuHygsXm8sya_FYijIg4-Q6u78oiLVZqzZsZlsVpnwaXJTVUKiHrZumjfzjfrPSPDF13xo")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Supremo Colombiano</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Balanceado, cuerpo medio</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6aEc5q_TgwpcE2OhFrVvc_KfWKXbrGZfsR183OG1peXUfGlUK6KnKutLZ6j9fYLoFLj6xQssFm_X9RhT0y-G7droyJ1OFnP4MoqEHqkmrLG4uIZrSHdK6mcFcRGPBZnMgxfW0vzfHbKQCUj7bV9XHZu7f6e092zLaIHrJjihpb3owWG3G_7cMVzOa4BMiBlgJ6H0eFNqgYKmtb3O_KAr01OQf-8TfAuB_JTKhfuLO-7EzERPXMdGxadhQXCZxMsKQh4bybAaxriw")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Antigua Guatemala</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Chocolate, fruto, suave</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzJxHFR6eDLYijrK8NwEkaH_lTNF7p2UniA0Yfdy0Ct2cPfcv8JV_j1fN0ueo-ehJbZ26WDiZvfQKLkDXwRreW42uQ0r-qpCa_ar_7IW6pownjdhLhMwwSRgTu1KgWbPJvWeAaWe0jPfATheIPgi4DNNYY0fuQ98MQGj5aj7a4kEQss_7RcqfVq2YizmdpSw58B-9Gd_E2nyuxbZ3zVfPJKE89fPss-CO2XU082AGXJAuziVzVVkiphNi3M8uD4cnoKrKMv-ZPPPM")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">AA de Kenya</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Complejo, rico sabor</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFwKOrOLdZ63JsJ_9XGSTZNv4CV3QJlMu1ko1Y_0QgSCAvV3R-AepxrIGx0T5SlgEhjyZByzpTeuKD3T3cKfMNl0b13W4YFmgMuLYdaPVorSlmoTQJmoYwh5k-fSmobPdUbDcad8Dzfld-doP3JuRikDGCKZoeqk6uXcPEoIrnTLkJfPGCYNHoiCnyPJ1mUd64Ptzk1ccRzJc_znLde0waNlzqKMf5JmbjG_0c8qDMoRXLxHf7w_gIJNDThNlw15c5uAcR6YFaFJw")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Sumatran Mandheling</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Tierra, picante, baja acidez</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4CK2OEJzQCS7dHJETaaaFYPsKOhupgOc2RRO3ydiDt7obWdTEkqwlukLz48fPJ91DDPngz3Ur1MNWMnse64_3SF6BJQmYmxK_iVJBQXqTIKoxo8suyMuhs6XswkJmQW69kh7fi7NU1oZK4dniSTUmh0hMwou2CnTPVCmI6pMoVQ_U4dK3YSknxH-js4OT1MelOOvaKF7ACrYoGW9gX18Zzqnp9y04Ec8RPFAq_dy2Drq1JToSAljGpaMohR3IQW-b1gY36aLhg5A")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Tarrazu de Costa Rica</p>
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">Limpio, rico sabor, cuerpo medio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop