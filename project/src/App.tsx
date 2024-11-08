import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { CategoryBar } from './components/CategoryBar';
import { HomePage } from './pages/HomePage';
import { SellPage } from './pages/SellPage';
import { CategorySelectPage } from './pages/CategorySelectPage';
import { CountrySelector } from './components/CountrySelector';
import { NotificationProvider } from './context/NotificationContext';

interface Country {
  code: string;
  name: string;
  flag: string;
}

function App() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(() => {
    const saved = localStorage.getItem('selectedCountry');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (selectedCountry) {
      localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
    }
  }, [selectedCountry]);

  if (!selectedCountry) {
    return <CountrySelector onSelect={setSelectedCountry} />;
  }

  return (
    <NotificationProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Toaster />
          <Header selectedCountry={selectedCountry} onChangeCountry={() => setSelectedCountry(null)} />
          <CategoryBar />
          
          <Routes>
            <Route path="/" element={<HomePage country={selectedCountry} />} />
            <Route path="/sell" element={<CategorySelectPage />} />
            <Route path="/sell/:categoryId" element={<SellPage country={selectedCountry} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;