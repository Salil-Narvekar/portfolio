import React from 'react'
import TextField from '@mui/material/TextField';

const InputField = ({ label, textArea, onChange, validationMessage, error }) => {
    return (
        !textArea ?
            <TextField
                className='bg-indigo-200 rounded-lg '
                error={error}
                label={label}
                variant="outlined"
                color='none'
                fullWidth
                onChange={onChange}
                helperText={validationMessage}
            />
            :
            <TextField
                className='bg-indigo-200 rounded-lg'
                error={error}
                label={label}
                variant="outlined"
                color='none'
                multiline
                minRows={4}
                maxRows={5}
                fullWidth
                onChange={onChange}
                helperText={validationMessage}
            />
    )
}

export default InputField