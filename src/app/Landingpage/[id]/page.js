'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import { getLandingPageAsync, putScanCountAsync } from '../../redux/slices/landingPageSlice';

const LandingPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const dataHtmlCss = useSelector((state) => state.landingPage.dataHtmlCss);
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathSegments = window.location.pathname.split('/');
      const landingPageId = pathSegments[pathSegments.length - 1];
      setId(landingPageId);
      console.log('Landing Page ID:', landingPageId);
    }
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getLandingPageAsync(id));
      dispatch(putScanCountAsync(id));
      console.log('Dispatched actions for ID:', id);
    }
  }, [id, dispatch]);
  
  useEffect(() => {
    if (dataHtmlCss) {
      setLandingPageData(dataHtmlCss);
      console.log('Updated landingPageData:', dataHtmlCss);
    }
  }, [dataHtmlCss]);
  
  if (!landingPageData) {
    return <div>Loading...</div>;
  }
  
  const sanitizedHtmlContent = landingPageData.htmlFileContent
    ? landingPageData.htmlFileContent.replace(/<\/?body[^>]*>/g, '')
    : '';
  
  return (
    <div>
      <style jsx global>{`${landingPageData.cssFileContent}`}</style>
      {parse(sanitizedHtmlContent)}
    </div>
  );
};

export default LandingPage;