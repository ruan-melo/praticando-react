import { Button } from "../../Components/Button"
import { Main } from "../../Components/Main"
import {Container} from './style'

export const Home = () => {
    return (
        <Main>
            <Container>
                <div className = 'clock'>
                    <div className='clock-center'>
                        <div className= 'clock-point'/>
                    </div>
                </div>
                <h3>Neodoro</h3>
                <Button><span>Iniciar</span></Button>
            </Container>
           
        </Main>
    )
}