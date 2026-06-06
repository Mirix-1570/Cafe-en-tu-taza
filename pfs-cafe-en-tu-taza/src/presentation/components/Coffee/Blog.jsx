import React, { useState } from 'react';

const blogPosts = [
  { title: 'Perfect Pour-Over Coffee', desc: 'A step-by-step guide to brewing the perfect pour-over coffee at home.', category: 'Brewing Tips', readTime: '5 min read', img: 'AB6AXuD6qYIpwQAKGxBeOuq0XLvSFPlV-QBg0jgs7r5Le1zRdbtaG_WX-ogIqBXIWdk5pYWn9uT_najnpz8mLPvwrmkEtgyMR-8GK-t6A4eu9ExjxwkAbSgNd8Ely3zOMbnp5dX7hz6KY9rJ0lfw-Zxm9XwoHg3xXebJL2FjGplHuIHKyLD_yg1K95DFu3zxK5E_akPSBMVlipwFQtL717CDaZaTFPfCGNK6vtrG5kgpbdpiqaeAY4vNUDXaztmXtt-6ItvDAS3RZwintHk' },
  { title: 'Espresso Mastery', desc: 'Master the art of espresso making with our expert tips and techniques.', category: 'Expertise', readTime: '8 min read', img: 'AB6AXuDHUe-sKG5HOOEJn3bWQzjwYh7YhbTv-xYiYAV-acVvGtD_mzNYLgg4i1bCBBAn2ESI95dU8C9984-s4wrkTBhadKbsidG6uiOnZTif88PPSmn5ehce-JKPX-My3UUEF8sm4rADuvpjoh9Q6ZxyTkfQcOM8s-NiuhO19YB_IdZW_Z3vZoZu5-mYAUlTc2NbtGLg4dnILlI_GQ78INIb9WP31YhfLywFE-IAlXe2O3fC5FCHHTtmR0Fxcdw3TMBzGmWB5G76srQgQHI' },
  { title: 'The Art of Latte', desc: 'Learn how to create stunning latte art and impress your friends.', category: 'Art & Design', readTime: '6 min read', img: 'AB6AXuANnGNmDV7srQTIPJDPMbbF-UCYeQ9o2xWncfcQXRkbT9z3WD9aAWFsfFUn0LEdqjaH5-Y5_ombhG91KKXLc0bVh1xopnIl-lHiVyJUmLnv9qMCHJ-LK9zLC0cBvn-f8sJUOdyQMw9oj0IYsJaip7r9VlV41m3SNvEjm_JJPNUfiFZeXqc48_TwD6MBwb3chClPaHjsnyVDFa4QFL-kCe_HbLO46nuUVdEDDUNdjpHMn2_Cxlp5BVmoCiIELS2ilNwl5cNXEHgKqmE' },
  { title: 'Coffee Bean Origins', desc: 'Explore the fascinating origins of coffee beans from around the world.', category: 'Education', readTime: '10 min read', img: 'AB6AXuCtd8gyA1AS94W3kz20oicpb1bkUhRrzjxT1xHBjiQRJCyOMLbVEB1wZ2uex7BqZf2VjDeGrgfDCcoiH3mYQBcJ62SqReGFo9sCeN3FnsOkGz8qVnkj8hNiUzQTWWrU5MTlQwkQ-VBvz0A9iYs2gE3t6pIlzcz67rTJybi1v2wsadhipiXsVP7lRwkkQ5u6ZGxOnix9TP6YNYLoqBBgPvdiLIv0OL-ms2NSnc0Bhym6-qB33znJKpt-2JjJHDG6y8aBd4TDAHZsN0Q' },
  { title: 'Cold Brew Perfection', desc: 'Discover the secrets to making delicious and refreshing cold brew coffee.', category: 'Recipes', readTime: '4 min read', img: 'AB6AXuD-MTu73S6J9PbO9l5IpgCsMVW78yzr-tDnAxgZx_GZjP5vWcPX1qHSKgnEHZ8C4sgVqaAF4XlUFo2apPp_6Ezb2g_XKjjbGdS35WxDXKmfUE45_G-2LUrm-xs7rAxcvsV3kZC6FuCMX-gxglmDFT8yDInbNiwEZqaL16wINn9laYeV1t5AqD_S4kHXvW3GnSj1GZ0V1nbGKOjlfJPWFU4PipWQJgok3WDizO8aHBeuDZlIG5ei9tTD3ONj48JSUYQtOTPo5JAiuXU' },
  { title: 'Coffee and Health', desc: 'Uncover the health benefits of coffee and how it can enhance your well-being.', category: 'Health', readTime: '7 min read', img: 'AB6AXuAF8At_v_B_EaGuBeLs_-KcjiYdzVd-RdimORHU1u34c8WG_hP1XPTvu1_qdr3dE8JJotBEw88vy4OoqFeEELoDsfssuflhlj_XbTlcQXt3lE7A2SiwE-2X1LiLOTysfqMMBVrYgLpJR5vCxjSwjT7DRiAR9UaGox5fwq9tuA1JOtHPyP_BNzl0QgM_P_nGmMdc_fEITLzrx0pxfWUIUIDrLkUuFxbMiZ8VGTWOHbx--5X9jHzeSViE0JUZB-DMXnCwDwF_7rBiios' },
];

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Recipes', 'Brewing Tips', 'News'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <h1 className="text-white tracking-light text-4xl font-bold leading-tight mb-6 px-4">The Brewtiful Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 items-center px-4">
              <div className="md:col-span-5 lg:col-span-4">
                <div className="relative flex w-full items-stretch group">
                  <input
                    aria-label="Search"
                    className="form-input relative m-0 block w-full min-w-0 flex-auto rounded-l-lg border border-solid border-[#483623] bg-[#2d2217] bg-clip-padding px-4 py-2.5 text-base font-normal leading-normal text-white outline-none transition duration-200 ease-in-out placeholder:text-[#8a7a6b] focus:border-[#c9ad92] focus:bg-[#3a2e22] focus:text-white focus:outline-none focus:ring-1 focus:ring-[#c9ad92]"
                    placeholder="Search articles..."
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="relative z-[2] flex items-center rounded-r-lg border border-l-0 border-[#483623] bg-[#483623] px-5 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-[#5a442c]" type="button">
                    <svg fill="currentColor" height="18px" viewBox="0 0 256 256" width="18px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <div className="flex flex-wrap gap-3 md:justify-end">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#c9ad92] focus:ring-offset-2 focus:ring-offset-[#221a11] ${
                        activeCategory === cat
                          ? 'bg-[#c9ad92] text-[#221a11]'
                          : 'border border-[#483623] bg-transparent text-[#c9ad92] hover:bg-[#483623] hover:text-white'
                      }`}
                      type="button"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {filteredPosts.map((post) => (
                <div key={post.title} className="group flex flex-col overflow-hidden rounded-xl border border-[#483623] bg-[#2d2217] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#5a442c]">
                  <div
                    className="h-56 w-full shrink-0 bg-cover bg-center bg-no-repeat group-hover:brightness-110 transition-all duration-300"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/${post.img}")` }}
                  />
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex-1">
                      <p className="text-xl font-bold text-white mb-2 group-hover:text-[#c9ad92] transition-colors">{post.title}</p>
                      <p className="text-base text-[#a09080] leading-relaxed">{post.desc}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#483623] flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#c9ad92]">{post.category}</span>
                      <span className="text-xs text-[#8a7a6b]">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <nav aria-label="Page navigation" className="mt-12 flex justify-center px-4">
              <ul className="flex list-none items-center rounded-lg border border-[#483623] bg-[#2d2217] shadow-sm">
                <li>
                  <a aria-label="Previous" className="relative block rounded-l-lg bg-transparent px-4 py-2 text-sm text-white transition-all duration-200 hover:bg-[#483623] hover:text-[#c9ad92]" href="#">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                {[1, 2, 3].map((page) => (
                  <li key={page}>
                    <a
                      aria-current={page === 1 ? 'page' : undefined}
                      className={`relative block px-4 py-2 text-sm transition-all duration-200 ${
                        page === 1
                          ? 'bg-[#c9ad92] font-bold text-[#221a11]'
                          : 'bg-transparent text-white hover:bg-[#483623] hover:text-[#c9ad92]'
                      }`}
                      href="#"
                    >
                      {page}
                    </a>
                  </li>
                ))}
                <li>
                  <a aria-label="Next" className="relative block rounded-r-lg bg-transparent px-4 py-2 text-sm text-white transition-all duration-200 hover:bg-[#483623] hover:text-[#c9ad92]" href="#">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;