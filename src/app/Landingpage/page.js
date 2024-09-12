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
import { useSelector, useDispatch } from 'react-redux';
import { postLandingPageAsync } from '../redux/slices/landingPageSlice';
import { toast, Flip } from 'react-toastify';

const LandingPageEditor = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const landingPageDatas = useSelector((state) => state.landingPage.landingPageDatas);

  const [editor, setEditor] = useState(null);
  const [templates, setTemplates] = useState(landingPageDatas);
  const [templateContentAI, setTemplateContentAI] = useState('');
  const [templateStyleAI, setTemplateStyleAI] = useState('');
  const [templateHtml, setTemplateHtml] = useState('');
  const [templateCss, setTemplateCss] = useState('');
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
          },
        })

        setEditor(editorInstance);
      }
    };

    loadGrapesJS();
  }, []);
  

  const saveLandingPage = async () => {
    if (editor) {
        const html = editor.getHtml();
        const css = editor.getCss();

        // Tạo một Blob từ nội dung HTML và CSS
        const htmlBlob = new Blob([html], { type: 'text/html' });
        const cssBlob = new Blob([css], { type: 'text/css' });

        // Tạo dữ liệu landingPage
        const landingPage = {
            createdDate: new Date().toISOString(),
            lastModifiedDate: new Date().toISOString()
        };
        
        console.log("date" + landingPage.createdDate);
        console.log("date" + landingPage.lastModifiedDate);

        // Tạo FormData để gửi dữ liệu
        const formData = new FormData();
        formData.append('HtmlFile', htmlBlob, 'content.html');
        formData.append('CssFile', cssBlob, 'style.css');
        formData.append('CreatedDate', landingPage.createdDate);
        formData.append('LastModifiedDate', landingPage.lastModifiedDate);

        const dataRes = await dispatch(postLandingPageAsync(formData));
        return dataRes.payload;
    }
  };

  const handleTemplateClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTemplateClose = (template) => {
    if (template && editor) {
      editor.setComponents(template.content);
      editor.setStyle(template.style);
      setTemplateHtml(template.content);
      setTemplateCss(template.style);
      console.log('HTML:', templateHtml);
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
        `${templateHtml}
        Giữ nguyên cấu trúc đoạn code chỉ cần trả về thẻ <body> không cần thẻ <html> hay <head>. Chỉ trả kết quả là đoạn code trong thẻ <body>, theo format <body>”nội dung”</body> không cần giải thích gì thêm. Với yêu cầu sau: ` + message
      );

      const responseText = await result.response.text();
      console.log(responseText);

      if (responseText) {
        setTemplateContentAI(responseText);
        console.log(templateContentAI);

        if (editor) {
          editor.setComponents(responseText);
          editor.setStyle(`${templateCss}`);
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
              onClick={handleOpenPublish}
              sx={{
                color: '#DAE5E6',
                '&:hover': {
                  backgroundColor: '#2F343E',
                },
              }}
            >
              <PublishIcon />
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
            {/* <IconButton
              sx={{
                color: '#DAE5E6',
                '&:hover': {
                  backgroundColor: '#2F343E',
                },
              }}
              onClick={() => handleOpenPublish()}
            >
              <PublishIcon />
            </IconButton> */}
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
      <PopUpPublish open={openPublish} handleOpenPublish={handleOpenPublish} saveLandingPage={saveLandingPage} />
    </Box>
  );
};

export default LandingPageEditor;
