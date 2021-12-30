import React from 'react'
import { Image, Box } from '@chakra-ui/react'
import section from '../../assets/images/working-section.svg'
import shop from '../../assets/images/shop.svg'


const Connect = () => {
    return (
        <>
            <Box mt='35%' mb='-75%'>
                <Image src={section} alt='section' w='100%' />
                <Image pos='relative' bottom='60rem' left='50%' w='55rem' h='50rem' src={shop} alt='shop' />

            </Box>
        </>
    )
}

export { Connect }
