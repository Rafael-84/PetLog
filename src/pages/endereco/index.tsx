import { Container } from '../../components/container';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import fachada from '../../assets/fachada-petlog.png'
import { MeusServicos } from '../../components/servicos';
import { Footer } from '../../components/footer';



export function Endereco() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_KEY_MAPS
    });

    const position = {
        lat: -23.681011,
        lng: -46.499943,
    }



    return (
        <main className="bg-[url(../../src/assets/bgbody-petlog.png)] bg-contain  bg-blend-overlay bg-white/95">
            <Container>
                <section >


                    <div className='py-2'>
                        <div className="absolute left-0 top-28  bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-[#f7e73d] w-auto px-8 py-3 mt-2 rounded-r-full shadow-[#575007] shadow-xs z-10 md:px-14">
                            <span className=" text-center text-[#575007] font-mochiy text-xs ">Aonde nós estamos!</span>
                        </div>

                        <div>
                            <div className="absolute left-0 top-38 mt-7  bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-[#43fadb] w-auto px-8 py-3 mt-2 rounded-r-full shadow-[#005244] shadow-xs z-10 md:px-14">
                                <span className=" text-center text-[#005244] font-mochiy text-xs ">Endereço: R. Cedral, - Jardim Alzira Franco - Santo André</span>
                            </div>
                        </div>

                        <div>
                            <div className="absolute left-0 top-38 mt-24  bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-[#e7bfff] w-auto px-8 py-3 mt-2 rounded-r-full shadow-[#330F47] shadow-xs z-10 md:px-14">
                                <span className=" text-center text-purple-950 font-mochiy text-xs ">Entre em contato conosco : (11) 4002-8922 | (11) 94002-8922 </span>
                            </div>
                        </div>
                    </div>



                </section>
            </Container>
            <section className='mt-56 py-2'>
                <div className='w-full px-8'>
                    <img className='w-full p-0.5' src={fachada} alt="Fachada da Loja Pet Log" />
                </div>
            </section>
            <section className='max-2xl: w-full h-[628px] px-8'>
                {isLoaded ? (
                    <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={position} zoom={16}>
                        <Marker position={position} options={{
                            label: {
                                text: 'Pet Log',
                                color: '#602600',
                                fontSize: '17px',
                                fontWeight: 'bold',

                            }
                        }} />
                    </GoogleMap>
                ) : <></>}
            </section>
            <MeusServicos />
            <Footer />

        </main >
    )
}