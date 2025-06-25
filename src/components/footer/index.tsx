import { Container } from "../container";
import logo from '../../assets/petlogLogo.png'

export function Footer(){
    return(
        <footer className="bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-white/90 w-full py-20" >
            <Container>
                <section className="py-16 ">
                    <div className=" flex items-center justify-center flex-col gap-2">
                        <img src={logo} alt="Logo PetLog" className="w-32" />
                        <h3 className='font-mochiy text-lg from-baseMenuText bg-gradient-to-r bg-orange-500 text-transparent bg-clip-text'>PetLog</h3>
                        <p className="text-baseMenuText font-poppins text-xs font-medium">Todos os Direitos Reservados | @2024</p>
                        
                    </div>
                </section>
            </Container>
        </footer>
    )
}