import { Box, Image, Center, SimpleGrid, Text } from '@chakra-ui/react'
import { FC } from 'react'

const Reviews: FC = () => {
    return (
        <>

            <Center>
                <Text fontSize="53px" fontWeight="500">Hear out  what is said about us</Text>
            </Center>

            <SimpleGrid minChildWidth='120px' spacing='40px' mx='15%' fontWeight='400'>

                <Box height='469px' w='593px' border='2px solid black'>
                    <Center>
                        <Image src="https://picsum.photos/200" borderRadius='50%' my='6%' alt='reviews' />
                    </Center>
                    <Text fontSize="34px" px='3%'>
                        I was looking to buy laptop but I was confused.Thanks to save on shopping team to help me.
                    </Text>
                </Box>

                <Box height='469px' w='593px' border='2px solid black'>
                    <Center>
                        <Image src="https://picsum.photos/200" borderRadius='50%' my='6%' alt='reviews' />
                    </Center>
                    <Text fontSize="34px" px='3%'>
                        Thanks to save on shopping.in .The best platform I have seen helped me to find best deal and save money.

                    </Text>
                </Box>



            </SimpleGrid>



        </>
    )
}

export { Reviews }
