"use server";

import { NextResponse } from 'next/server';
import Html2Canvas from 'html2canvas-next';

export async function POST(request) {
    const { selector } = await request.json();

    // Chạy trong môi trường trình duyệt (headless browser)
    const canvas = await Html2Canvas.getCanvas(document.querySelector(selector));

    // Chuyển đổi canvas thành data URL
    const dataURL = canvas.toDataURL('image/png');

    return NextResponse.json({ dataURL });
}