import React from 'react';

function Map() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container flex flex-col h-full flex-1">
              <div className="flex flex-1 flex-col @[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex min-h-[320px] flex-1 flex-col justify-between px-4 pb-4 pt-5 @[480px]:rounded-lg @[480px]:px-8 @[480px]:pb-6 @[480px]:pt-8"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfBb36jqtkUA52x2AFvSyVEQTa3n3GyJGKgV4c65H0BDijxQ6h7sgUWREcntk5OHUdjdBK0hcHbxccoH-emXrW7Djv2BBRAHy7F9hYj9S6XNeKkEIJcS_FivuDclt2QfPYv9eguoJNX5VEJaUeKtvETaEfXIHi8LZFbd58Ju1giZqEpm89x910oln1V0q6k-skc522idF1-ysmHRc4sfAa6XnlFhWfx3S7YuiKS0OmPSaoYMt9T9xIdg5H49M5djnB5A3zWpysNqc")',
                  }}
                >
                  <div className="flex w-full max-w-[320px] items-center overflow-hidden rounded-lg border border-[#483623] bg-[#332619] shadow-sm">
                    <div className="flex items-center justify-center pl-3 pr-2">
                      <div className="text-[#c9ad92]">
                        <svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </div>
                    </div>
                    <input
                      aria-label="Search for a farm or region"
                      className="h-10 w-full flex-1 border-none bg-transparent px-2 text-white placeholder:text-[#c9ad92] focus:ring-0 focus:outline-none"
                      placeholder="Search for a farm or region"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div aria-label="Vertical button group" className="flex flex-col overflow-hidden rounded-lg border border-[#483623] bg-[#332619] shadow-sm" role="group">
                      <button className="flex h-10 w-10 items-center justify-center border-b border-[#483623] text-white hover:bg-[#483623]" type="button">
                        <svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" fillRule="evenodd" />
                        </svg>
                      </button>
                      <button className="flex h-10 w-10 items-center justify-center text-white hover:bg-[#483623]" type="button">
                        <svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" fillRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#483623] bg-[#332619] text-white shadow-sm hover:bg-[#483623]" type="button">
                      <svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Our Coffee Regions</h2>
              <p className="text-[#c9ad92] text-base font-normal leading-normal">
                Explore our network of coffee farms across Latin America. Each region brings unique characteristics to our coffee blends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;