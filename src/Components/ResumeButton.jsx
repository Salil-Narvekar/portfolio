import React from 'react'
import Button from '@mui/material/Button';
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
import resumeUrl from '../Urls/resumeUrl';

const ResumeButton = () => {
    return (
        <Button
            size='small'
            component="label"
            role={undefined}
            variant="contained"
            startIcon={<DownloadingRoundedIcon />}
            sx={{
                textTransform: 'none',
                fontSize: { xs: '11px', sm: '12px', md: '12px', lg: '14px' },
                padding: { xs: '2px 8px', sm: '4px 12px', md: '4px 12px', lg: '4px 10px'},
                backgroundColor: '#482577'
            }}
            onClick={() => window.open(resumeUrl)}
            data-aos='flip-up'
        >
            View / Download Resume
        </Button>
    )
}

export default ResumeButton