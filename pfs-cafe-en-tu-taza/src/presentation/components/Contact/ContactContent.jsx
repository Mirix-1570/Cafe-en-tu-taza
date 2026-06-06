import React from 'react';

function ContactContent() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Get in Touch</p>
            </div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              We'd love to hear from you! Whether you have a question about our coffee, want to collaborate, or just want to say hello.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
              <div className="flex flex-col gap-4 rounded-xl border border-[#483623] bg-[#2d2217] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#483623] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M230.92,212c-15.23-26.33-38.7-48-66.92-61.72a8,8,0,0,0-8.08.62,36.28,36.28,0,0,1-36.88.12,8,8,0,0,0-8.08-.64C95.75,164,72.3,185.63,57.08,212A8,8,0,0,0,64,224H224a8,8,0,0,0,6.92-12ZM128,160a68.27,68.27,0,0,1,68,68H60A68.27,68.27,0,0,1,128,160Zm36-88a36,36,0,1,0-36,36A36,36,0,0,0,164,72Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-base font-bold">Customer Support</p>
                    <p className="text-[#c9ad92] text-sm">We're here to help 24/7</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#483623] bg-[#2d2217] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#483623] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-56a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,160ZM128,96a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V104A8,8,0,0,0,128,96Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-base font-bold">Visit Our Store</p>
                    <p className="text-[#c9ad92] text-sm">Find us at our coffee shop</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col gap-4 rounded-xl border border-[#483623] bg-[#2d2217] p-6">
                <h3 className="text-white text-lg font-bold">Send us a Message</h3>
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#674d32] bg-[#332619] focus:border-[#674d32] h-14 placeholder:text-[#c9ad92] p-[15px] text-base font-normal leading-normal"
                      placeholder="Your Name"
                      type="text"
                    />
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#674d32] bg-[#332619] focus:border-[#674d32] h-14 placeholder:text-[#c9ad92] p-[15px] text-base font-normal leading-normal"
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>
                  <textarea
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#674d32] bg-[#332619] focus:border-[#674d32] min-h-[120px] placeholder:text-[#c9ad92] p-[15px] text-base font-normal leading-normal"
                    placeholder="Your Message"
                    rows={4}
                  />
                  <button className="flex min-w-[84px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#d47211] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;