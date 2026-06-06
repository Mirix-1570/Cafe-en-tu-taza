import React from 'react';

const producers = [
  {
    name: 'Elena Rodriguez',
    desc: 'Elena Rodriguez, a third-generation coffee farmer, cultivates her family\'s legacy with sustainable practices in the highlands of Costa Rica.',
    img: 'AB6AXuCX9eNVDnNzSmYHR57jMR7b3BHXqOHT7PgUdFSZT8quDD4n89e7GbsHuhvzOVL9le-jJYmxjF_vrQW5HPidhf1Z8q1dUQ0xubfyozB2gUElgBWQKTcKHuEpF6W3OSaKCSgkyelonwmXFvmTQhdzWXTNpDHe6Ln2K4J-58kLPHArGv65CXFvV-5Fx-ayHucBm4q4pLkWnYUIczaJCYF_gvdjPkjlT-tNQfpnZd9HR1rHv-WaPQAZ6hPAPSxgo2g4p714xu5bWONCi7M',
  },
  {
    name: 'Ricardo Silva',
    desc: 'Ricardo Silva, a visionary in coffee processing, experiments with fermentation techniques to unlock unique flavor profiles in his Brazilian beans.',
    img: 'AB6AXuDaydHY3b32CN0Xj9UpXYhNpfJR8rb3w8HUAUoholm3Y-ZMwz9SdVZFXkAmeEXSA8cOGtKpXKOfdtwDvv42yTOJYMX3Q13XwZ1FjaVbmMZ1NAglkNPxEnCIia9RM-NGtBJ2QmM1zNVtpiBHgk-QxerVVPLGDRyZKKx-DMtvN9aRs1mq23ScKfiN1KNOZG2jD5Z3S4d2hLRJBYhPbS3ISb8W2aQp8CbTjBRUecUOMWmqx5Fr-z5w07GAf04ZIYrDy1ZCF5h5_FgrNpM',
  },
  {
    name: 'Isabella Rossi',
    desc: 'Isabella Rossi, a pioneer in organic farming, champions biodiversity on her Italian estate, producing exceptional coffee while preserving the environment.',
    img: 'AB6AXuAQ1Q2CluFRyPl4md1w-2kr3WvnxxZsdrt1NHYTHMSG_FLd49imQf2jd8NuqucwA9Vy_a5rezjRaUReXubHL9hie150SSwTYFchII7QvNl-EFohMY68rSbQ5dx55aV-fRyrc-pQ3LBuXbvtONdTkNjqAQZjhODCF7FHv6tmrNdmB25qg9satRX_e2atEk175Rupoaa5zo7h2XfU7fDIKMqL9KpdMraP0i98yLGKjgYodG1N6qd358gC8eSpVKWLVpPQeoCrbm9_dik',
  },
  {
    name: 'Mateo Vargas',
    desc: 'Mateo Vargas, a community leader in Colombia, empowers local farmers through cooperative initiatives, ensuring fair trade and quality.',
    img: 'AB6AXuCSWU0nCeJrgU7og_-wdwPfBVUrHQRZdRiKfBfCSQw7yyBRHbuFDpqKDgRCvghK-ydvmZ9fLb0z_jaBuTujVOXvqjUJls6ZDTIxJa0yq2upic4I1NPq6rc9N2mp4Hy6TBP4949S0H_WFlzAHr3R0--EdxCM5y8N40xLb-rc5_tqVOxqo29qMWLVeNC2MOxxKLYd4mRhIutsQLzRLdMy5A02Ze6_Bs5KYZL7Xym-C7iVkWpz5hGPZhtwrOH1lZj3RvywwwfNzxDl5t4',
  },
];

function Producers() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Meet Our Producers</p>
            </div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Café En Tu Taza, we believe in the power of connection. Our coffee is more than just a beverage; it's a story of dedication, passion, and the rich tapestry of cultures
              that bring it to life. We invite you to meet the heart and soul behind every cup - our incredible producers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
              {producers.map((producer) => (
                <div key={producer.name} className="flex flex-col overflow-hidden rounded-xl border border-[#483623] bg-[#2d2217] shadow-sm transition-shadow hover:shadow-md">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/${producer.img}")` }}
                  />
                  <div className="flex flex-col gap-2 p-5">
                    <p className="text-white text-lg font-bold leading-tight">{producer.name}</p>
                    <p className="text-[#c9ad92] text-sm font-normal leading-normal">{producer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center p-4">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#d47211] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                  <span className="truncate">Explore Our Coffees</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#483623] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                  <span className="truncate">Learn About Our Farms</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producers;