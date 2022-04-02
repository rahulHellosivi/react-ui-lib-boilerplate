import React from 'react'
import { Box, Text } from 'grommet'
import { BackButtonPropTypes } from './propTypes'

const BackButton: React.FC<{ label: string }> = ({ label }) => {
    return (
        <Box>
            <Text>{label}</Text>
        </Box>
    )
}

BackButton.propTypes = BackButtonPropTypes

export {
    BackButton
}