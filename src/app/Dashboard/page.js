// HomePage.js
'use client';
import React, { useState, useEffect } from 'react';
import Menu from '../Components/Dashboard/Menu';
import Header from '../Components/Dashboard/Header';
import MenuResponsive from '../Components/Dashboard/MenuResponsive';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import 'react-perfect-scrollbar/dist/css/styles.css';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('#1');
  const [activeSubCategory, setActiveSubCategory] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.token;
    if (!token || token === 'undefined') {
      router.push('/Login');
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const dashboardIndex = url.indexOf('Dashboard');
    
    if (dashboardIndex !== -1) {
      const afterDashboard = url.substring(dashboardIndex + 9); // Lấy các ký tự sau 'Dashboard'
      const slashIndex = afterDashboard.indexOf('/');
      
      if (slashIndex !== -1) {
        setActiveCategory(afterDashboard.substring(0, slashIndex)); // Lấy ký tự từ đầu đến trước dấu '/'
        setActiveSubCategory(afterDashboard); // Lấy toàn bộ phần sau 'Dashboard'
      }
    }
  }, []);

  const handleCategoryChange = (category) => {
    console.log('Category changed to:', category);
    setActiveCategory(category);
  };
  
  const handleSubCategoryChange = (subCategory) => {
    setActiveSubCategory(subCategory);
    console.log('SubCategory changed to:', activeSubCategory);
  };

  // Add this useEffect to remove Bootstrap styles when the Dashboard page is loaded
  useEffect(() => {
    const removeBootstrapStyles = () => {
      const bootstrapStyles = document.querySelectorAll('link[href*="bootstrap.min.css"], style[data-href*="bootstrap.min.css"]');
      bootstrapStyles.forEach(style => style.remove());
    };
    removeBootstrapStyles();
  }, []);

  return (
    <div className="flex bg-[#F4F5FA] h-screen">
      {isMobile ? (
          <MenuResponsive
            activeCategory={activeCategory}
            activeSubCategory={activeSubCategory}
            onCategoryChange={handleCategoryChange}
            onSubCategoryChange={handleSubCategoryChange}
            setActiveCategory={setActiveCategory} // Truyền props
            setActiveSubCategory={setActiveSubCategory} // Truyền props
          />
      ) : (
        <Menu
          activeCategory={activeCategory}
          activeSubCategory={activeSubCategory}
          onCategoryChange={handleCategoryChange}
          onSubCategoryChange={handleSubCategoryChange}
          setActiveCategory={setActiveCategory}
          setActiveSubCategory={setActiveSubCategory}
        />
      )}
      <div
        className={`flex-1 ml-${
          isMobile ? '0' : '64'
        } transition-all duration-300`}
      >
        <Header />
        <main className="p-4">
          {/* Page content will be displayed here */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;