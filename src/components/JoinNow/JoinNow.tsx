import { FC } from 'react'
import { Text, Image, Grid, GridItem } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import bag from '../../assets/images/bag.svg'


const JoinNow: FC = () => {
    return (
        <>

            <Grid mt='10%' gap={5}>
                <GridItem colStart={2} colSpan={6} h='10'  >
                    <Image w='716px' h='590.72px' src={bag} alt='shopping-bag' />

                </GridItem>
                <GridItem colStart={8} colEnd={6} h='10'>
                    <Text fontSize='49px' color='#14213D' w='450px' fontWeight='bold'>Got Stuck between what to buy???</Text>
                    <Text color='#000000' w='487px' fontSize='35px'>
                        No worries,we help you to choose the best product and save money</Text>
                    <Button background='#3B86FF' w='491px' h='107px' borderRadius='10px'>
                        <Text fontSize='56px' color='#ffff'>
                            Join now
                        </Text>
                    </Button>

                </GridItem>
            </Grid>

        </>
    )
}

export { JoinNow }
