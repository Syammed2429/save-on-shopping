import React, { FC } from 'react'
import logo from '../../assets/images/logo2.svg'
import { Flex, Text, Image, Spacer, Box } from '@chakra-ui/react'
import './navbar.css'



const Navbar: FC = () => {
    return (
        <>



            <div>

                <Box className="bg" h='126px' pos='fixed' top='0' left='0' right='0' z-index='555'>

                    <Flex >
                        <Box w='70px' h='10'  >
                            <Image w='500px' h='128px' src={logo} alt='saveOnShopping' />

                        </Box>
                        <Spacer />
                        <Flex
                            w='48%'
                            justify='space-between'
                            fontSize='42px'
                            mr='50px'
                            color='white'
                            fontWeight='bold'
                        >

                            <Box w='25%' h='10'  >
                                <Text>Home</Text>
                            </Box>
                            <Spacer />

                            <Box w='25%' h='10'  >
                                <Text>About us</Text>

                            </Box>
                            <Spacer />
                            <Box w='25%' h='10'  >
                                <Text >Contact us</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box >
            </div >

        </>
    )
}

export { Navbar }
