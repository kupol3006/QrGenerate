import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  ThemeProvider,
  createTheme,
  Box,
  Grid
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default function FormCreatorStep1({ onNext }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const templates = [
    "Ticketing For Event",
    "Hotel Booking",
    "Restaurant Reservation (Đặt bàn)",
    "Product Survey",
    "Website Survey",
    "Quality Survey"
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'scratch') {
      setSelectedTemplate('');
    }
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    setSelectedOption('template');
  };

  return (
    <ThemeProvider theme={theme}>
      <Card className="w-[95%] 2xl:w-[86%] shadow-sm rounded-lg overflow-hidden">
        {/* <CardHeader 
          title={<Typography variant="h5" className="font-bold text-primary">Create Form - Step 1</Typography>}
          className="border-b border-gray-200 p-4"
        /> */}
        <CardContent className="space-y-4 p-3">
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            <Box className="bg-white p-2 rounded-md shadow-sm mb-6 hover:shadow-md transition-shadow duration-300">
              <FormControlLabel
                value="scratch"
                control={<Radio color="primary" />}
                label={<Typography variant="h6" className="font-semibold">Start From Scratch</Typography>}
                className="mb-2"
              />
              <Typography variant="body2" className="text-gray-600 ml-8">
                Begin with a blank canvas and create your form from the ground up.
              </Typography>
            </Box>
            <Box className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
              <FormControlLabel
                value="template"
                control={<Radio color="primary" />}
                label={<Typography variant="h6" className="font-semibold">Use Form Template</Typography>}
                className="mb-2"
              />
              <Typography variant="body2" className="text-gray-600 ml-8 mb-4">
                Choose from our pre-designed templates to get started quickly.
              </Typography>
              <Grid container spacing={2} className="mt-2">
                {templates.map((template) => (
                  <Grid item xs={12} sm={6} key={template}>
                    <Button
                      variant={selectedTemplate === template ? "contained" : "outlined"}
                      color="primary"
                      fullWidth
                      onClick={() => handleTemplateChange(template)}
                      className="normal-case text-left justify-start h-full"
                    >
                      <Typography variant="body2">{template}</Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </RadioGroup>
          <Box className="flex justify-end mt-8">
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForward />}
              className=" text-lg font-semibold transition-all hover:shadow-lg mr-1"
              disabled={!selectedOption || (selectedOption === 'template' && !selectedTemplate)}
              onClick={onNext}
              size='small'
            >
              Next
            </Button>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}