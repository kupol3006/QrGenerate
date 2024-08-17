import { useState, useRef } from "react";
import {
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { Edit, Save } from "@mui/icons-material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageIcon from '@mui/icons-material/Image';

export default function NameList({ initialNames, onNamesChange, onRemainingSpinsChange, initialRemainingSpins }) {
  const [names, setNames] = useState(initialNames);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState(null);
  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);
  const [remainingSpins, setRemainingSpins] = useState(initialRemainingSpins);

  const handleShuffle = () => {
    const shuffled = [...names].sort(() => 0.5 - Math.random());
    setNames(shuffled);
    onNamesChange(shuffled);
  };

  const handleSort = () => {
    const sorted = [...names].sort((a, b) => a.option.localeCompare(b.option));
    setNames(sorted);
    onNamesChange(sorted);
  };

  const handleAddName = () => {
    if (newName.trim() !== "") {
      const newNames = [
        ...names,
        {
          option: newName,
          image: newImage || { 
            uri: "https://via.placeholder.com/50",
            offsetX: 0, 
            offsetY: 0, 
            sizeMultiplier: 1, 
            landscape: false 
          },
          style: { borderRadius: "50%" },
          optionSize: 14,
        },
      ];
      setNames(newNames);
      onNamesChange(newNames); 
      setNewName("");
      setNewImage(null);
    }
  };

  const handleEditName = (index) => {
    setEditIndex(index);
    setEditName(names[index].option);
    setEditImage(null);
  };

  const handleSaveEdit = (index) => {
    const updatedNames = [...names];
    const imageUrl = editImage ? URL.createObjectURL(editImage) : names[index].image.uri;
    updatedNames[index] = {
      option: editName,
      image: { uri: imageUrl, offsetX: names[index].image.offsetX, offsetY: names[index].image.offsetY, sizeMultiplier: names[index].image.sizeMultiplier, landscape: names[index].image.landscape },
      style: names[index].style,
      optionSize: names[index].optionSize,
    };
    setNames(updatedNames);
    onNamesChange(updatedNames);
    setEditIndex(null);
    setEditName("");
    setEditImage(null);
  };

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 50;
        canvas.height = 50;
        ctx.drawImage(img, 0, 0, 50, 50);
        const resizedImageURL = canvas.toDataURL(file.type);
        setImage({ uri: resizedImageURL });
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const triggerFileInput = (fileInputRef) => {
    fileInputRef.current.click();
  };

  const handleRemainingSpinsChange = (event) => {
    const newSpins = parseInt(event.target.value, 10);
    setRemainingSpins(newSpins);
    onRemainingSpinsChange(newSpins); 
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="font-bold mr-2">Entries</span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {names.length}
          </span>
        </div>
      </div>

      <div className="flex flex-col mb-4 gap-2">
        <div>
        <TextField
          variant="outlined"
          label="Add Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="flex-grow"
          size="small"
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleImageChange(e, setNewImage)}
        />
        <IconButton variant="contained" onClick={() => triggerFileInput(fileInputRef)} >
          <ImageIcon />
        </IconButton>
        <IconButton variant="contained" onClick={handleAddName}>
          <AddIcon />
        </IconButton>
        </div>
        <div>
        <TextField
          label="Remaining Spins"
          type="number"
          value={remainingSpins}
          onChange={handleRemainingSpinsChange}
          variant="outlined"
          size="small"
          // sx={{ width: 120 }}
        />
        <IconButton
          variant="contained"
          onClick={handleShuffle}
        >
          <ShuffleIcon />
        </IconButton>
        <IconButton
          variant="contained"
          onClick={handleSort}
        >
          <SortIcon />
        </IconButton>
        
        </div>
      </div>

      <div className="p-4 border rounded-lg h-64 overflow-y-auto">
        <ul>
          {names.map((item, index) => (
            <li key={index} className="mb-2 flex items-center">
              <div style={{ transform: `scale(${item.image.sizeMultiplier || 1}) translate(${item.image.offsetX || 0}px, ${item.image.offsetY || 0}px)` }}>
                <img
                  src={item.image.uri}
                  alt={item.option}
                  className="w-8 h-8 mr-1"
                  style={item.style}
                />
              </div>
              {editIndex === index ? (
                <>
                  <TextField
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    variant="outlined"
                    size="small"
                    className="flex-grow mr-2"
                    sx={{ width: 120 }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={editFileInputRef}
                    style={{ display: "none" }}
                    onChange={(e) => handleImageChange(e, setEditImage)}
                  />
                  <IconButton
                    variant="contained"
                    onClick={() => triggerFileInput(editFileInputRef)}
                  >
                    <AddPhotoAlternateIcon />
                  </IconButton>
                </>
              ) : (
                <span style={{ fontSize: item.optionSize }}>{item.option}</span>
              )}
              {editIndex === index ? (
                <IconButton
                  onClick={() => handleSaveEdit(index)}
                  size="small"
                >
                  <Save />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => handleEditName(index)}
                  size="small"
                  color="primary"
                >
                  <Edit />
                </IconButton>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}