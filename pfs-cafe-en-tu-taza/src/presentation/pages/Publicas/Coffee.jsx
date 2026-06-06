import React from 'react';
import NavBar from '../../components/Everywere/NavBar';
import Footer from '../../components/Everywere/Footer';
import Shop from '../../components/Coffee/Shop';
import Blog from '../../components/Coffee/Blog';
import Properies from '../../components/Coffee/Properies';

function Coffee() {
  const [activeTab, setActiveTab] = React.useState('shop');

  return (
    <div>
      <NavBar />
      <div className="bg-[#221a11] dark">
        <div className="flex justify-center border-b border-[#483623]">
          <div className="flex gap-1 p-2">
            {[
              { id: 'shop', label: 'Shop' },
              { id: 'properties', label: 'Properties' },
              { id: 'blog', label: 'Blog' },
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
        {activeTab === 'shop' && <Shop />}
        {activeTab === 'properties' && <Properies />}
        {activeTab === 'blog' && <Blog />}
      </div>
      <Footer />
    </div>
  );
}

export default Coffee;