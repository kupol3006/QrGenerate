'use client';
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFormBuilderAsync, postFormUserDataAsyn, putScanCountAsync } from '../../redux/slices/formBuilderSlice';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";
import ReactLoading from 'react-loading';
import { toast, Flip } from 'react-toastify';
import { Box, Typography } from '@mui/material';

export default function FormPage() {
  const fbTemplateRef = useRef(null);
  const formRenderRef = useRef(null);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formBuilder.dataForm);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  let dataFormContent = null;
  if (dataForm?.formFileContent) {
    try {
      dataFormContent = JSON.parse(dataForm.formFileContent);
    } catch (error) {
      console.error('Invalid JSON in formFileContent:', error);
    }
  }



  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathSegments = window.location.pathname.split('/');
      const formId = pathSegments[pathSegments.length - 1];
      setId(formId);
      console.log('Form ID:', formId);
    }
    const tokenEndUser = Cookies.get('tokenEndUser');
    if (!tokenEndUser) {
      // Lưu trữ URL gốc
      localStorage.setItem('redirectUrl', window.location.href);
      router.push('/FormBuilder/Login');
    }else{
      setIsLoading(true);
    }
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getFormBuilderAsync(id));
      dispatch(putScanCountAsync(id));
      console.log('Dispatched actions for ID:', id);
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (typeof window !== 'undefined' && dataFormContent) {
      import('jquery').then(($) => {
        window.$ = window.jQuery = $;
        return import('jquery-ui/ui/widgets/sortable');
      }).then(() => {
        return import('formBuilder');
      }).then(() => {
        return import('formBuilder/dist/form-render.min.js');
      }).then(() => {
        if (typeof $ === 'function') {
          $(function() {
            console.log("jQuery is ready!");

            formRenderRef.current = $('.fb-render').formRender({
              formData: dataFormContent,
              dataType: 'json'
            });

            // Add Bootstrap classes to form elements
            $('#rendered-form').addClass('formbuilder-embedded-bootstrap');
            $('#rendered-form .form-control').addClass('mb-3');
            $('#rendered-form .btn').addClass('btn-default');
            $('#rendered-form .form-group').addClass('mb-3');
            $('#rendered-form .form-check-input').addClass('mb-3');
            $('#rendered-form .form-check-label').addClass('form-check-label');
            $('#rendered-form .form-select').addClass('mb-3');
            $('#rendered-form .form-label').addClass('mb-3');
            $('#rendered-form .input-group').addClass('mb-3');
            $('#rendered-form .input-group-text').addClass('mb-3');
            $('#rendered-form .form-floating').addClass('mb-3');
            $('#rendered-form .form-range').addClass('mb-3');
            $('#rendered-form .form-switch').addClass('mb-3');
            $('#rendered-form .form-text').addClass('mb-3');
            $('#rendered-form .form-file').addClass('mb-3');
            $('#rendered-form .form-control-plaintext').addClass('mb-3');
            $('#rendered-form .form-control-sm').addClass('mb-3');
            $('#rendered-form .form-control-lg').addClass('mb-3');
            $('#rendered-form textarea').addClass('form-control mb-3');
            $('#rendered-form label').addClass('form-label');
          });
        } else {
          console.error("jQuery is not loaded properly.");
        }
      }).catch((error) => {
        console.error("Error loading dependencies:", error);
      });
    }
  }, [dataFormContent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formRenderRef.current) {
      const userData = formRenderRef.current.userData;
      const userJsonString = JSON.stringify(userData);
      console.log("User Data:", userJsonString);
      // Handle the user data as needed
      const tokenEndUser = Cookies.get('tokenEndUser');
      if (tokenEndUser) {
        const decoded = jwtDecode(tokenEndUser);
        console.log("Decoded token:", decoded);
        const jsonBlob = new Blob([userJsonString], { type: 'application/json' });
        const formData = new FormData();
        formData.append('FileSubmission', jsonBlob, 'submission.json');
        formData.append('FormBuilderId', dataForm?.formBuilderId);
        formData.append('EndUserId', decoded.sub);
        const dataRes = await dispatch(postFormUserDataAsync(formData));
        if(dataRes?.payload?.message === "Form submitted successfully"){
          setIsSubmitted(true);
        }
      }
    }
  };

  return (
    <>
    {isLoading ? (
      isSubmitted ? (
        <Box className='w-full h-screen flex justify-center items-center'>
          <Box
            sx={{
              bgcolor: 'white',
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Form submitted
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Thank you for submitting the form, you can close this page now.
            </Typography>
          </Box>
        </Box>
      ) : (
        <div className='w-full min-h-screen max-h-[3000vh] flex justify-center items-center bg-[#E2EEE0]'>
          <div className="lg:w-[60%] bg-white p-6 rounded-xl shadow-2xl my-4 mx-4">
            <textarea id="fb-template" ref={fbTemplateRef} style={{ display: 'none' }} defaultValue={dataFormContent}></textarea>
            <form id="rendered-form" onSubmit={handleSubmit}>
              <div className="fb-render"></div>
            </form>
          </div>
        </div>
      )
    ) : (
      <div className='w-full h-screen flex justify-center items-center'>
        <ReactLoading type={"spinningBubbles"} color={"#000000"} height={"5%"} width={"5%"} />
      </div>
    )}
  </>
    
  );
}