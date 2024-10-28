import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Warning } from 'postcss';
import { capitalize } from '@mui/material';

const InputField = ({ label, textArea, name, id, onChange, validationMessage, error, warning }) => {
    return (
        !textArea ?
            <TextField
                name={name}
                id={id}
                label={label}
                onChange={onChange}
                helperText={validationMessage}
                error={error}
                className='bg-indigo-200 rounded-lg'
                sx={{
                    "& .MuiInputBase-input": {
                        textTransform: name !== 'email' ? 'capitalize' : 'none',
                    }
                }}
                color={warning === null ? `none` : !warning ? `warning` : warning && `success`}
                variant="outlined"
                fullWidth
            />
            :
            <TextField
                name={name}
                id={id}
                label={label}
                multiline
                minRows={4}
                maxRows={5}
                onChange={onChange}
                helperText={validationMessage}
                error={error}
                className='bg-indigo-200 rounded-lg'
                variant="outlined"
                color='none'
                fullWidth
            />
    )
}

export default InputField