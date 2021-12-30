import { Box, Container, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { FC } from 'react'
import logo from '../../assets/images/logo2.svg'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'




const Footer: FC = () => {
    return (
        <>
            <Container bg='#C4C4C4' h='250px' pos='absolute' left='0' right='0' mt='25px' >

                <SimpleGrid columns={3} spacingX='40px' spacingY='-50px'>
                    <Box height='80px'>
                        <Image src={logo} alt='footer logo' />

                    </Box>
                    <Box height='80px' fontSize='33px' >
                        <Text>About us</Text>
                        <Text>Contact us</Text>
                        <Text>Advertisement</Text>
                    </Box>
                    <Box height='80px'>

                        <Text fontSize='52px' fontWeight='bold' mt='2%'> Follow us on</Text>
                        <Flex fontSize='44px' gap='10%' mx='15%'>
                            <BsInstagram />
                            <FaFacebookF />
                        </Flex>
                    </Box>

                </SimpleGrid>

            </Container>

        </>
    )
}

export { Footer }
