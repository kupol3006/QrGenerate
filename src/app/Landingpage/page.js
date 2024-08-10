'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, Menu, MenuItem, AppBar, Box, CssBaseline, Toolbar, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/navigation';
import CreateFormModal from '../Components/LandingPage/PopupAI';
import AutoRotatingCircularProgress from '../Components/LandingPage/GradientProgress';
import { GoogleGenerativeAI } from '@google/generative-ai';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PublishIcon from '@mui/icons-material/Publish';
import PopUpPublish from '../Components/LandingPage/PopUpPublish';

const LandingPageEditor = () => {
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
    },
  ]);
  const [templateContentAI, setTemplateContentAI] = useState('');
  const [templateStyleAI, setTemplateStyleAI] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openPublish, setOpenPublish] = useState(false);

  useEffect(() => {
    // Conditionally import grapesjs and related plugins
    const loadGrapesJS = async () => {
      if (typeof window !== 'undefined') {
        const grapesjs = (await import('grapesjs')).default;
        const gjsPresetWebpage = (await import('grapesjs-preset-webpage')).default;
        const grapesjsBlocksBasic = (await import('grapesjs-blocks-basic-extend')).default;
        const grapesjsPluginForms = (await import('grapesjs-plugin-forms')).default;
        const grapesjsPluginNavbar = (await import('grapesjs-navbar')).default;
        const grapesjsPluginCountdown = (await import('grapesjs-component-countdown')).default;
        const grapesjsPluginTemplate = (await import('grapesjs-templates')).default;

        const editorInstance = grapesjs.init({
          container: '#editor',
          plugins: [
            gjsPresetWebpage,
            grapesjsBlocksBasic,
            grapesjsPluginForms,
            grapesjsPluginNavbar,
            grapesjsPluginCountdown,
            grapesjsPluginTemplate,
          ],
          pluginsOpts: {
            gjsPresetWebpage: {},
            grapesjsBlocksBasic: {},
            grapesjsPluginForms: {},
            grapesjsPluginNavbar: {},
            grapesjsPluginCountdown: {},
            grapesjsPluginTemplate: {},
          },
        });

        setEditor(editorInstance);
      }
    };

    loadGrapesJS();
  }, []);

  const saveLandingPage = async () => {
    if (editor) {
      const html = editor.getHtml();
      const css = editor.getCss();
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
      editor.setStyle(template.style || '');
    }
    setAnchorEl(null);
  };


  const handleNavigate = (url) => {
    router.push(url);
  };

  const handleGenerate = async (message) => {
    try {
      setLoading(true);
      const apiKey = 'AIzaSyAdikvUHhHVdi-WP9-uvn3tRvZKkc_f_xg';
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-pro',
      });

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: 'text/plain',
      };

      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(
        `<body>
  <div id="i6po" class="gjs-grid-row">
    <div id="itjq" class="gjs-grid-column">
      <div id="iyd2" class="gjs-grid-row">
        <div id="iqjl" class="gjs-grid-column">
          <a id="iucmr" href="/" class="gjs-link-box"><img id="ihtxj" src=""/></a>
        </div>
        <div id="iffs" class="gjs-grid-column">
          <div id="it00l" class="gjs-grid-row">
            <div id="iz7cr" class="gjs-grid-column">
              <a id="ii2rd" class="gjs-link">About</a>
            </div>
            <div id="irtfd" class="gjs-grid-column">
              <a id="icfyb" class="gjs-link">Features</a>
            </div>
            <div id="icyzp" class="gjs-grid-column">
              <a id="i88iz" href="" class="gjs-link">Pricing</a>
            </div>
          </div>
        </div>
        <div id="id7x" class="gjs-grid-column">
          <a id="i1mew" class="gjs-link">Button</a>
        </div>
      </div>
    </div>
  </div>
  <div id="irz7b" class="gjs-grid-row">
    <div id="iycz3" class="gjs-grid-column">
      <h1 id="irjua" class="gjs-heading">Insert Hero text here
      </h1>
      <div id="itndw" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <a id="iar3s" class="gjs-link">Button</a>
      <img id="i3vvs" src=""/>
    </div>
  </div>
  <div id="ichzi" class="gjs-grid-row">
    <div id="imymf" class="gjs-grid-column">
      <div id="ib541" class="gjs-grid-row">
        <div id="iz8m8" class="gjs-grid-column">
          <h2 id="ij2gh" class="gjs-heading">Feature One text
          </h2>
          <div id="igrx8" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <a id="isn3p" class="gjs-link">Button</a>
        </div>
        <div id="iepks" class="gjs-grid-column">
          <img src="" id="i466d"/>
        </div>
      </div>
    </div>
  </div>
  <div id="ixig3" class="gjs-grid-row">
    <div id="ifx1t" class="gjs-grid-column">
      <div id="i297f" class="gjs-grid-row">
        <div id="io56m" class="gjs-grid-column">
          <img src="" id="ibhvh"/>
        </div>
        <div id="i07yy" class="gjs-grid-column">
          <h2 id="ie2yp" class="gjs-heading">Feature Two text
          </h2>
          <div id="ip9za" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <a id="ihj23" class="gjs-link">Button</a>
        </div>
      </div>
    </div>
  </div>
  <div id="ioyxg" class="gjs-grid-row">
    <div id="i8w4i" class="gjs-grid-column">
      <h2 id="iiacm" class="gjs-heading">More Features
      </h2>
      <div id="ia21sa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div id="ixzh1" class="gjs-grid-row">
        <div id="ilpi3" class="gjs-grid-column feature-item">
          <img src="" id="i6l3t"/>
          <h3 id="in9ef" class="gjs-heading">Feature text
          </h3>
          <div id="i8isa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="izue1" class="gjs-link">Learn
            more</a>
        </div>
        <div id="iolst9" class="gjs-grid-column feature-item">
          <img src="" id="i2v2bo"/>
          <h3 id="i4zy5b" class="gjs-heading">Feature text
          </h3>
          <div id="iss1oi" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="iwv8kj" class="gjs-link">Learn
            more</a>
        </div>
        <div id="i80n4g" class="gjs-grid-column feature-item">
          <img src="" id="if3q9n"/>
          <h3 id="iyz817" class="gjs-heading">Feature text
          </h3>
          <div id="ifs1de" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="ivuwzh" class="gjs-link">Learn
            more</a>
        </div>
        <div id="i0ciun" class="gjs-grid-column feature-item">
          <img src="" id="io9lt4"/>
          <h3 id="i9lijx" class="gjs-heading">Feature text
          </h3>
          <div id="ipy1nf" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="i31i8z" class="gjs-link">Learn
            more</a>
        </div>
        <div id="ice5ar" class="gjs-grid-column feature-item">
          <img src="" id="imzjjg"/>
          <h3 id="io2e0a" class="gjs-heading">Feature text
          </h3>
          <div id="ipy7fh" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="iaqmei" class="gjs-link">Learn
            more</a>
        </div>
        <div id="ipyath" class="gjs-grid-column feature-item">
          <img src="" id="iinc1f"/>
          <h3 id="istmw2" class="gjs-heading">Feature text
          </h3>
          <div id="ijfv13" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="igsybu" class="gjs-link">Learn
            more</a>
        </div>
      </div>
    </div>
  </div>
  <div id="igo13t" class="gjs-grid-row">
    <div id="infwen" class="gjs-grid-column">
      <h2 id="ihap8q" class="gjs-heading">Testimonial section
      </h2>
      <div id="i6fjjy" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div id="i5k4nf" class="gjs-grid-row">
        <div id="inea73" class="gjs-grid-column testimonial-item">
          <div id="it3yug" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div id="i2d7qp" class="gjs-grid-row">
            <div id="idva29" class="gjs-grid-column">
              <img src="" id="ia7pcr"/>
            </div>
            <div id="i4djop" class="gjs-grid-column">
              <h4 id="iqroa4" class="gjs-heading">Full name
              </h4>
              <div id="iaqf2c" class="text-main-content">Role / Company
              </div>
            </div>
          </div>
        </div>
        <div id="idndjn" class="gjs-grid-column testimonial-item">
          <div id="i8gt4n" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div id="ish0zj" class="gjs-grid-row">
            <div id="inucqu" class="gjs-grid-column">
              <img src="" id="ixzdlj"/>
            </div>
            <div id="iuk8ib" class="gjs-grid-column">
              <h4 id="i04ztt" class="gjs-heading">Full name
              </h4>
              <div id="ia9ts3" class="text-main-content">Role / Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="iv3be5" class="gjs-grid-row">
    <div id="ilriti" class="gjs-grid-column">
      <div id="im0rle" class="gjs-grid-row">
        <div id="iotp6j" class="gjs-grid-column">
          <a href="/" id="iih6cv" class="gjs-link-box"><img src=" " id="ikhs8g"/></a>
        </div>
        <div id="i4m02q" class="gjs-grid-column">
          <h3 id="ifz4zk" class="gjs-heading">Footer links
          </h3>
          <a id="i1podl" class="gjs-link">Footer link<br/></a>
          <a id="io1hrh" class="gjs-link">Footer link<br/></a>
          <a id="in1kmc" class="gjs-link">Footer link<br/></a>
        </div>
        <div id="ighmg2" class="gjs-grid-column">
          <h3 id="iyltzo" class="gjs-heading">Footer links
          </h3>
          <a id="igy8t4" class="gjs-link">Footer link<br/></a>
          <a id="iv8kr2" class="gjs-link">Footer link<br/></a>
          <a id="iw0c0y" class="gjs-link">Footer link<br/></a>
          <a id="il08wz" class="gjs-link">Footer link<br/></a>
        </div>
        <div id="i1hx7l" class="gjs-grid-column">
          <h3 id="ijzeqf" class="gjs-heading">Footer links
          </h3>
          <a id="ij7g8t" class="gjs-link">Footer link<br/></a>
          <a id="ipjdtn" class="gjs-link">Footer link<br/></a>
          <a id="ikj01e" class="gjs-link">Footer link<br/></a>
          <a id="i2sl68" class="gjs-link">Footer link<br/></a>
          <a id="in2r6l" class="gjs-link">Footer link<br/></a>
        </div>
      </div>
      <div id="iw4bbr" class="gjs-divider">
      </div>
      <div id="it6g1v">Copyright © YEAR Company name
      </div>
    </div>
  </div>
</body>

        Giữ nguyên cấu trúc đoạn code chỉ cần trả về thẻ <body> không cần thẻ <html> hay <head>. Chỉ trả kết quả là đoạn code trong thẻ <body>, theo format <body>”nội dung”</body> không cần giải thích gì thêm. Với yêu cầu sau: ` + message
      );

      const responseText = await result.response.text();
      console.log(responseText);

      if (responseText) {
        setTemplateContentAI(responseText);
        console.log(templateContentAI);

        if (editor) {
          editor.setComponents(responseText);
          editor.setStyle(`
            * {
  box-sizing: border-box;
}
body {
  margin: 0;
}
*{
  box-sizing:border-box;
}
body{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
.gjs-heading{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
.gjs-grid-column{
  flex-grow:1;
  flex-shrink:1;
  flex-basis:0%;
  padding-top:5px;
  padding-right:0px;
  padding-bottom:5px;
  padding-left:0px;
}
.gjs-grid-row{
  display:flex;
  justify-content:flex-start;
  align-items:stretch;
  flex-direction:row;
  min-height:auto;
  padding-top:10px;
  padding-right:0px;
  padding-bottom:10px;
  padding-left:0px;
}
#iqjl{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
  padding-top:0px;
  padding-right:0px;
  padding-bottom:0px;
  padding-left:0px;
}
.gjs-link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  max-width:100%;
  text-decoration-line:none;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
}
#ihtxj{
  color:black;
  width:54.1302px;
  height:32px;
}
.gjs-link{
  vertical-align:top;
  max-width:100%;
  display:inline-block;
  text-decoration-line:none;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
  color:inherit;
}
#i1mew{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#id7x{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
  display:block;
  padding-left:10px;
  padding-right:10px;
}
#iffs{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#iyd2{
  align-items:center;
  justify-content:space-between;
  padding-top:0px;
  padding-bottom:0px;
}
#i6po{
  justify-content:center;
  padding-top:0px;
  padding-bottom:0px;
}
#itjq{
  width:100%;
  max-width:1200px;
}
#iucmr{
  display:block;
  padding-top:0px;
  padding-bottom:0px;
}
#it00l{
  padding-top:0px;
  padding-bottom:0px;
}
#iz7cr{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#ii2rd{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
#icfyb{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
#irtfd{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i88iz{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
#icyzp{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#irz7b{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#iycz3{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
  row-gap:10px;
  column-gap:10px;
}
#irjua{
  font-size:3rem;
}
#itndw{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  max-width:750px;
  margin-bottom:25px;
}
#iar3s{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
  margin-bottom:50px;
}
#i3vvs{
  color:black;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  max-width:100%;
}
.text-main-content{
  line-height:30px;
  font-size:1.3rem;
  color:rgba(0, 0, 0, 0.75);
}
#ij2gh{
  font-size:2.5rem;
}
#igrx8{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:25px;
  padding-left:0px;
  padding-right:0px;
}
#isn3p{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#i466d{
  color:black;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  max-width:100%;
}
#imymf{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#ichzi{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#ib541{
  row-gap:100px;
  column-gap:100px;
  justify-content:space-between;
}
#iz8m8{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
}
#ie2yp{
  font-size:2.5rem;
}
#ip9za{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:25px;
  padding-left:0px;
  padding-right:0px;
}
#ihj23{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#i07yy{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:center;
  text-align:right;
}
#ibhvh{
  color:black;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  max-width:100%;
}
#i297f{
  row-gap:100px;
  column-gap:100px;
  justify-content:space-between;
}
#ifx1t{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#ixig3{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#in9ef{
  font-size:1.5rem;
}
#i8isa{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#izue1{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#i6l3t{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#i8w4i{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#ioyxg{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#iiacm{
  font-size:2.5rem;
  margin-bottom:10px;
  text-align:center;
}
#ixzh1{
  width:100%;
  flex-wrap:wrap;
  justify-content:flex-start;
  row-gap:50px;
  column-gap:50px;
}
.gjs-grid-column.feature-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  row-gap:15px;
  column-gap:15px;
  min-width:30%;
}
#iinc1f{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#istmw2{
  font-size:1.5rem;
}
#ijfv13{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#igsybu{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#imzjjg{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#io2e0a{
  font-size:1.5rem;
}
#ipy7fh{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#iaqmei{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#io9lt4{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#i9lijx{
  font-size:1.5rem;
}
#ipy1nf{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#i31i8z{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#if3q9n{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#iyz817{
  font-size:1.5rem;
}
#ifs1de{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#ivuwzh{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#i2v2bo{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#i4zy5b{
  font-size:1.5rem;
}
#iss1oi{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#iwv8kj{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#ia21sa{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:70px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#ihap8q{
  font-size:2.5rem;
  margin-bottom:10px;
  text-align:center;
}
#i6fjjy{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:70px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#ia7pcr{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
}
#iqroa4{
  font-size:1.5rem;
}
#i5k4nf{
  width:100%;
  flex-wrap:wrap;
  justify-content:flex-start;
  row-gap:50px;
  column-gap:50px;
}
#infwen{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#igo13t{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#inea73{
  justify-content:space-between;
}
.gjs-grid-column.testimonial-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  min-width:45%;
  background-color:rgb(247, 246, 246);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  align-items:flex-start;
}
#idva29{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i2d7qp{
  width:100%;
  row-gap:20px;
  column-gap:20px;
  align-items:center;
}
#iaqf2c{
  color:rgba(0, 0, 0, 0.5);
}
#it3yug{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#i8gt4n{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#ixzdlj{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
}
#inucqu{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i04ztt{
  font-size:1.5rem;
}
#ia9ts3{
  color:rgba(0, 0, 0, 0.5);
}
#ish0zj{
  width:100%;
  row-gap:20px;
  column-gap:20px;
  align-items:center;
}
#idndjn{
  justify-content:space-between;
}
#ilriti{
  max-width:1200px;
  display:flex;
  flex-direction:column;
}
#iv3be5{
  justify-content:center;
  padding-top:80px;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:30px;
}
#im0rle{
  row-gap:100px;
  column-gap:100px;
  padding-bottom:30px;
}
#ifz4zk{
  margin-bottom:10px;
  text-transform:uppercase;
}
#i1podl{
  display:block;
}
#i4m02q{
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#in1kmc{
  display:block;
}
#io1hrh{
  display:block;
}
#ikhs8g{
  color:black;
  width:54.1302px;
  height:54px;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
}
#iih6cv{
  display:block;
  padding-top:0px;
  padding-bottom:0px;
}
#iotp6j{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
  margin-right:auto;
}
#it6g1v{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  text-align:center;
  font-size:0.9rem;
  margin-top:20px;
}
#iyltzo{
  margin-bottom:10px;
  text-transform:uppercase;
}
#igy8t4{
  display:block;
}
#iv8kr2{
  display:block;
}
#iw0c0y{
  display:block;
}
#ighmg2{
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#ijzeqf{
  margin-bottom:10px;
  text-transform:uppercase;
}
#ij7g8t{
  display:block;
}
#ipjdtn{
  display:block;
}
#ikj01e{
  display:block;
}
#i1hx7l{
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#il08wz{
  display:block;
}
#in2r6l{
  display:block;
}
#i2sl68{
  display:block;
}
.gjs-divider{
  height:3px;
  margin-top:10px;
  margin-right:10px;
  margin-bottom:10px;
  margin-left:10px;
  background-color:rgba(0, 0, 0, 0.05);
}
@media (max-width: 992px){
  .gjs-grid-row{
    flex-direction:column;
  }
  #i2d7qp{
    flex-direction:row;
  }
  #ish0zj{
    flex-direction:row;
  }
}`);
          setTimeout(() => {
            setLoading(false);
          }, 7000);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('Error Details:', error.response ? error.response.data : error.message);
    }
  };

  const handleCloseAI = () => {
    setOpen(!open);
  };

  const handleOpenPublish = () => {
    setOpenPublish(!openPublish);
  };

  return (
    <Box className="relative">
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
      <AppBar position="static" sx={{ backgroundColor: '#373D49', height: '50px', display: 'flex', justifyContent: 'center' }}>
        <Toolbar className="flex justify-between h-full p-0 m-0">
          <Button
            aria-label="open drawer"
            onClick={() => handleNavigate('/Dashboard')}
            edge="start"
            sx={{
              mr: 2,
              color: '#DAE5E6',
              '&:hover': {
                backgroundColor: '#2F343E',
              },
            }}
            startIcon={<ArrowBackIosNewIcon />}
          >
            Back
          </Button>
          <Box className='w-[15.4%] flex justify-around'>
            <IconButton
              aria-controls="template-menu"
              aria-haspopup="true"
              onClick={handleTemplateClick}
              sx={{
                color: '#DAE5E6',
                '&:hover': {
                  backgroundColor: '#2F343E',
                },
              }}
            // size='small'
            >
              <InsertDriveFileIcon />
            </IconButton>
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
            <IconButton
              onClick={saveLandingPage}
              sx={{
                color: '#DAE5E6',
                '&:hover': {
                  backgroundColor: '#2F343E',
                },
              }}
            >
              <SaveAltIcon />
            </IconButton>
            <IconButton
              sx={{
                color: '#DAE5E6',
                '&:hover': {
                  backgroundColor: '#2F343E',
                },
              }}
              onClick={() => handleCloseAI()}

            >
              <SmartToyIcon />
            </IconButton>
            <IconButton
              sx={{
                color: '#DAE5E6',
                '&:hover': {
                  backgroundColor: '#2F343E',
                },
              }}
              onClick={() => handleOpenPublish()}
            >
              <PublishIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      <Box>
        <Box id="editor" className="bg-slate-300 w-full h-full"></Box>
        <CreateFormModal open={open} handleGenerate={handleGenerate} handleCloseAI={handleCloseAI} />
        {loading && (
          <Box className="w-full h-[calc(100vh-52px)] absolute top-[70px] left-0 flex justify-center items-center z-10 bg-transparent opacity-100">
            <AutoRotatingCircularProgress />
          </Box>
        )}
      </Box>
      <PopUpPublish open={openPublish} handleOpenPublish={handleOpenPublish} />
    </Box>
  );
};

export default LandingPageEditor;
