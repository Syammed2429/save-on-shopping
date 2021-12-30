import { FC } from 'react'
import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import { SiMessenger } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsTelegram } from 'react-icons/bs'





const SocialMedia: FC = () => {
    return (
        <>
            <Container mt="45rem" centerContent background='#FFD304' mx='5%' borderRadius='15px'>
                <Text fontSize="46px" >Join hundreds  of smart shoppers</Text>
                <Box position="relative" bottom="40px">
                    <Stack direction="row" align="center" fontSize="83px" spacing='78px' >
                        <FaFacebookF />
                        <BsInstagram />
                        <SiMessenger />
                        <BsWhatsapp />
                        <BsTelegram />
                    </Stack>
                </Box>
            </Container>

        </>
    )
}

export { SocialMedia }
