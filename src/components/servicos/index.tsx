import serviceTosa from '../../assets/servicestosa.png';
import serviceDog from '../../assets/servicesdog.png';
import serviceCat from '../../assets/servicescat.png';
import serviceBird from '../../assets/servicesbird.png';
import { Link } from 'react-router';
import { Container } from '../container';

export function MeusServicos() {
    return (
        <main className='border-b-8 border-baseMenuText '>
            <section className="w-full bg-[url(../../src/assets/bgbody-petlog.png)] bg-cover bg-blend-overlay bg-purple-200 ">
                <Container>

                    <div className="pt-20 pb-36">
                        <div className="absolute left-0  bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-[#e7bfff] w-auto px-8 py-3 rounded-r-full shadow-[#330F47] shadow-xs z-10 md:px-14">
                            <h4 className=" text-center text-purple-950 font-mochiy text-xs">Confira Nossos Serviços e Produtos</h4>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-24 pb-32 w-full '>
                        <div className='flex flex-col text-center'>
                            <Link to="/banhoetosa" >
                                <div className='flex flex-col gap-2'>
                                    <img className='w-28' src={serviceTosa} alt="" /><p className='text-baseMenuText font-bold font-poppins'>Banho e Tosa</p>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col text-center'>
                            <Link to="/cachorros" >
                                <div className='flex flex-col gap-2'>
                                    <img className='w-28' src={serviceDog} alt="" /><p className='text-baseMenuText font-bold font-poppins'>Cachorros</p>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col text-center'>
                            <Link to="/gatos" >
                                <div className='flex flex-col gap-2'>
                                    <img className='w-28' src={serviceCat} alt="" /><p className='text-baseMenuText font-bold font-poppins'>Gatos</p>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col text-center'>
                            <Link to="/passaros" >
                                <div className='flex flex-col gap-2'>
                                    <img className='w-28' src={serviceBird} alt="" /><p className='text-baseMenuText font-bold font-poppins'>Passáros</p>
                                </div></Link>
                        </div>
                    </div>

                </Container>
            </section>
        </main>
    )
}