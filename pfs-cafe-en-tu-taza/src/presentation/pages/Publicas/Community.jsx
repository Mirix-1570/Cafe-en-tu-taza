import React from 'react';
import NavBar from '../../components/Everywere/NavBar';
import Footer from '../../components/Everywere/Footer';
import Producers from '../../components/Community/Producers';
import Map from '../../components/Community/Map';

function Community() {
  const [activeTab, setActiveTab] = React.useState('producers');

  return (
    <div>
      <NavBar />
      <div className="bg-[#221a11] dark">
        <div className="flex justify-center border-b border-[#483623]">
          <div className="flex gap-1 p-2">
            {[
              { id: 'producers', label: 'Producers' },
              { id: 'map', label: 'Map' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#483623] text-white'
                    : 'text-[#c9ad92] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {activeTab === 'producers' && <Producers />}
        {activeTab === 'map' && <Map />}
      </div>
      <Footer />
    </div>
  );
}

export default Community;