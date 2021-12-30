import { Box, Container, Flex, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import logo from '../../assets/images/logo2.svg'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'




const Footer: FC = () => {
    return (
        <>
            {/* <VStack bg='#C4C4C4' > */}
            <Container bg='#C4C4C4' h='250px' pos='absolute' left='0' right='0' mt='25px' >

                <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
                    <Box height='80px'>
                        <Image src={logo} />

                    </Box>
                    <Box height='80px'>
                        <Stack >
                            <Text>About us</Text>
                            <Text>Contact us</Text>
                            <Text>Advertisement</Text>
                        </Stack >
                    </Box>
                    <Box height='80px'>
                        <Text>Follow us on</Text>
                        <Flex>
                            <FaFacebookF />
                            <BsInstagram />
                        </Flex>
                    </Box>

                </SimpleGrid>

            </Container>
            {/* </VStack> */}

        </>
    )
}

export { Footer }
