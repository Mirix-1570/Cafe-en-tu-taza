import React from 'react'

function Properies() {
  return (
     <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Tipos de granos de cafe y métodos de preparación</p>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Entendiendo los granos de café</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Los granos de café se clasifican en varias variedades, siendo las más comunes Arábica y Robusta. Los granos Arábica son conocidos por su sabor suave y aromático, mientras que los granos Robusta tienen un sabor más fuerte y contienen más cafeína. La elección del grano afecta significativamente el perfil de sabor de la bebida final.
            </p>
            <div className="flex w-full grow bg-[#221a11] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#221a11] @[480px]:gap-2 aspect-[3/2] rounded-lg grid grid-cols-[2fr_1fr_1fr]">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqZnXSNX3lS00n9f9C5QySnHX8VoJDFpMRXoHc05aP-kV74AwY7uSpIUfRlL8tqhxYuRRSC0oLaIlOjOd5zCVHdWAx0SVdEa6fXP0cwmcmcR0CI2EglcjtU_gbGEzaFd-t2CV1glDE_iLp9JrXMCROIDCLgS2MlxDPmruI7jPelh8bOlawBkhgF70xKtcuhuYzDryiEsRht-Ue8RRd09UIvK0n_-4YNnSIu21ylu7QyW8qSwydhM4l_aTJwjFArQsCVkSAKqg6-Is")' }}
                ></div>
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2 row-span-2"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKrh8g_8Xr7KTA5WXZGSqTOVJNJf2qlwLJyppDU__MQnpZzMlcSSS6BVDLcwtOq5ZfbGLbA2WbFRUpf4Azd-h9MDEu_inNpdXV6WQvXEKdISysxtz9_oYKqIcvDE7Soi_5qOJI5UNiZ9KDdB6CX7SRmpDVLwu1McCwTIEFAyTt061PcVRwlhv_HZKlXJfZq269T6SNLu_jzzwxf7W52dDfJKpw4jwDiguvKmnGsMq1rNQSbQETZPMVSH-SD5wITKgWEuMTB36H25o")' }}
                ></div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Perfiles de sabor</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              El sabor del café está influenciado por factores como el tipo de grano, el origen, el procesamiento y el tueste. Notas de sabor comunes incluyen frutales, florales, nuez, chocolate y picantes. Comprender estos perfiles puede ayudarte a elegir un café que se adapte a tus preferencias.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsbzb1BAJLDKcj_ujPLkDW8nFa9hf05NcUML456AEzmzE25hs9IFQBgfQ8SjB28S7yH0u-xTEv6VYQzY2d2CXhz5B8j_0BOr67L06EiDS7PQLeO1hI8BFxMR1Fjjze7touaEFWnLH3LA7L-mgf2foEfgohiEZnRiHbz6ZwbVDG20Bs6mIRP6M7abFctugy-SEVm3h0CdSNqD8oI7yV54zbp1q2YRKtKphh31WIrmWRw9AXI_3f_2fU8IDcYlM5HNu0TlMJ3kPh5BQ")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Frutal</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJFQ3DyQ5jfCVX5lq1JhMCxXUc20oF7oxg_NvlyqMljgT-aoOoWE0jzvnZU875R4xpmml_UdZq8ZrGm-9dY1skxCE85cFeq1f5tZqJfWV65dYuXSEeY5MV-coTHjaPpFVZf6IcD22HkhlFykomd30t3l7BsrgkKYv84orsswha-0mYUNVNru5JKRwfdjpBpZJLQdqqjx1RKDElfnGl_8l0CD9ZeLUUs00PcxwYc1p_1-yA_XSWWeTNF87xtDdL1wREtUDUEBhsthU")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Floral</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbxItrQP7bo-FFIQmcg96YULjtIOuUB9FDE3YEykY-40H0c8MOt2AsihW9T7QqUY7WWFNtwYsPoDzbC_STfuwjre1T3M_GuIFSWonzbBTNKUmcypLpnbx1Xyi2IIhUWtbnptqAAL759_xqtwNC6yePc2AemZWveEdXLG0bSzzFvfZyjX9najlbz-RHvNNuqsk3NOjEqj60WjB5FF1ez1llJdkqhH1VARPHN9v79C-A5Ld2_i_uojccCERgJt043riYgDpWiJt2pio")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Nuez</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIid8IbySGoh0-T79kYesgwa3mKogL9PxHbWhydN2knZAeImet1fwaQ0UTICSVSRqKhvkwJAu1IznT_jWm_otRTRdljQu6tBlpllvMyB1ba8adqoYe0lESCeVnBPz1hPv7QuHfqdFiJn_C_nNpSEk_9vOM5pfS7nRRXNFKE_luNu6YG7-PAYI5xYmLJuNDkgpkeSHzRCC2JpzZmyQn5RkGD7NgZNfQ-_5hc5PuxjK_7qyh94kO2vPisrqz_VCa2mZroGuS-kfvw6g")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Chocolate</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdDha_eDgekgm89FfgGvP6HziBjG-sC_VV6n6Q70WSmGDZxiNjdg2hKFWXUQoQPVFAscRZc2V64ZrdLrRbu7G9LQnAwORq5LYAjaDM-7a1XYavbvNYhKmWWqDXqWBV1qhiggNhBiWrPb82jlzLNlV1WHMFO2WxsPXZOTBMTCX_RHfxQXQqY0CqP6fe4leCLg3FdlRV2xrm3i6KDcD6qUlv4WRcn3uMh3stXD8zDuFiKODgun-PZU2YOoR6wQGww7dTRHivk5bBJrk")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Picante</p>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Métodos de preparación</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Diferentes métodos de preparación extraen sabores de manera distinta, resultando en experiencias únicas de café. Métodos populares incluyen café filtrado, prensa francesa, pour-over, espresso y cold brew. Cada método requiere tamaños específicos de molienda y tiempos de preparación para lograr resultados óptimos.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgyAnId9w1IZk-r4SARSNkWC4xPeqNjRUoPg744wF3XYOWRW1bmo2M7znaQJWzgVeQZWlHs4vILrFzCK3anH8FujEs0zPoy40lMsGuz-U6M7_2xGXZ20pgjwISuTIIP2Pjt3rqP4t8wujUCFjSI3fMj8vwPAwM9FlVGorYOTguqDpuy06nWg2_yzcSwyCSgC2vWfUUd2JeL66sDg5SOmasNRZ_NUhX6qk8BOYmDxLCAGRktSj-y53D11MTFtDr161woagHbC7dXro")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Café filtrado</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnBgku68obhtjpujPe4_p67ZieABZ4QeebFa3DdXoIO2NvaybSwwXead5_A9KczO2TDef4oPTsAz3ydESFfgazJTnDx29QzuGehJ_cvwYtokWLcdvU2ooeAsQGDm4L9uz5cC-fzzjE1uL3Y0q1vxafWSX6QPUUiMLOUhNIT5t2GCVvoSrCL8RLVPzq8sZMFxPmkg3JipJlkxp4a2pQI-yYPmuf3-dbf7O7FzfwPBspZjmfGeO0ECbWyn-7LPJ8KM7DmrNQE6JLyk0")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Prensa francesa</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxLeFzruTMrrIIxBc4pJB5DWRF50Njjpa1AipuyCFun3LvaF-DEiEuwTWNJx89P9bfGn8aDktBHnAZQNDTje0pUsLUZo4QrU-eChJcOmRmpKHyjVT_fwtGoNw38jarZlBg5oYSG3zQI6arHowQxvQ2jG_Ig85wjd9-1d_vwzEhra5wWf57HrlDvZjcFrWNWVvzGxlro8hUM1N9J6RzepiXB_jml42ClFpvgEmmkDKs3DqkOPglmD2BOBCJ2XdUu3lXo4wxQiYn9Kg")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Pour-Over</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDi-ojmQI5RtanbAQYQ9fSzSy3pJqzn9P2z0YYThfelqQ3G-TvZB28QmFDV5UvOAps0er1jA4m1opJ38zqLyzZF7nGsTmvW6eaWTMZmEPWlvSM9fL6pIKEoYLKmTkklb1dDYwYl98d8YjOspHWm3SusZUBeBI3dr0dCyLQboz1C0pIN3XUX98GzB92pSkTSB_D5DbEfhU3-_LEeQm5BINgBVcF8WVfhbGiuupK2Jed0ENpRTrKRvsnVdLakkaoAp_CnPJDLuL4Y1J4")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Espresso</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFhWdz0gxGt85hQvFoyKfZs-2GaVDNhoypsRarDqiVkUOeklXDEqv9zsbgsfBOZcYmrizUmhv_LRcl7GdiP5sfMDRVGqQwSkhw0q6h6zO05FZ0dNOiqTRP0wL1DSGLDtu-u_GdvJbTasGe6S1cchZG11ucOVj0zal4H0S4CrEl3rMlenAzN7PSifVgi3cgAidmw-H8NUsDFLYzuREVKriUXrPruWe__Rxox4-dO6382cxZ_kM7_h6U0m-EdKmTRhbYZmbj5j3Bm48")' }}
                ></div>
                <p className="text-white text-base font-medium leading-normal">Café frío</p>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Conceptos Clave</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#674d32] py-5">
                <p className="text-[#c9ad92] text-sm font-normal leading-normal">Acidez</p>
                <p className="text-white text-sm font-normal leading-normal">Referencia a la intensidad y sabor ácido del café, que puede variar desde suave hasta intenso.</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#674d32] py-5">
                <p className="text-[#c9ad92] text-sm font-normal leading-normal">Cuerpo</p>
                <p className="text-white text-sm font-normal leading-normal">Describe el peso y textura del café en la boca, que puede ir desde ligero hasta completo.</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#674d32] py-5">
                <p className="text-[#c9ad92] text-sm font-normal leading-normal">Aroma</p>
                <p className="text-white text-sm font-normal leading-normal">El aroma del café, que puede incluir una amplia gama de notas como florales, frutales o nueces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properies