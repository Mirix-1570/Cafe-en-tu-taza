import React from 'react';

function Properies() {
  const flavorItems = [
    { name: 'Fruity', img: 'AB6AXuDsbzb1BAJLDKcj_ujPLkDW8nFa9hf05NcUML456AEzmzE25hs9IFQBgfQ8SjB28S7yH0u-xTEv6VYQzY2d2CXhz5B8j_0BOr67L06EiDS7PQLeO1hI8BFxMR1Fjjze7touaEFWnLH3LA7L-mgf2foEfgohiEZnRiHbz6ZwbVDG20Bs6mIRP6M7abFctugy-SEVm3h0CdSNqD8oI7yV54zbp1q2YRKtKphh31WIrmWRw9AXI_3f_2fU8IDcYlM5HNu0TlMJ3kPh5BQ' },
    { name: 'Floral', img: 'AB6AXuCJFQ3DyQ5jfCVX5lq1JhMCxXUc20oF7oxg_NvlyqMljgT-aoOoWE0jzvnZU875R4xpmml_UdZq8ZrGm-9dY1skxCE85cFeq1f5tZqJfWV65dYuXSEeY5MV-coTHjaPpFVZf6IcD22HkhlFykomd30t3l7BsrgkKYv84orsswha-0mYUNVNru5JKRwfdjpBpZJLQdqqjx1RKDElfnGl_8l0CD9ZeLUUs00PcxwYc1p_1-yA_XSWWeTNF87xtDdL1wREtUDUEBhsthU' },
    { name: 'Nutty', img: 'AB6AXuDbxItrQP7bo-FFIQmcg96YULjtIOuUB9FDE3YEykY-40H0c8MOt2AsihW9T7QqUY7WWFNtwYsPoDzbC_STfuwjre1T3M_GuIFSWonzbBTNKUmcypLpnbx1Xyi2IIhUWtbnptqAAL759_xqtwNC6yePc2AemZWveEdXLG0bSzzFvfZyjX9najlbz-RHvNNuqsk3NOjEqj60WjB5FF1ez1llJdkqhH1VARPHN9v79C-A5Ld2_i_uojccCERgJt043riYgDpWiJt2pio' },
    { name: 'Chocolatey', img: 'AB6AXuCIid8IbySGoh0-T79kYesgwa3mKogL9PxHbWhydN2knZAeImet1fwaQ0UTICSVSRqKhvkwJAu1IznT_jWm_otRTRdljQu6tBlpllvMyB1ba8adqoYe0lESCeVnBPz1hPv7QuHfqdFiJn_C_nNpSEk_9vOM5pfS7nRRXNFKE_luNu6YG7-PAYI5xYmLJuNDkgpkeSHzRCC2JpzZmyQn5RkGD7NgZNfQ-_5hc5PuxjK_7qyh94kO2vPisrqz_VCa2mZroGuS-kfvw6g' },
    { name: 'Spicy', img: 'AB6AXuCdDha_eDgekgm89FfgGvP6HziBjG-sC_VV6n6Q70WSmGDZxiNjdg2hKFWXUQoQPVFAscRZc2V64ZrdLrRbu7G9LQnAwORq5LYAjaDM-7a1XYavbvNYhKmWWqDXqWBV1qhiggNhBiWrPb82jlzLNlV1WHMFO2WxsPXZOTBMTCX_RHfxQXQqY0CqP6fe4leCLg3FdlRV2xrm3i6KDcD6qUlv4WRcn3uMh3stXD8zDuFiKODgun-PZU2YOoR6wQGww7dTRHivk5bBJrk' },
  ];

  const brewItems = [
    { name: 'Drip Coffee', img: 'AB6AXuAgyAnId9w1IZk-r4SARSNkWC4xPeqNjRUoPg744wF3XYOWRW1bmo2M7znaQJWzgVeQZWlHs4vILrFzCK3anH8FujEs0zPoy40lMsGuz-U6M7_2xGXZ20pgjwISuTIIP2Pjt3rqP4t8wujUCFjSI3fMj8vwPAwM9FlVGorYOTguqDpuy06nWg2_yzcSwyCSgC2vWfUUd2JeL66sDg5SOmasNRZ_NUhX6qk8BOYmDxLCAGRktSj-y53D11MTFtDr161woagHbC7dXro' },
    { name: 'French Press', img: 'AB6AXuBnBgku68obhtjpujPe4_p67ZieABZ4QeebFa3DdXoIO2NvaybSwwXead5_A9KczO2TDef4oPTsAz3ydESFfgazJTnDx29QzuGehJ_cvwYtokWLcdvU2ooeAsQGDm4L9uz5cC-fzzjE1uL3Y0q1vxafWSX6QPUUiMLOUhNIT5t2GCVvoSrCL8RLVPzq8sZMFxPmkg3JipJlkxp4a2pQI-yYPmuf3-dbf7O7FzfwPBspZjmfGeO0ECbWyn-7LPJ8KM7DmrNQE6JLyk0' },
    { name: 'Pour-Over', img: 'AB6AXuCxLeFzruTMrrIIxBc4pJB5DWRF50Njjpa1AipuyCFun3LvaF-DEiEuwTWNJx89P9bfGn8aDktBHnAZQNDTje0pUsLUZo4QrU-eChJcOmRmpKHyjVT_fwtGoNw38jarZlBg5oYSG3zQI6arHowQxvQ2jG_Ig85wjd9-1d_vwzEhra5wWf57HrlDvZjcFrWNWVvzGxlro8hUM1N9J6RzepiXB_jml42ClFpvgEmmkDKs3DqkOPglmD2BOBCJ2XdUu3lXo4wxQiYn9Kg' },
    { name: 'Espresso', img: 'AB6AXuDi-ojmQI5RtanbAQYQ9fSzSy3pJqzn9P2z0YYThfelqQ3G-TvZB28QmFDV5UvOAps0er1jA4m1opJ38zqLyzZF7nGsTmvW6eaWTMZmEPWlvSM9fL6pIKEoYLKmTkklb1dDYwYl98d8YjOspHWm3SusZUBeBI3dr0dCyLQboz1C0pIN3XUX98GzB92pSkTSB_D5DbEfhU3-_LEeQm5BINgBVcF8WVfhbGiuupK2Jed0ENpRTrKRvsnVdLakkaoAp_CnPJDLuL4Y1J4' },
    { name: 'Cold Brew', img: 'AB6AXuBFhWdz0gxGt85hQvFoyKfZs-2GaVDNhoypsRarDqiVkUOeklXDEqv9zsbgsfBOZcYmrizUmhv_LRcl7GdiP5sfMDRVGqQwSkhw0q6h6zO05FZ0dNOiqTRP0wL1DSGLDtu-u_GdvJbTasGe6S1cchZG11ucOVj0zal4H0S4CrEl3rMlenAzN7PSifVgi3cgAidmw-H8NUsDFLYzuREVKriUXrPruWe__Rxox4-dO6382cxZ_kM7_h6U0m-EdKmTRhbYZmbj5j3Bm48' },
  ];

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Coffee Bean Types and Brewing Methods</p>
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Understanding Coffee Bean Types</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Coffee beans come from various species of coffee plants, each with unique characteristics. The two most common types are Arabica and Robusta. Arabica beans are known
              for their smooth, aromatic flavor and lower caffeine content, while Robusta beans have a stronger, more bitter taste and higher caffeine levels.
            </p>

            <div className="flex w-full grow bg-[#221a11] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#221a11] @[480px]:gap-2 aspect-[3/2] rounded-lg grid grid-cols-[2fr_1fr_1fr]">
                <div className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqZnXSNX3lS00n9f9C5QySnHX8VoJDFpMRXoHc05aP-kV74AwY7uSpIUfRlL8tqhxYuRRSC0oLaIlOjOd5zCVHdWAx0SVdEa6fXP0cwmcmcR0CI2EglcjtU_gbGEzaFd-t2CV1glDE_iLp9JrXMCROIDCLgS2MlxDPmruI7jPelh8bOlawBkhgF70xKtcuhuYzDryiEsRht-Ue8RRd09UIvK0n_-4YNnSIu21ylu7QyW8qSwydhM4l_aTJwjFArQsCVkSAKqg6-Is")' }}
                />
                <div className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2 row-span-2"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKrh8g_8Xr7KTA5WXZGSqTOVJNJf2qlwLJyppDU__MQnpZzMlcSSS6BVDLcwtOq5ZfbGLbA2WbFRUpf4Azd-h9MDEu_inNpdXV6WQvXEKdISysxtz9_oYKqIcvDE7Soi_5qOJI5UNiZ9KDdB6CX7SRmpDVLwu1McCwTIEFAyTt061PcVRwlhv_HZKlXJfZq269T6SNLu_jzzwxf7W52dDfJKpw4jwDiguvKmnGsMq1rNQSbQETZPMVSH-SD5wITKgWEuMTB36H25o")' }}
                />
              </div>
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Flavor Profiles</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              The flavor of coffee is influenced by factors such as bean type, origin, processing, and roasting. Common flavor notes include fruity, floral, nutty, chocolatey, and spicy.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {flavorItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/${item.img}")` }}
                  />
                  <p className="text-white text-base font-medium leading-normal">{item.name}</p>
                </div>
              ))}
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Brewing Methods</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Different brewing methods extract flavors differently, resulting in unique coffee experiences. 
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {brewItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/${item.img}")` }}
                  />
                  <p className="text-white text-base font-medium leading-normal">{item.name}</p>
                </div>
              ))}
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Key Concepts</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              {[
                { term: 'Acidity', def: 'Refers to the brightness or liveliness of the coffee, often described as citrusy or tart.' },
                { term: 'Body', def: 'Describes the weight and texture of the coffee in your mouth, ranging from light to full-bodied.' },
                { term: 'Aroma', def: 'The scent of the coffee, which can include a wide range of notes such as floral, fruity, or nutty.' },
              ].map((item) => (
                <div key={item.term} className="col-span-2 grid grid-cols-subgrid border-t border-t-[#674d32] py-5">
                  <p className="text-[#c9ad92] text-sm font-normal leading-normal">{item.term}</p>
                  <p className="text-white text-sm font-normal leading-normal">{item.def}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properies;