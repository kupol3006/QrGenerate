// import Head from 'next/head';
'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

export default function Home() {
    const landingPageData = useSelector((state) => state.landingPage.landingPageDatas);

    return (
        <div>
            <style jsx global>{`${landingPageData[0].style}`}</style>
            {parse(`${landingPageData[0].body}`)}
        </div>
    );
}