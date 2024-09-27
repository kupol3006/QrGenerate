'use client'

import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
  Typography
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function FormCreator({ onBack, onNext }) {
  return (
    <>

      <div className="w-full 2xl:w-[86%] h-[calc(100vh-56px)]">

        {/* <div className="flex justify-between items-center mb-4">
          <Typography variant="h5" className="font-bold text-primary">
            Create Form - Step 2
          </Typography>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader title="Form Info" className='pb-0' />
            <CardContent className="space-y-2">
              <TextField fullWidth label="Form Title" variant="outlined" size='small' />
              <TextField
                fullWidth
                label="Success Message"
                variant="outlined"
                multiline
                rows={2}
                size='small'
              />
              <TextField
                fullWidth
                label="Thanks Message"
                variant="outlined"
                multiline
                rows={2}
                size='small'
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Email Settings" className='pb-0' />
            <CardContent className="space-y-2">
              <TextField fullWidth label="Recipient Emails" variant="outlined" size='small' />
              <TextField fullWidth label="Cc Emails (Optional)" variant="outlined" size='small' />
              <TextField fullWidth label="Bcc Emails (Optional)" variant="outlined" size='small' />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Password Protection" className='pb-0' />
            <CardContent>
              <RadioGroup defaultValue="no" name="password-protection">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                className="mt-4"
                size='small'
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Set End Date" className='pb-0' />
            <CardContent>
              <RadioGroup defaultValue="no" name="set-end-date">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <TextField
                fullWidth
                label="End Date"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                className="mt-4"
                size='small'
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Assign Form" />
            <CardContent className="space-y-4">
              <FormControl fullWidth>
                <InputLabel id="assign-form-label" size='small'>Role | User</InputLabel>
                <Select
                  labelId="assign-form-label"
                  label="Role | User"
                  defaultValue=""
                  size='small'
                >
                  <MenuItem value="role">Role</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={<Switch />}
                label="Select Multiple"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Allow Share Section" className='pb-0' />
            <CardContent>
              <RadioGroup defaultValue="no" name="allow-share">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-4">
          <CardHeader title="Form Steps" className='pb-0' />
          <CardContent className="space-y-2">
            <Typography variant="body2" className="mb-2">
              cho phép tạo nhiều step, mỗi step sẽ có một hoặc nhiều element field
            </Typography>
            <TextField fullWidth label="Form Step ID" variant="outlined" size='small' />
            <TextField fullWidth label="Form Step Name" variant="outlined" size='small' />
            <TextField
              fullWidth
              label="Form Step Description"
              variant="outlined"
              multiline
              rows={2}
              size='small'
            />
            <FormControl fullWidth>
              <InputLabel id="form-step-status-label" size='small'>Form Step Status</InputLabel>
              <Select
                labelId="form-step-status-label"
                label="Form Step Status"
                defaultValue=""
                size='small'
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Form Step Ordering"
              type="number"
              variant="outlined"
              helperText="sắp xếp thứ tự trước sau của mỗi step"
              size='small'
            />
          </CardContent>
        </Card>

        <div className="mt-4 flex justify-between">
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={onNext}>
            Next
          </Button>
        </div>

      </div>
    </>
  )
}