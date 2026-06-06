import React from 'react';

const products = [
  { name: 'Ethiopian Yirgacheffe', desc: 'Floral, citrus, bright acidity', price: '$22.00', img: 'AB6AXuD-JOETPqkDKVu36KKc4nS_zGYHPCHdwl8y87NiY7tRxRvZ5tSbtb2kMfkHI7iWH5_tN_bhXQKXRHt9xyawFCaZE9BBdEcp0HJJ3lIyFhXqhwjZ7HsNqUT84n9pq10q0-wD0hLq8JXJE-GNlXZEtgX1AdH9k5m7XWBI--B5I3-2GphaaumMa2conLdvHK9UJh1B-mo4zGZT0oeGJtCg2AwYeOkRDm-34Mqbdzt4_poxMTZra8NDdQVBEOMKRAvASmhI9Cf7aztqTYo' },
  { name: 'Colombian Supremo', desc: 'Balanced, nutty, medium body', price: '$18.50', img: 'AB6AXuBbXHUCtTVRwTWP1jgiBQNiGd-q7YBh-6pJslTffMdYC9AJKa2lbTwR7idjyZHlbg1LJHM_1Q-lODubS81d-HSwltZ7a5_jhe_MrJSgekwBPqZOJRPw_ahqxmYvh0PLU6k9jMeM8EkmjhEkvQ7SPrdl5Y18CpHwOFbgzdT9B9E1wkj27yjNPHOYpZZIcBSo_oG8ZuM_aWuHygsXm8sya_FYijIg4-Q6u78oiLVZqzZsZlsVpnwaXJTVUKiHrZumjfzjfrPSPDF13xo' },
  { name: 'Guatemalan Antigua', desc: 'Chocolate, full-bodied, smooth', price: '$20.00', img: 'AB6AXuC6aEc5q_TgwpcE2OhFrVvc_KfWKXbrGZfsR183OG1peXUfGlUK6KnKutLZ6j9fYLoFLj6xQssFm_X9RhT0y-G7droyJ1OFnP4MoqEHqkmrLG4uIZrSHdK6mcFcRGPBZnMgxfW0vzfHbKQCUj7bV9XHZu7f6e092zLaIHrJjihpb3owWG3G_7cMVzOa4BMiBlgJ6H0eFNqgYKmtb3O_KAr01OQf-8TfAuB_JTKhfuLO-7EzERPXMdGxadhQXCZxMsKQh4bybAaxriw' },
  { name: 'Kenyan AA', desc: 'Black currant, complex, rich', price: '$24.00', img: 'AB6AXuCzJxHFR6eDLYijrK8NwEkaH_lTNF7p2UniA0Yfdy0Ct2cPfcv8JV_j1fN0ueo-ehJbZ26WDiZvfQKLkDXwRreW42uQ0r-qpCa_ar_7IW6pownjdhLhMwwSRgTu1KgWbPJvWeAaWe0jPfATheIPgi4DNNYY0fuQ98MQGj5aj7a4kEQss_7RcqfVq2YizmdpSw58B-9Gd_E2nyuxbZ3zVfPJKE89fPss-CO2XU082AGXJAuziVzVVkiphNi3M8uD4cnoKrKMv-ZPPPM' },
  { name: 'Sumatran Mandheling', desc: 'Earthy, spicy, low acidity', price: '$21.00', img: 'AB6AXuAFwKOrOLdZ63JsJ_9XGSTZNv4CV3QJlMu1ko1Y_0QgSCAvV3R-AepxrIGx0T5SlgEhjyZByzpTeuKD3T3cKfMNl0b13W4YFmgMuLYdaPVorSlmoTQJmoYwh5k-fSmobPdUbDcad8Dzfld-doP3JuRikDGCKZoeqk6uXcPEoIrnTLkJfPGCYNHoiCnyPJ1mUd64Ptzk1ccRzJc_znLde0waNlzqKMf5JmbjG_0c8qDMoRXLxHf7w_gIJNDThNlw15c5uAcR6YFaFJw' },
  { name: 'Costa Rican Tarrazu', desc: 'Bright, citrusy, clean', price: '$19.50', img: 'AB6AXuB4CK2OEJzQCS7dHJETaaaFYPsKOhupgOc2RRO3ydiDt7obWdTEkqwlukLz48fPJ91DDPngz3Ur1MNWMnse64_3SF6BJQmYmxK_iVJBQXqTIKoxo8suyMuhs6XswkJmQW69kh7fi7NU1oZK4dniSTUmh0hMwou2CnTPVCmI6pMoVQ_U4dK3YSknxH-js4OT1MelOOvaKF7ACrYoGW9gX18Zzqnp9y04Ec8RPFAq_dy2Drq1JToSAljGpaMohR3IQW-b1gY36aLhg5A' },
];

function Shop() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Shop</p>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {['Coffee', 'Merchandise', 'Equipment'].map((cat) => (
                <div key={cat} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#483623] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">{cat}</p>
                </div>
              ))}
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Filter</h3>
            {['Coffee Type', 'Origin', 'Roast Level'].map((filter) => (
              <div key={filter} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#674d32] bg-[#332619] focus:border-[#674d32] h-14 placeholder:text-[#c9ad92] p-[15px] text-base font-normal leading-normal">
                    <option value="">{filter}</option>
                    <option value="one">Option 1</option>
                    <option value="two">Option 2</option>
                    <option value="three">Option 3</option>
                  </select>
                </label>
              </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              {products.map((product) => (
                <div key={product.name} className="group flex flex-col rounded-xl border border-[#e6e0db]/20 bg-[#2d2217] p-4 transition-shadow hover:shadow-lg">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/${product.img}")` }}>
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
                  </div>
                  <div className="mt-4 flex flex-1 flex-col justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{product.name}</h3>
                      <p className="mt-1 text-sm text-[#c9ad92]">{product.desc}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">{product.price}</span>
                      <button className="flex items-center gap-2 rounded-full bg-[#d47211] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#c0650e]">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center p-4 pt-8">
              <div className="flex items-center gap-1">
                <button className="flex size-10 items-center justify-center text-white hover:bg-[#483623] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                  </svg>
                </button>
                {[1, 2, 3, 4].map((page) => (
                  <button key={page} className={`text-sm flex size-10 items-center justify-center text-white rounded-full ${page === 1 ? 'bg-[#483623] font-bold' : 'font-normal hover:bg-[#483623]'}`}>
                    {page}
                  </button>
                ))}
                <button className="flex size-10 items-center justify-center text-white hover:bg-[#483623] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;