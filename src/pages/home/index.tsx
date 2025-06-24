import { useState } from "react";
import { Container } from "../../components/container";
import useEmblaCarousel from 'embla-carousel-react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiShoppingCart } from 'react-icons/fi';
import { LuBone } from "react-icons/lu";
import { IoFishOutline } from "react-icons/io5";


import racao1 from '../../assets/racao-dog1.png';
import racao2 from '../../assets/racao-dog2.png';
import racao3 from '../../assets/racao-dog3.png';
import racao4 from '../../assets/racao-dog4.png';
import { Link } from "react-router";

interface ProductProps {
    id?: string | number;
    nome: string;
    preco: string | number;
    quantidade: string | number;
    urlImage?: string;
    promocao?: string | number;
}

export function Home() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
        },




    });

    const slidePrev = function slidePrev() {
        if (emblaApi) {
            emblaApi?.scrollPrev();
        }
    }

    const slideNext = function SlideNext() {
        if (emblaApi) {
            emblaApi?.scrollNext();
        }
    }

    const [produto, setProduto] = useState<ProductProps[]>([{ id: 1, nome: "Ração Golden Special para Cães Adultos Sabor Frango e Carne 15Kg", preco: 50, quantidade: '13', urlImage: racao1, promocao: 10 }, { nome: "Golden", preco: 80, quantidade: '15', urlImage: racao2 }, { nome: "Premier", preco: 50, quantidade: '13', urlImage: racao1 }, { nome: "Golden", preco: 80, quantidade: '15', urlImage: racao2 }, { nome: "Premier", preco: 50, quantidade: '13', urlImage: racao1 }, { nome: "Golden", preco: 80, quantidade: '15', urlImage: racao2 }, { nome: "Premier", preco: 50, quantidade: '13', urlImage: racao1 }, { nome: "Golden", preco: 80, quantidade: '15', urlImage: racao2 }]);


    return (
        <main className="bg-[url(../../src/assets/bgbody-petlog.png)] bg-cover bg-blend-overlay bg-white/90">
            <Container >
                <section >

                    <div className="py-28">
                        <div className="absolute right-0 top-44  bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-[#f7e73d] w-auto px-8 py-3 rounded-l-full shadow-[#575007] shadow-xs z-10 md:px-14">
                            <h4 className=" text-center text-[#575007] font-mochiy text-xs">Produtos Recomendados</h4>
                        </div>
                    </div>


                    <div className=" ">
                        <div className="relative overflow-hidden  max-w-6xl w-full mx-auto  rounded-md  py-2 px-2.5" ref={emblaRef}>
                            <div className="flex items-center justify-between gap-2 ">
                                {produto.map((produto, index) => (
                                    <article key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_25%] bg-[#F6ECBA] rounded-md">

                                        <div className="flex flex-col items-center justify-center">
                                            <div className=" w-10/12  py-2 mb-2">
                                                <Link to={`/detalhe/${produto.id}`}><img src={produto.urlImage} alt={produto.nome} className="w-full rounded-md " /></Link>
                                            </div>
                                            <div className="flex flex-col flex-start justify-center w-full text-xs px-2.5 gap-2">
                                                <p className="text-start">{produto.nome}</p>
                                                <div className="border-[#d4c369] border-b-[1px]"></div>
                                            </div>
                                            <div className="flex items-center justify-between gap-2 w-full px-2.5 py-4">
                                                <span className="text-sm font-poppins font-medium">{produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>

                                                <button className="flex items-center justify-center py-1 px-1.5 bg-green-600 rounded-md cursor-pointer hover:bg-green-700 hover:duration-200 "><FiShoppingCart size={22} color='#FFF' /></button>
                                            </div>
                                        </div>

                                    </article>
                                ))}
                            </div>
                        </div>
                        <button onClick={slidePrev}><div className="absolute top-[65%] left-[11%] p-1 bg-white rounded-full flex items-center justify-center border-baseMenuText border-2 cursor-pointer hover:bg-amber-200 z-50 hover:duration-300"><GrFormPrevious color="#6C0020" size={20} /></div></button>
                        <button onClick={slideNext}><div className="absolute top-[65%] right-[11%] p-1 bg-white rounded-full flex items-center justify-center border-baseMenuText border-2 cursor-pointer hover:bg-amber-200 z-50 hover:duration-300"><GrFormNext color="#6C0020" size={20} /></div></button>
                        <Link to="#" className="absolute right-[14%] text-blue-500 text-sm font-bold hover:text-blue-800 hover:duration-300">Ver mais...</Link>

                    </div>                    
                </section>
                <section className=" w-full flex flex-col gap-16">
                    <div className="my-8  ">
                        <div className="absolute left-0  bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-[#3fffdf] w-auto px-8 py-2 rounded-r-full shadow-[#1C653C] shadow-xs z-10  md:px-14">
                            <h4 className="flex items-center justify-center gap-2  text-[#1C653C] font-mochiy text-xs">Os Cachorros Amam!!! <LuBone size={28}/></h4>
                        </div>
                    </div>

                    <div >
                        <div className="relative overflow-hidden  max-w-6xl w-full mx-auto  rounded-md  py-2 px-2.5" >
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 ">
                                {produto.map((produto, index) => (
                                    <article key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_25%] bg-[#F6ECBA] rounded-md">

                                        <div className="flex flex-col items-center justify-center">
                                            <div className=" w-10/12  py-2 mb-2">
                                                <Link to={`/detalhe/${produto.id}`}><img src={produto.urlImage} alt={produto.nome} className="w-full rounded-md " /></Link>
                                            </div>
                                            <div className="flex flex-col flex-start justify-center w-full text-xs px-2.5 gap-2">
                                                <p className="text-start">{produto.nome}</p>
                                                <div className="border-[#d4c369] border-b-[1px]"></div>
                                            </div>
                                            <div className="flex items-center justify-between gap-2 w-full px-2.5 py-4">
                                                <span className="text-sm font-poppins font-medium">{produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>

                                                <button className="flex items-center justify-center py-1 px-1.5 bg-green-600 rounded-md cursor-pointer hover:bg-green-700 hover:duration-200 "><FiShoppingCart size={22} color='#FFF' /></button>
                                            </div>
                                        </div>

                                    </article>
                                ))}
                            </div>
                        </div>
                        
                        <Link to="#" className="absolute right-[14%] text-blue-500 text-sm font-bold hover:text-blue-800 hover:duration-300">Ver mais...</Link>

                    </div>         
                </section>
                <section className=" w-full flex flex-col gap-16 py-16">
                    <div className="my-8  ">
                        <div className="absolute right-0  bg-[url(../../src/assets/cardimage.png)]  bg-cover bg-blend-overlay bg-[#F8D7CE] w-auto px-8 py-2 rounded-l-full shadow-[#682716] shadow-xs z-10  md:px-14">
                            <h4 className="flex items-center justify-center gap-2  text-[#c41508] font-mochiy text-xs"><IoFishOutline size={28}/> Os Gatos Adoram!!! </h4>
                        </div>
                    </div>

                    <div >
                        <div className="relative overflow-hidden  max-w-6xl w-full mx-auto  rounded-md  py-2 px-2.5" >
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 ">
                                {produto.map((produto, index) => (
                                    <article key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_25%] bg-[#F6ECBA] rounded-md">

                                        <div className="flex flex-col items-center justify-center">
                                            <div className=" w-10/12  py-2 mb-2">
                                                <Link to={`/detalhe/${produto.id}`}><img src={produto.urlImage} alt={produto.nome} className="w-full rounded-md " /></Link>
                                            </div>
                                            <div className="flex flex-col flex-start justify-center w-full text-xs px-2.5 gap-2">
                                                <p className="text-start">{produto.nome}</p>
                                                <div className="border-[#d4c369] border-b-[1px]"></div>
                                            </div>
                                            <div className="flex items-center justify-between gap-2 w-full px-2.5 py-4">
                                                <span className="text-sm font-poppins font-medium">{produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>

                                                <button className="flex items-center justify-center py-1 px-1.5 bg-green-600 rounded-md cursor-pointer hover:bg-green-700 hover:duration-200 "><FiShoppingCart size={22} color='#FFF' /></button>
                                            </div>
                                        </div>

                                    </article>
                                ))}
                            </div>
                        </div>
                       
                        <Link to="#" className="absolute right-[14%] text-blue-500 text-sm font-bold hover:text-blue-800 hover:duration-300">Ver mais...</Link>

                    </div>         
                </section>

            </Container>

        </main>
    )
}