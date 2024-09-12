import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from 'react';

const FormPreview = ({ open, handleClose }) => {
  const data = useSelector((state) => state.formBuilder.data);
  const fbTemplateRef = useRef(null);
  const formRenderRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && data) {
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
              formData: data,
              dataType: 'json',
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
  }, [data]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (formRenderRef.current) {
//       const userData = formRenderRef.current.userData;
//       console.log("User Data:", userData);
//       // Handle the user data as needed
//     }
//   };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        height: 'calc(100vh - 5%)',
        // minWidth: '2200px',
        // margin: '0 auto'
      }}
    >
      <DialogTitle className="bg-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Form preview</span>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent
        className="bg-[url(https://upload.wikimedia.org/wikipedia/commons/9/9f/Graph-paper.svg)] overflow-x-hidden"
        style={{ backgroundSize: '10px 10px', width: '100%', height: 'calc(100vh - 10%)' }}
      >
        <div className="w-[527px] mt-5 bg-white rounded-[7px] px-2 py-4">
          <textarea id="fb-template" ref={fbTemplateRef} style={{ display: 'none' }} defaultValue={data}></textarea>
          <form id="rendered-form">
            <div className="fb-render"></div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormPreview;