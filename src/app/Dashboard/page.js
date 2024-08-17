// HomePage.js
'use client';
import React, { useState, useEffect } from 'react';
import Menu from '../Components/Dashboard/Menu';
import Header from '../Components/Dashboard/Header';
import MenuResponsive from '../Components/Dashboard/MenuResponsive';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('#1'); // Mặc định chọn Dashboard

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Kiểm tra kích thước màn hình ban đầu

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex bg-[#F4F5FA] h-screen">
      {isMobile ? (
        <MenuResponsive
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      ) : (
        <Menu
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}
      <div
        className={`flex-1 ml-${
          isMobile ? '0' : '64'
        } transition-all duration-300`}
      >
        <Header />
        <main className="p-4">
          {/* Nội dung của trang sẽ được hiển thị ở đây */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;