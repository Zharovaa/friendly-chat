import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';

const ProfileStatus = ({ status }) => {
  const [localStatus, setLocalStatus] = useState('');
  const [editMode, setEditMode] = useState(false);

  const switchMode = () => {
    setEditMode(!editMode)
  }

  return (
    <Stack direction={'row'} spacing={2}>
      <TextField
        disabled={!editMode}
        variant="filled"
        label="Status"
        value={localStatus}
        onChange={(event) => setLocalStatus(event.target.value)}
      />
      <Button onCLick={switchMode} variant="contained">
        {editMode ? 'Save' : 'Edit'}
      </Button>
    </Stack>
  );
};

export default ProfileStatus;
