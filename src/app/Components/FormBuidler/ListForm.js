import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Publish,
  UnpublishedOutlined,
  Palette,
  Rule,
  Code,
  QrCode2,
  Visibility,
  FileCopy,
  Edit,
  MoreVert,
    Search,
} from '@mui/icons-material';


const initialForms = [
  {
    id: 1,
    title: 'Sample Form',
    status: 'Publish',
    createdAt: '2023-01-01',
    inCharge: { role: 'Admin', user: 'John Doe' },
  },
  {
    id: 2,
    title: 'Feedback Form',
    status: 'Un-publish',
    createdAt: '2023-02-15',
    inCharge: { role: 'Editor', user: 'Jane Smith' },
  },
];

const actionItems = [
  { name: 'Theme Setting', icon: <Palette /> },
  { name: 'Condition Rules', icon: <Rule /> },
  { name: 'Embed', icon: <Code /> },
  { name: 'Show QR Code', icon: <QrCode2 /> },
  { name: 'View Submitted Form', icon: <Visibility /> },
  { name: 'Clone', icon: <FileCopy /> },
  { name: 'Design Form', icon: <Edit /> },
];

export default function FormManagementTable() {
    const [forms, setForms] = useState(initialForms);
    const [filteredForms, setFilteredForms] = useState(initialForms);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [formToUpdateStatus, setFormToUpdateStatus] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = forms.filter(form => 
      form.title.toLowerCase().includes(lowercasedQuery) ||
      form.status.toLowerCase().includes(lowercasedQuery) ||
      form.createdAt.includes(lowercasedQuery) ||
      form.inCharge.role.toLowerCase().includes(lowercasedQuery) ||
      form.inCharge.user.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredForms(filtered);
  }, [searchQuery, forms]);

  const handleStatusClick = (form) => {
    setFormToUpdateStatus(form);
    setStatusDialogOpen(true);
  };

  const handleStatusConfirm = () => {
    if (formToUpdateStatus) {
      setForms(forms.map(f => 
        f.id === formToUpdateStatus.id 
          ? { ...f, status: f.status === 'Publish' ? 'Un-publish' : 'Publish' } 
          : f
      ));
    }
    setStatusDialogOpen(false);
    setFormToUpdateStatus(null);
  };

  const handleStatusCancel = () => {
    setStatusDialogOpen(false);
    setFormToUpdateStatus(null);
  };

  const handleActionClick = (event, form) => {
    setAnchorEl(event.currentTarget);
    setSelectedForm(form);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedForm(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='px-6'>
      
      <TableContainer component={Paper} className="w-full shadow-lg 2xl:w-[86%]">
      <div className="mx-6 my-4">
        <TextField
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            size='small'
            InputProps={{
            startAdornment: (
                <Search className="text-gray-500" />
            ),
            sx: {
                borderRadius: '5px',
            },
            }}
            onChange={handleSearchChange}
        >
        </TextField>
      </div>
        <Table className="min-w-full">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>In-charge</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredForms.map((form) => (
              <TableRow key={form.id} className="hover:bg-gray-50">
                <TableCell>{form.id}</TableCell>
                <TableCell>{form.title}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleStatusClick(form)}
                    className={`px-2 py-1 rounded ${
                      form.status === 'Publish' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                    aria-label={`Change status to ${form.status === 'Publish' ? 'Un-publish' : 'Publish'}`}
                  >
                    {form.status === 'Publish' ? <Publish fontSize="small" /> : <UnpublishedOutlined fontSize="small" />}
                    {form.status}
                  </button>
                </TableCell>
                <TableCell>{form.createdAt}</TableCell>
                <TableCell>{`${form.inCharge.role} | ${form.inCharge.user}`}</TableCell>
                <TableCell>
                  <IconButton 
                    onClick={(e) => handleActionClick(e, form)}
                    aria-label="More actions"
                  >
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {actionItems.map((item) => (
          <MenuItem key={item.name} onClick={handleClose}>
            <Tooltip title={item.name} arrow>
              <IconButton size="small" className="mr-2" aria-label={item.name}>
                {item.icon}
              </IconButton>
            </Tooltip>
            {item.name}
          </MenuItem>
        ))}
      </Menu>

      <Dialog open={statusDialogOpen} onClose={handleStatusCancel}>
        <DialogTitle>Change Status</DialogTitle>
        <DialogContent>
          Do you want to {formToUpdateStatus?.status === 'Publish' ? 'Un-publish' : 'Publish'} this form?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleStatusCancel}>Cancel</Button>
          <Button onClick={handleStatusConfirm} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}