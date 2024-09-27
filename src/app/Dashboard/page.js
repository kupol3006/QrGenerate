// HomePage.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Menu from '../Components/Dashboard/Menu';
import Header from '../Components/Dashboard/Header';
import MenuResponsive from '../Components/Dashboard/MenuResponsive';
import CreateForm from '../Components/FormBuidler/CreateForm';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import FormManagementTable from '../Components/FormBuidler/ListForm';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const scrollContainerRef = useRef(null); // Create a ref for the PerfectScrollbar container

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
      window.location.href = '/Login';
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const dashboardIndex = url.indexOf('Dashboard');

    if (dashboardIndex !== -1) {
      const afterDashboard = url.substring(dashboardIndex + 10); // Lấy các ký tự sau 'Dashboard/'

      // Chia nhỏ phần còn lại của URL sau 'Dashboard/' thành các phần
      const segments = afterDashboard.split('/');

      // Nếu có ít nhất một phần sau 'Dashboard/', gán cho category và subcategory
      if (segments.length > 0) {
        setActiveCategory(segments[0]); // Phần đầu tiên sẽ là category
        setActiveSubCategory("/" + segments.join('/')); // Ghép lại toàn bộ phần sau 'Dashboard/'

        console.log('Active category lần 1:', segments[0]);
        console.log('Active sub category lần 1:', "/" + segments.join('/'));
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

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };


  const renderContent = () => {
    // if (showCreateForm) {
    //   return <CreateForm />;
    // }

    switch (activeSubCategory) {
      case '/FormBuilder/Create':
        return <div className='w-full'><CreateForm /></div>;
      case '/FormBuilder/list':
        return <div className='w-full'><FormManagementTable /></div>;
      // Add more cases here for other subCategories
      default:
        return <div>Welcome to the Dashboard</div>;
    }
  };

  return (
    <div className="flex bg-[#F4F5FA] overflow-hidden">
      <style jsx global>{`
        html {
          overflow: scroll;
          overflow-x: hidden;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {isMobile ? (
        <MenuResponsive
          activeCategory={activeCategory}
          activeSubCategory={activeSubCategory}
          onCategoryChange={handleCategoryChange}
          onSubCategoryChange={handleSubCategoryChange}
          setActiveCategory={setActiveCategory}
          setActiveSubCategory={setActiveSubCategory}
          onCreateClick={handleCreateClick}
        />
      ) : (
        <Menu
          activeCategory={activeCategory}
          activeSubCategory={activeSubCategory}
          onCategoryChange={handleCategoryChange}
          onSubCategoryChange={handleSubCategoryChange}
          setActiveCategory={setActiveCategory}
          setActiveSubCategory={setActiveSubCategory}
          onCreateClick={handleCreateClick}
        />
      )}

      <div
        className={`w-full h-screen flex-1 ml-${isMobile ? '0' : '64'
          } transition-all duration-300`}
      >
        <PerfectScrollbar ref={scrollContainerRef}>
          <div className='w-full flex justify-center'>
            <Header scrollContainerRef={scrollContainerRef} />
          </div>
          <main className="flex justify-center items-center">
            {renderContent()}
          </main>
        </PerfectScrollbar>
      </div>

    </div>
  );
};

export default HomePage;