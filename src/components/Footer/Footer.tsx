import { Container, Image } from '@chakra-ui/react'
import { FC } from 'react'
import logo from '../../assets/images/logo2.svg'




const Footer: FC = () => {
    return (
        <>
            <Container bg='#C4C4C4'>
                <Image src={logo} />

            </Container>

        </>
    )
}

export { Footer }
