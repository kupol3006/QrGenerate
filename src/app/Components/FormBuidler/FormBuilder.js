'use client';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useRouter, usePathname } from 'next/navigation';
import { IconButton, Modal, Box, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PublishIcon from '@mui/icons-material/Publish';
import { setData, postFormBuilderAsync } from '@/app/redux/slices/formBuilderSlice';
import { useDispatch, useSelector } from 'react-redux';
import FormPreview from './Preview';
import { GoogleGenerativeAI } from '@google/generative-ai';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoRotatingCircularProgress from '../LandingPage/GradientProgress';
import PublishPopUp from './Publish';
import { toast, Flip } from 'react-toastify';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default function FormBuidler({onBack}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [fieldType, setFieldType] = useState('');
  const [loading, setLoading] = useState(false);
  const [templateContentAI, setTemplateContentAI] = useState('');
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => setMessage(event.target.value);

  const saveFormBuilder = async () => {
    const editor = $('#fb-editor').data('formBuilder').actions.getData('json', true);

    if (editor === "[]") {
      return { message: "Empty form builder" };
    }

    const json = editor;

    // Tạo một Blob từ nội dung JSON
    const jsonBlob = new Blob([json], { type: 'application/json' });

    // Tạo dữ liệu formBuilder
    const formBuilder = {
        createdDate: new Date().toISOString(),
        lastModifiedDate: new Date().toISOString()
    };

    // Tạo FormData để gửi dữ liệu
    const formData = new FormData();
    formData.append('FormFile', jsonBlob, 'formBuilder.json');
    formData.append('CreatedDate', formBuilder.createdDate);
    formData.append('LastModifiedDate', formBuilder.lastModifiedDate);

    const dataRes = await dispatch(postFormBuilderAsync(formData));
    return dataRes.payload;
};
  
  
  const handleNavigate = () => {
    onBack();
  };

  const handleOpenPreview = () => {
    setOpen1(!open1);
  };

  const handlePreview = () => {
    dispatch(setData($('#fb-editor').data('formBuilder').actions.getData('json', true)));
    handleOpenPreview();
  };

  const handleOpenPublish = () => {
    setOpen3(!open3);
  };

  const handleOpenModal = (fieldType) => {
    setFieldType(fieldType);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCloseModal1 = () => {
    setOpen2(!open2);
  };

  const handleGetData = () => {
    console.log('URL:', url);
    console.log('Token:', token);
  
    // Gửi yêu cầu tới server và nhận về các giá trị
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ someData: 'value' }), // Tùy chỉnh nội dung request
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data from server:', data);
  
      let field;
      if (fieldType === 'Select') {
        field = {
          "type": "select",
          "required": false,
          "label": "Select",
          "className": "form-control",
          "name": `select-${Date.now()}-0`, // Tạo tên duy nhất
          "access": false,
          "multiple": false,
          "values": data.values // Sử dụng values từ phản hồi của server
        };
      } else if (fieldType === 'Radio') {
        field = {
          "type": "radio-group",
          "required": false,
          "label": "Radio Group",
          "className": "form-control",
          "name": `radio-group-${Date.now()}-0`, // Tạo tên duy nhất
          "access": false,
          "other": false,
          "values": data.values // Sử dụng values từ phản hồi của server
        };
      }
  
      const index = undefined; // Hoặc chỉ định một index cụ thể nếu cần
      $('#fb-editor').data('formBuilder').actions.addField(field, index);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      handleCloseModal(); // Đóng modal sau khi hoàn tất
    });
  };
  
  const handleGenerate = async (message) => {
    try {
      setLoading(true);
      setOpen2(false);
      const apiKey = 'AIzaSyBFJ-WbMfME6oYeU_gxmgiUqNO3rN9eNhw';
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
        `[{"type":"autocomplete","required":false,"label":"Autocomplete","className":"form-control","name":"autocomplete-1725704481123-0","access":false,"requireValidOption":false,"values":[{"label":"Option 1","value":"option-1","selected":true},{"label":"Option 2","value":"option-2","selected":false},{"label":"Option 3","value":"option-3","selected":false}]},{"type":"checkbox-group","required":false,"label":"Checkbox Group","toggle":false,"inline":false,"name":"checkbox-group-1725704486729-0","access":false,"other":false,"values":[{"label":"Option 1","value":"option-1","selected":true}]},{"type":"date","required":false,"label":"Date Field","className":"form-control","name":"date-1725704487275-0","access":false,"subtype":"date"},{"type":"file","required":false,"label":"File Upload","className":"form-control","name":"file-1725704487777-0","access":false,"multiple":false},{"type":"header","subtype":"h1","label":"Header","access":false},{"type":"hidden","name":"hidden-1725704488747-0","access":false},{"type":"number","required":false,"label":"Number","className":"form-control","name":"number-1725704489171-0","access":false,"subtype":"number"},{"type":"paragraph","subtype":"p","label":"Paragraph","access":false},{"type":"radio-group","required":false,"label":"Radio Group","inline":false,"name":"radio-group-1725704490193-0","access":false,"other":false,"values":[{"label":"Option 1","value":"option-1","selected":false},{"label":"Option 2","value":"option-2","selected":false},{"label":"Option 3","value":"option-3","selected":false}]},{"type":"select","required":false,"label":"Select","className":"form-control","name":"select-1725704490703-0","access":false,"multiple":false,"values":[{"label":"Option 1","value":"option-1","selected":true},{"label":"Option 2","value":"option-2","selected":false},{"label":"Option 3","value":"option-3","selected":false}]},{"type":"text","required":false,"label":"Text Field","className":"form-control","name":"text-1725704491143-0","access":false,"subtype":"text"},{"type":"textarea","required":false,"label":"Text Area","className":"form-control","name":"textarea-1725704491663-0","access":false,"subtype":"textarea"},{"type":"button","label":"Button","subtype":"button","className":"btn-default btn","name":"button-1725704493053-0","access":false,"style":"default"}]
        Tạo dữ liệu mẫu dựa theo mảng trên và chỉ trả về mảng (chỉ trả về kết quả trong dấu []) như trên và không cần giải thích gì thêm  không có kiểu type: email. Theo các yêu cầu sau: ` + message
      );

      const responseText = await result.response.text();
      // console.log(responseText);

      if (responseText) {
        setTemplateContentAI(responseText);
        console.log(templateContentAI);
        const cleanString = responseText
          .replace(/```/g, '')
          .replace('javascript', '')
          .replace('json', '')
          .trim(); // Loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
      $('#fb-editor').data('formBuilder').actions.setData(cleanString);
      setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('Error Details:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('jquery').then(($) => {
        window.$ = window.jQuery = $;
        return import('jquery-ui/ui/widgets/sortable');
      }).then(() => {
        return import('formBuilder');
      }).then(() => {
        return import('formBuilder/dist/form-render.min.js');
      }).then(() => {
        if (typeof $ === 'function') {
          $(function () {
            console.log("jQuery is ready!");

            const options = {
              showActionButtons: false,
              controlPosition: 'right',
              fieldRemoveWarn: true,
              scrollToFieldOnAdd: true,
            //   sortableControls: true,
              stickyControls: {
                enable: true,
                offset: {
                  top: 0,
                  right: 0,
                  left: 'auto'
                }
              },
            };

            const formBuilder = $('#fb-editor').formBuilder(options);
            console.log("formBuilder initialized:", formBuilder);
            formBuilder.actions.setLang('en');

            // Add field button functionality
            const buttons = document.getElementsByClassName('addFieldBtn');
            for (let i = 0; i < buttons.length; i++) {
              buttons[i].onclick = () => handleOpenModal(buttons[i].dataset.label);
            }

          });
        } else {
          console.error("jQuery is not loaded properly.");
        }
      }).catch((error) => {
        console.error("Error loading dependencies:", error);
      });
    }

  }, []);

  

  return (
    <>
    <div className='w-full 2xl:w-[86%] flex justify-center h-[calc(100vh-56px)]'>
      <div className='w-full flex flex-col relative'>
        <div className="mb-2 bg-transparent flex justify-between items-center px-0 py-1 rounded-lg">
          <IconButton
            onClick={() => handleNavigate()}
            className="text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px]"
          >
            <ArrowBackIcon />
          </IconButton>
          <div className="flex">
            <Button
              onClick={handleCloseModal1}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center"
              sx={{ backgroundColor: 'white', border: '1px solid black' }}
              startIcon={<SmartToyIcon />}
            >
              AI
            </Button>
            <Button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px]"
              // id="getXML"
              sx={{ backgroundColor: 'white', border: '1px solid black' }}
              onClick={()=>handlePreview()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Preview
            </Button>
            {/* <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px] addFieldBtn"
              data-label="Select"
            >
              Select Field
            </button> */}
            <Button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center addFieldBtn"
              style={{ backgroundColor: 'white', border: '1px solid black' }}
              aria-label="select"
              startIcon={<SelectAllIcon />}
            >
              API
            </Button>
            <Button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center addFieldBtn"
              style={{ backgroundColor: 'white', border: '1px solid black' }}
              aria-label="Radio"
              startIcon={<RadioButtonUncheckedIcon />}
            >
              API
            </Button>
            <Button
              className="bg-[#2196F3] text-white font-bold py-1 px-2 rounded-md shadow-xl flex items-center hover:bg-[#2196F3]"
              onClick={handleOpenPublish}
            >
              <PublishIcon className="h-5 w-5 mr-2" />
              Publish
            </Button>
          </div>
        </div>
        <PerfectScrollbar>
            <div id="fb-editor" className='w-full px-3 py-3 rounded-lg bg-white'></div>
        </PerfectScrollbar>
      </div>

      <Modal open={open} onClose={handleCloseModal}>
        <Box
          className="bg-white p-6 rounded-md shadow-lg"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
        >
          <h2 className="text-lg font-semibold mb-2">Enter URL and Token</h2>
          <Typography variant="body2" className="mb-2">URL</Typography>
          <TextField
            placeholder='https://example.com/api/data'
            fullWidth
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mb-4"
            size='small'
          />
          <Typography variant="body2" className="mb-2">Token</Typography>
          <TextField
            placeholder='Bearer token'
            fullWidth
            variant="outlined"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="mb-4"
            size='small'
          />
          <Typography variant="body2" className="mb-2">Data example from Server:</Typography>
          <Typography variant="body2" className="mb-2">
            {`values": [
                {
                  "label": "Option 1",
                  "value": "option-1",
                  "selected": false
                },
                {
                  "label": "Option 2",
                  "value": "option-2",
                  "selected": false
                }
              ]`
            }
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={handleGetData}
            className="float-right mt-2"
          >
            Get Data
          </Button>
        </Box>
      </Modal>
      <FormPreview open={open1} handleClose={handleOpenPreview} />
      <Modal open={open2} onClose={handleCloseModal1}>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8"
                style={{ width: 400 }}
            >
                <h2 className="text-2xl font-bold mb-4">Create landing page by AI</h2>
                <p className="text-gray-600 mb-4">
                    Create a landing page by AI with the following information
                </p>
                <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                    className="mb-4"
                />
                <div className="flex justify-end">
                    <Button variant="contained" color='secondary' onClick={()=>handleGenerate(message)} fullWidth sx={{ marginTop: '10px' }}>
                        Generate
                    </Button>
                   
                </div>
            </div>
      </Modal>
      <Modal open={loading}>
          <Box className='w-full h-screen flex justify-center items-center'>
            <AutoRotatingCircularProgress />
          </Box>
      </Modal>
      <PublishPopUp open={open3} handleOpenPublish={handleOpenPublish} saveFormBuilder={saveFormBuilder} />
    </div>
    </>
  );
}