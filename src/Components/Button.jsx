import React from 'react'
import ButtonUI from '@mui/material/Button';

const Button = ({ label, buttonIcon, variant, onClick }) => {
    return (
        <ButtonUI
            size='small'
            component='label'
            role={undefined}
            color='primary'
            variant={variant}
            endIcon={buttonIcon}
            sx={{
                textTransform: 'none',
                fontSize: { xs: '11px', sm: '12px', md: '12px', lg: '14px' },
                padding: { xs: '2px 8px', sm: '4px 12px', md: '4px 12px', lg: '4px 10px' },
            }}
            onClick={onClick}
            data-aos-offset="10" data-aos-mirror="true" data-aos='flip-up' data-aos-delay="1000"
        >
            {label}
        </ButtonUI>
    )
}

export default Button