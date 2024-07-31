'use client';
import React, { use, useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import grapesjsBlocksBasic from 'grapesjs-blocks-basic-extend';
import grapesjsPluginForms from 'grapesjs-plugin-forms';
import grapesjsPluginNavbar from 'grapesjs-navbar';
import grapesjsPluginCountdown from 'grapesjs-component-countdown';
import grapesjsPluginTemplate from 'grapesjs-templates';
import { Button, Menu, MenuItem, AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/navigation';
import CreateFormModal from '../Components/LandingPage/PopupAI';
import AutoRotatingCircularProgress from '../Components/LandingPage/GradientProgress';

const StyledModal = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

function LandingPageEditor() {
  const router = useRouter();
  const [editor, setEditor] = useState(null);
  const [templates, setTemplates] = useState([
    {
      id: 'template-1',
      label: 'Template 1',
      content: `<div class="template">
        <h1>Template 1</h1>
        <p>This is a simple template.</p>
      </div>`,
    },
    {
      id: 'template-2',
      label: 'Template 2',
      content: `<div class="template">
        <h1>Template 2</h1>
        <p>This is another simple template.</p>
      </div>`,
      style: ``
    },
  ]);
  const [templateContentAI, setTemplateContentAI] = useState('');
  const [templateStyleAI, setTemplateStyleAI] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const editor = grapesjs.init({
        container: "#editor",
        plugins: [
          gjsPresetWebpage,
          grapesjsBlocksBasic,
          grapesjsPluginForms,
          grapesjsPluginNavbar,
          grapesjsPluginCountdown,
          grapesjsPluginTemplate,
        ],
        pluginsOpts: {
          gjsPresetWebpage: {
            // options
          },
          grapesjsBlocksBasic: {
            // options
          },
          grapesjsPluginForms: {
            // options
          },
          grapesjsPluginNavbar: {
            // options
          },
          grapesjsPluginCountdown: {
            // options
          },
          grapesjsPluginTemplate: {
            // options

          },
        },
      });
      const styleManager = editor.StyleManager;
      styleManager.addSector('custom', {
        name: 'Custom',
        open: false,
        buildProps: ['background-color', 'color', 'font-size', 'font-family', 'text-align', 'border-radius', 'padding'],
      });
      styleManager.render();
      setEditor(editor);
    }
  }, []);

  const saveLandingPage = async () => {
    if (editor) {
      const html = editor.getHtml();
      const css = editor.getCss();
      // Gửi dữ liệu tới backend
      try {
        console.log('HTML:', html);
        console.log('CSS:', css);
      } catch (error) {
        console.error('Error saving landing page:', error);
      }
    }
  };

  const handleTemplateClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTemplateClose = (template) => {
    if (template && editor) {
      editor.setComponents(template.content);
      editor.setStyle(template.style);
    }
    setAnchorEl(null);
  };

  const handleNavigate = (url) => {
    router.push(url);
  };
  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const apiKey = 'AIzaSyAdikvUHhHVdi-WP9-uvn3tRvZKkc_f_xg';
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  async function run(message) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(
        `<body>
  <header class="header-banner" id="i2z9">
    <div class="container-width" id="ifd5">
      <div class="logo-container" id="i0ph">
        <div class="logo" id="iuni">GrapesJS
        </div>
      </div>
      <nav class="menu">
        <div class="menu-item" id="iz5h">BUILDER
        </div>
        <div class="menu-item" id="iuiu">TEMPLATE
        </div>
        <div class="menu-item" id="i68jz">WEB
          <span id="i9tx57"></span>
        </div>
      </nav>
      <div class="clearfix">
      </div>
      <div class="sub-lead-title" id="imgij">All text blocks could be edited easily with double clicking on it. You can create new text blocks with the command from the left panel
      </div>
      <div class="lead-btn" id="ij7ah">Hover me
      </div>
    </div>
  </header>
  <section class="flex-sect">
    <div class="container-width">
      <div class="flex-title">Flex is the new black
      </div>
      <div class="flex-desc">With flexbox system you're able to build complex layouts easily and with free responsivity
      </div>
      <div class="cards">
        <div class="card">
          <div class="card-header">
          </div>
          <div class="card-body">
            <div class="card-title">Title one
            </div>
            <div class="card-sub-title">Subtitle one
            </div>
            <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header ch2">
          </div>
          <div class="card-body">
            <div class="card-title">Title two
            </div>
            <div class="card-sub-title">Subtitle two
            </div>
            <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header ch3">
          </div>
          <div class="card-body">
            <div class="card-title">Title three
            </div>
            <div class="card-sub-title">Subtitle three
            </div>
            <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header ch4">
          </div>
          <div class="card-body">
            <div class="card-title">Title four
            </div>
            <div class="card-sub-title">Subtitle four
            </div>
            <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header ch5">
          </div>
          <div class="card-body">
            <div class="card-title">Title five
            </div>
            <div class="card-sub-title">Subtitle five
            </div>
            <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header ch6">
          </div>
          <div class="card-body">
            <div class="card-title">Title six
            </div>
            <div class="card-sub-title">Subtitle six
            </div>
            <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="am-sect">
    <div class="container-width">
      <div class="am-container">
        <img src="/assets/images/demos/phone-app.png" class="img-phone"/>
        <div class="am-content">
          <div class="am-pre">ASSET MANAGER
          </div>
          <div class="am-title">Manage your images with Asset Manager
          </div>
          <div class="am-desc">You can create image blocks with the command from the left panel and edit them with double click
          </div>
          <div class="am-post">Image uploading is not allowed in this demo
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="blk-sect">
    <div class="container-width">
      <div class="blk-title">Blocks
      </div>
      <div class="blk-desc">Each element in HTML page could be seen as a block. On the left panel you could find different kind of blocks that you can create, move and style
      </div>
      <div class="price-cards">
        <div class="price-card-cont">
          <div class="price-card">
            <div class="pc-title">Starter
            </div>
            <div class="pc-desc">Some random list
            </div>
            <div class="pc-feature odd-feat">+ Starter feature 1
            </div>
            <div class="pc-feature">+ Starter feature 2
            </div>
            <div class="pc-feature odd-feat">+ Starter feature 3
            </div>
            <div class="pc-feature">+ Starter feature 4
            </div>
            <div class="pc-amount odd-feat">$ 9,90/mo
            </div>
          </div>
        </div>
        <div class="price-card-cont">
          <div class="price-card pc-regular">
            <div class="pc-title">Regular
            </div>
            <div class="pc-desc">Some random list
            </div>
            <div class="pc-feature odd-feat">+ Regular feature 1
            </div>
            <div class="pc-feature">+ Regular feature 2
            </div>
            <div class="pc-feature odd-feat">+ Regular feature 3
            </div>
            <div class="pc-feature">+ Regular feature 4
            </div>
            <div class="pc-amount odd-feat">$ 19,90/mo
            </div>
          </div>
        </div>
        <div class="price-card-cont">
          <div class="price-card pc-enterprise">
            <div class="pc-title">Enterprise
            </div>
            <div class="pc-desc">Some random list
            </div>
            <div class="pc-feature odd-feat">+ Enterprise feature 1
            </div>
            <div class="pc-feature">+ Enterprise feature 2
            </div>
            <div class="pc-feature odd-feat">+ Enterprise feature 3
            </div>
            <div class="pc-feature">+ Enterprise feature 4
            </div>
            <div class="pc-amount odd-feat">$ 29,90/mo
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bdg-sect">
    <div class="container-width">
      <h1 class="bdg-title">The team
      </h1>
      <div class="badges">
        <div class="badge">
          <div class="badge-header">
          </div>
          <img src="/assets/images/demos/team1.jpg" class="badge-avatar"/>
          <div class="badge-body">
            <div class="badge-name">Adam Smith
            </div>
            <div class="badge-role">CEO
            </div>
            <div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
            </div>
          </div>
          <div class="badge-foot">
            <span class="badge-link">f</span>
            <span class="badge-link">t</span>
            <span class="badge-link">ln</span>
          </div>
        </div>
        <div class="badge">
          <div class="badge-header">
          </div>
          <img src="/assets/images/demos/team2.jpg" class="badge-avatar"/>
          <div class="badge-body">
            <div class="badge-name">John Black
            </div>
            <div class="badge-role">Software Engineer
            </div>
            <div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
            </div>
          </div>
          <div class="badge-foot">
            <span class="badge-link">f</span>
            <span class="badge-link">t</span>
            <span class="badge-link">ln</span>
          </div>
        </div>
        <div class="badge">
          <div class="badge-header">
          </div>
          <img src="/assets/images/demos/team3.jpg" class="badge-avatar"/>
          <div class="badge-body">
            <div class="badge-name">Jessica White
            </div>
            <div class="badge-role">Web Designer
            </div>
            <div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
            </div>
          </div>
          <div class="badge-foot">
            <span class="badge-link">f</span>
            <span class="badge-link">t</span>
            <span class="badge-link">ln</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer-under">
    <div class="container-width">
      <div class="footer-container">
        <div class="foot-lists">
          <div class="foot-list">
            <div class="foot-list-title">About us
            </div>
            <div class="foot-list-item">Contact
            </div>
            <div class="foot-list-item">Events
            </div>
            <div class="foot-list-item">Company
            </div>
            <div class="foot-list-item">Jobs
            </div>
            <div class="foot-list-item">Blog
            </div>
          </div>
          <div class="foot-list">
            <div class="foot-list-title">Services
            </div>
            <div class="foot-list-item">Education
            </div>
            <div class="foot-list-item">Partner
            </div>
            <div class="foot-list-item">Community
            </div>
            <div class="foot-list-item">Forum
            </div>
            <div class="foot-list-item">Download
            </div>
            <div class="foot-list-item">Upgrade
            </div>
          </div>
          <div class="clearfix">
          </div>
        </div>
        <div class="form-sub">
          <div class="foot-form-cont">
            <div class="foot-form-title">Subscribe
            </div>
            <div class="foot-form-desc">Subscribe to our newsletter to receive exclusive offers and the latest news
            </div>
            <input type="text" name="name" placeholder="Name" class="sub-input"/>
            <input type="text" name="email" placeholder="Email" class="sub-input"/>
            <button type="button" class="sub-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container-width">
        <div class="made-with">
          made with GrapesJS
        </div>
        <div class="foot-social-btns">facebook twitter linkedin mail
        </div>
        <div class="clearfix">
        </div>
      </div>
    </div>
  </footer>
</body>
Code cho tôi đoạn code tương tự chỉ cần thẻ <body> không cần thẻ <html> hay <head>. Chỉ trả kết quả là đoạn code trong thẻ <body>, theo format <body>”nội dung”</body> không cần giải thích gì thêm.
`+ message
      );
      const responseText = result.response.text();
      console.log(responseText);
      if (responseText) {
        setTemplateContentAI(responseText);
        console.log(templateContentAI);
        editor.setComponents(responseText);
        editor.setStyle(`* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.clearfix{
  clear:both;
}
.header-banner{
  padding-top:35px;
  padding-bottom:100px;
  color:#ffffff;
  font-family:Helvetica, serif;
  font-weight:100;
  background-image:url("/assets/images/demos/bg-gr-v.png"), url("/assets/images/demos/work-desk.jpg");
  background-attachment:scroll, scroll;
  background-position:left top, center center;
  background-repeat:repeat-y, no-repeat;
  background-size:contain, cover;
}
.container-width{
  width:90%;
  max-width:1150px;
  margin:0 auto;
}
.logo-container{
  float:left;
  width:50%;
}
.logo{
  background-color:#fff;
  border-radius:5px;
  width:130px;
  padding:10px;
  min-height:30px;
  text-align:center;
  line-height:30px;
  color:#4d114f;
  font-size:23px;
}
.menu{
  float:right;
  width:50%;
}
.menu-item{
  float:right;
  font-size:15px;
  color:#eee;
  width:130px;
  padding:10px;
  min-height:50px;
  text-align:center;
  line-height:30px;
  font-weight:400;
}
.sub-lead-title{
  max-width:650px;
  line-height:30px;
  margin-bottom:30px;
  color:#c6c6c6;
}
.lead-btn{
  margin-top:15px;
  padding:10px;
  width:190px;
  min-height:30px;
  font-size:20px;
  text-align:center;
  letter-spacing:3px;
  line-height:30px;
  background-color:#d983a6;
  border-radius:5px;
  transition:all 0.5s ease;
  cursor:pointer;
}
.lead-btn:hover{
  background-color:#ffffff;
  color:#4c114e;
}
.lead-btn:active{
  background-color:#4d114f;
  color:#fff;
}
.flex-sect{
  background-color:#fafafa;
  padding:100px 0;
  font-family:Helvetica, serif;
}
.flex-title{
  margin-bottom:15px;
  font-size:2em;
  text-align:center;
  font-weight:700;
  color:#555;
  padding:5px;
}
.flex-desc{
  margin-bottom:55px;
  font-size:1em;
  color:rgba(0, 0, 0, 0.5);
  text-align:center;
  padding:5px;
}
.cards{
  padding:20px 0;
  display:flex;
  justify-content:space-around;
  flex-flow:wrap;
}
.card{
  background-color:white;
  height:300px;
  width:300px;
  margin-bottom:30px;
  box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius:2px;
  transition:all 0.5s ease;
  font-weight:100;
  overflow:hidden;
}
.card:hover{
  margin-top:-5px;
  box-shadow:0 20px 30px 0 rgba(0, 0, 0, 0.2);
}
.card-header{
  height:155px;
  background-image:url("https://via.placeholder.com/350x250/78c5d6/fff");
  background-size:cover;
  background-position:center center;
}
.card-header.ch2{
  background-image:url("https://via.placeholder.com/350x250/459ba8/fff");
}
.card-header.ch3{
  background-image:url("https://via.placeholder.com/350x250/79c267/fff");
}
.card-header.ch4{
  background-image:url("https://via.placeholder.com/350x250/c5d647/fff");
}
.card-header.ch5{
  background-image:url("https://via.placeholder.com/350x250/f28c33/fff");
}
.card-header.ch6{
  background-image:url("https://via.placeholder.com/350x250/e868a2/fff");
}
.card-body{
  padding:15px 15px 5px 15px;
  color:#555;
}
.card-title{
  font-size:1.4em;
  margin-bottom:5px;
}
.card-sub-title{
  color:#b3b3b3;
  font-size:1em;
  margin-bottom:15px;
}
.card-desc{
  font-size:0.85rem;
  line-height:17px;
}
.am-sect{
  padding-top:100px;
  padding-bottom:100px;
  font-family:Helvetica, serif;
}
.img-phone{
  float:left;
}
.am-container{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-around;
}
.am-content{
  float:left;
  padding:7px;
  width:490px;
  color:#444;
  font-weight:100;
  margin-top:50px;
}
.am-pre{
  padding:7px;
  color:#b1b1b1;
  font-size:15px;
}
.am-title{
  padding:7px;
  font-size:25px;
  font-weight:400;
}
.am-desc{
  padding:7px;
  font-size:17px;
  line-height:25px;
}
.am-post{
  padding:7px;
  line-height:25px;
  font-size:13px;
}
.blk-sect{
  padding-top:100px;
  padding-bottom:100px;
  background-color:#222222;
  font-family:Helvetica, serif;
}
.blk-title{
  color:#fff;
  font-size:25px;
  text-align:center;
  margin-bottom:15px;
}
.blk-desc{
  color:#b1b1b1;
  font-size:15px;
  text-align:center;
  max-width:700px;
  margin:0 auto;
  font-weight:100;
}
.price-cards{
  margin-top:70px;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-around;
}
.price-card-cont{
  width:300px;
  padding:7px;
  float:left;
}
.price-card{
  margin:0 auto;
  min-height:350px;
  background-color:#d983a6;
  border-radius:5px;
  font-weight:100;
  color:#fff;
  width:90%;
}
.pc-title{
  font-weight:100;
  letter-spacing:3px;
  text-align:center;
  font-size:25px;
  background-color:rgba(0, 0, 0, 0.1);
  padding:20px;
}
.pc-desc{
  padding:75px 0;
  text-align:center;
}
.pc-feature{
  color:rgba(255,255,255,0.5);
  background-color:rgba(0, 0, 0, 0.1);
  letter-spacing:2px;
  font-size:15px;
  padding:10px 20px;
}
.pc-feature:nth-of-type(2n){
  background-color:transparent;
}
.pc-amount{
  background-color:rgba(0, 0, 0, 0.1);
  font-size:35px;
  text-align:center;
  padding:35px 0;
}
.pc-regular{
  background-color:#da78a0;
}
.pc-enterprise{
  background-color:#d66a96;
}
.footer-under{
  background-color:#312833;
  padding-bottom:100px;
  padding-top:100px;
  min-height:500px;
  color:#eee;
  position:relative;
  font-weight:100;
  font-family:Helvetica,serif;
}
.copyright{
  background-color:rgba(0, 0, 0, 0.15);
  color:rgba(238, 238, 238, 0.5);
  bottom:0;
  padding:1em 0;
  position:absolute;
  width:100%;
  font-size:0.75em;
}
.made-with{
  float:left;
  width:50%;
  padding:5px 0;
}
.foot-social-btns{
  display:none;
  float:right;
  width:50%;
  text-align:right;
  padding:5px 0;
}
.footer-container{
  display:flex;
  flex-wrap:wrap;
  align-items:stretch;
  justify-content:space-around;
}
.foot-list{
  float:left;
  width:200px;
}
.foot-list-title{
  font-weight:400;
  margin-bottom:10px;
  padding:0.5em 0;
}
.foot-list-item{
  color:rgba(238, 238, 238, 0.8);
  font-size:0.8em;
  padding:0.5em 0;
}
.foot-list-item:hover{
  color:rgba(238, 238, 238, 1);
}
.foot-form-cont{
  width:300px;
  float:right;
}
.foot-form-title{
  color:rgba(255,255,255,0.75);
  font-weight:400;
  margin-bottom:10px;
  padding:0.5em 0;
  text-align:right;
  font-size:2em;
}
.foot-form-desc{
  font-size:0.8em;
  color:rgba(255,255,255,0.55);
  line-height:20px;
  text-align:right;
  margin-bottom:15px;
}
.sub-input{
  width:100%;
  margin-bottom:15px;
  padding:7px 10px;
  border-radius:2px;
  color:#fff;
  background-color:#554c57;
  border:none;
}
.sub-btn{
  width:100%;
  margin:15px 0;
  background-color:#785580;
  border:none;
  color:#fff;
  border-radius:2px;
  padding:7px 10px;
  font-size:1em;
  cursor:pointer;
}
.sub-btn:hover{
  background-color:#91699a;
}
.sub-btn:active{
  background-color:#573f5c;
}
.bdg-sect{
  padding-top:100px;
  padding-bottom:100px;
  font-family:Helvetica, serif;
  background-color:#fafafa;
}
.bdg-title{
  text-align:center;
  font-size:2em;
  margin-bottom:55px;
  color:#555555;
}
.badges{
  padding:20px;
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
  flex-wrap:wrap;
}
.badge{
  width:290px;
  font-family:Helvetica, serif;
  background-color:white;
  margin-bottom:30px;
  box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius:3px;
  font-weight:100;
  overflow:hidden;
  text-align:center;
}
.badge-header{
  height:115px;
  background-image:url("/assets/images/demos/bg-gr-v.png"), url("/assets/images/demos/work-desk.jpg");
  background-position:left top, center center;
  background-attachment:scroll, fixed;
  overflow:hidden;
}
.badge-name{
  font-size:1.4em;
  margin-bottom:5px;
}
.badge-role{
  color:#777;
  font-size:1em;
  margin-bottom:25px;
}
.badge-desc{
  font-size:0.85rem;
  line-height:20px;
}
.badge-avatar{
  width:100px;
  height:100px;
  border-radius:100%;
  border:5px solid #fff;
  box-shadow:0 1px 1px 0 rgba(0, 0, 0, 0.2);
  margin-top:-75px;
  position:relative;
}
.badge-body{
  margin:35px 10px;
}
.badge-foot{
  color:#fff;
  background-color:#a290a5;
  padding-top:13px;
  padding-bottom:13px;
  display:flex;
  justify-content:center;
}
.badge-link{
  height:35px;
  width:35px;
  line-height:35px;
  font-weight:700;
  background-color:#fff;
  color:#a290a5;
  display:block;
  border-radius:100%;
  margin:0 10px;
}
#i2z9{
  float:none;
  background-repeat:repeat;
  background-position:left top;
  background-attachment:scroll;
  background-size:auto;
  background-image:url('data:image/jpeg;base64,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');
  background-image-color:unset;
  background-image-gradient:unset;
  background-image-gradient-dir:unset;
  background-image-gradient-type:unset;
}
#i68jz{
  text-decoration:none;
  color:#ffffff;
}
#iuni{
  border:1px solid black;
  width:100%;
  background-repeat:repeat;
  background-position:left top;
  background-attachment:scroll;
  background-size:auto;
  background-image:linear-gradient(#000000 0%, #000000 100%);
  color:#ffffff;
}
#i9tx57{
  color:#0c0808;
}
#iuiu{
  color:#ffffff;
}
#iz5h{
  color:#ffffff;
}
#imgij{
  color:#eeeeee;
}
@media (max-width: 768px){
  .foot-form-cont{
    width:400px;
  }
  .foot-form-title{
    width:autopx;
  }
}
@media (max-width: 480px){
  .foot-lists{
    display:none;
  }
}
`);
        console.log(chatSession.history);

        setTimeout(() => {
          setLoading(false);
        }, 9000);
      }
    } catch (error) {
      if (error.message.includes('Resource has been exhausted')) {
        console.error('API quota exceeded. Please try again later.');
        // Optional: Implement retry logic here
      } else {
        console.error('Error:', error);
      }
    }
  }

  const handleGenerate = (message) => {
    setOpen(!open);
    setLoading(true);
    run(message);
  };


  // useEffect(() => {
  //     async function run() {
  //         try {
  //             const chatSession = model.startChat({
  //                 generationConfig,
  //                 history: [],
  //             });

  //             const result = await chatSession.sendMessage("Messy là ai");
  //             console.log(result.response.text());
  //         } catch (error) {
  //             if (error.message.includes('Resource has been exhausted')) {
  //                 console.error('API quota exceeded. Please try again later.');
  //                 // Optional: Implement retry logic here
  //             } else {
  //                 console.error('Error:', error);
  //             }
  //         }
  //     }
  //     run();
  // }, []);

  return (
    <Box className=' relative'>
      <CssBaseline />
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
      <AppBar position="static" sx={{ backgroundColor: '#373D49', height: '70px', display: 'flex', justifyContent: 'center' }} >
        <Toolbar className='flex justify-between h-full'>
          <IconButton
            // color="default"
            aria-label="open drawer"
            onClick={() => handleNavigate('/Dashboard')}
            edge="start"
            sx={{
              mr: 2, color: '#DAE5E6',
              '&:hover': {
                backgroundColor: '#2F343E',
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box>
            <Button aria-controls="template-menu" aria-haspopup="true" onClick={handleTemplateClick} sx={{
              color: '#DAE5E6', '&:hover': {
                backgroundColor: '#2F343E',
              },
            }}>
              Select Template
            </Button>
            <Menu
              id="template-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => handleTemplateClose(null)}

            >
              {templates.map((template) => (
                <MenuItem key={template.id} onClick={() => handleTemplateClose(template)}>
                  {template.label}
                </MenuItem>
              ))}
            </Menu>
            <Button onClick={saveLandingPage} sx={{
              color: '#DAE5E6', '&:hover': {
                backgroundColor: '#2F343E',
              },
            }}>Save</Button>
          </Box>
          <Button
            sx={{
              color: '#DAE5E6', '&:hover': {
                backgroundColor: '#2F343E',
              },
            }}
            onClick={handleGenerate}
          >
            Publish
          </Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Box id="editor" className='bg-slate-300 w-full h-full'></Box>
        <CreateFormModal open={open} handleGenerate={handleGenerate} />
        {loading && <Box className='w-full h-[calc(100vh-0px)] absolute top-[70px] left-0 flex justify-center items-center z-10 bg-transparent opacity-100'>
          <AutoRotatingCircularProgress />
        </Box>}
      </Box>
    </Box>
  );
}

export default LandingPageEditor;