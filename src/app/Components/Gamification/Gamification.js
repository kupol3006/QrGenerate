import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  IconButton,
} from "@mui/material";
import { Edit, Save } from "@mui/icons-material";

const initialNames = [
  "Ali",
  "Beatriz",
  "Charles",
  "Diya",
  "Eric",
  "Fatima",
  "Gabriel",
  "Hanna",
];

export default function NameList() {
  const [names, setNames] = useState(initialNames);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [newName, setNewName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");

  const handleShuffle = () => {
    const shuffled = [...names].sort(() => 0.5 - Math.random());
    setNames(shuffled);
  };

  const handleSort = () => {
    const sorted = [...names].sort();
    setNames(sorted);
  };

  const handleAdvancedChange = () => {
    setIsAdvanced(!isAdvanced);
  };

  const handleAddName = () => {
    if (newName.trim() !== "") {
      setNames([...names, newName]);
      setNewName("");
    }
  };

  const handleEditName = (index) => {
    setEditIndex(index);
    setEditName(names[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedNames = [...names];
    updatedNames[index] = editName;
    setNames(updatedNames);
    setEditIndex(null);
    setEditName("");
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
        <div className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox checked={isAdvanced} onChange={handleAdvancedChange} />
            }
            label="Hide"
          />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <TextField
          variant="outlined"
          label="Add Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="flex-grow"
        />
        <Button variant="contained" onClick={handleAddName}>
          Add
        </Button>
        <Button
          variant="contained"
          startIcon={<span className="material-icons">shuffle</span>}
          onClick={handleShuffle}
        >
          Shuffle
        </Button>
        <Button
          variant="contained"
          startIcon={<span className="material-icons">sort</span>}
          onClick={handleSort}
        >
          Sort
        </Button>
        {/* <Button
          variant="outlined"
          disabled={!isAdvanced}
          className={isAdvanced ? "" : "opacity-50 cursor-not-allowed"}
        >
          Advanced
        </Button> */}
      </div>

      <div className="p-4 border rounded-lg h-64 overflow-y-auto">
        <ul>
          {names.map((name, index) => (
            <li key={index} className="mb-2 flex items-center">
              {editIndex === index ? (
                <TextField
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  variant="outlined"
                  size="small"
                />
              ) : (
                <span>{name}</span>
              )}
              {editIndex === index ? (
                <IconButton
                  onClick={() => handleSaveEdit(index)}
                  size="small"
                  color="primary"
                >
                  <Save />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => handleEditName(index)}
                  size="small"
                  color="secondary"
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
