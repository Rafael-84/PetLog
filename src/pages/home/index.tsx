import { useState } from "react";
import { Container } from "../../components/container";
import { MeusServicos } from "../../components/servicos";
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
    desconto?: string | number;
    precoPromocao?: string | number;
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

    const [produto, setProduto] = useState<ProductProps[]>([{ id: 1, nome: "Ração Golden Special para Cães Adultos Sabor Frango e Carne 15Kg", preco: 50, quantidade: '13', urlImage: racao1, desconto: 10, precoPromocao: 40 }, { id: 2, nome: "Ração Golden Special para Cães Adultos Sabor Frango e Carne 15Kg", preco: 50, quantidade: '13', urlImage: racao2, desconto: 10, precoPromocao: 40 }, { id: 3, nome: "Ração Golden Special para Cães Adultos Sabor Frango e Carne 15Kg", preco: 50, quantidade: '13', urlImage: racao3}, { id: 4, nome: "Ração Golden Special para Cães Adultos Sabor Frango e Carne 15Kg", preco: 50, quantidade: '13', urlImage: racao4, desconto: 10, precoPromocao: 40 }, { id: 5, nome: "Ração Golden Special para Cães Adultos Sabor Frango e Carne 15Kg", preco: 50, quantidade: '13', urlImage: racao1 }]);


    return (
        <main className="bg-[url(../../src/assets/bgbody-petlog.png)] bg-cover bg-blend-overlay bg-white/90">
            <Container >
                <section >

                    <div className="py-28">
                        <div className="absolute right-0 top-44  bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-[#f7e73d] w-auto px-8 py-3 rounded-l-full shadow-[#575007] shadow-xs z-10 md:px-14">
                            <h4 className=" text-center text-[#575007] font-mochiy text-xs">Produtos Recomendados</h4>
                        </div>
                    </div>


                    <div>
                        <div className="relative overflow-hidden  max-w-6xl w-full mx-auto  rounded-md  py-2 px-2.5" ref={emblaRef}>
                            <div className="flex items-center justify-between gap-2 ">
                                {produto.map((item, index) => (
                                    <article key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_30%] bg-[#F6ECBA] rounded-md ">

                                        <div className="flex flex-col items-center justify-center">
                                            <div className=" w-10/12  py-2 mb-2">
                                                <Link to={`/detalhe/${item.id}`}><img src={item.urlImage} alt={item.nome} className="w-full rounded-md " /></Link>
                                            </div>
                                            <div className="flex flex-col flex-start justify-center w-full text-xs px-2.5 gap-2">
                                                <p className="text-start">{item.nome}</p>
                                                <div className="border-[#d4c369] border-b-[1px]"></div>
                                            </div>
                                            <div className="flex items-center justify-between gap-2 w-full px-2.5 py-4">
                                                <div className="flex flex-col  justify-center gap-2">
                                                    {item.precoPromocao && item.desconto && (<p className="text-xs font-poppins line-through italic font-medium text-gray-700">De: {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>)}

                                                    {item.precoPromocao && item.desconto && ( <span className=" font-poppins font-bold text-baseMenuText text-sm">Por: {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} {item.precoPromocao && ( <span className="text-xs text-baseMenuText font-poppins font-medium italic">{item.desconto}% de desconto</span> )}</span> )}

                                                    {!item.precoPromocao && !item.desconto && ( <span className=" font-poppins font-medium py-5 425px:py-2.5 md:py-5 lg:py-2.5">{item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} </span> )}
                                                </div>

                                                <button className="flex items-center justify-center py-1 px-1.5 bg-green-600 rounded-md cursor-pointer hover:bg-green-700 hover:duration-200 "><FiShoppingCart size={22} color='#FFF' /></button>
                                            </div>
                                        </div>

                                    </article>
                                ))}
                            </div>
                        </div>
                        <button onClick={slidePrev}><div className="absolute top-[65%] left-[11%] p-1 bg-white rounded-full flex items-center justify-center border-baseMenuText border-2 cursor-pointer hover:bg-amber-200 z-50 hover:duration-300 md:top-[70%] md:left-[6%] lg:left-[3%] xl:left-[8%] xl:top-[75%] 2xl:top-[65%] 2xl:left-[11%]"><GrFormPrevious color="#6C0020" size={20} /></div></button>
                        <button onClick={slideNext}><div className="absolute top-[65%] right-[11%] p-1 bg-white rounded-full flex items-center justify-center border-baseMenuText border-2 cursor-pointer hover:bg-amber-200 z-50 hover:duration-300 md:right-[5%] md:top-[70%] lg:right-[2%] xl:right-[7%] xl:top-[75%] 2xl:top-[65%] 2xl:right-[10%]"><GrFormNext color="#6C0020" size={20} /></div></button>
                    </div>
                </section>
                <section className=" w-full flex flex-col gap-16">
                    <div className="my-8  ">
                        <div className="absolute left-0  bg-[url(../../src/assets/cardimage.png)] bg-cover bg-blend-overlay bg-[#3fffdf] w-auto px-8 py-2 rounded-r-full shadow-[#1C653C] shadow-xs z-10  md:px-14">
                            <h4 className="flex items-center justify-center gap-2  text-[#1C653C] font-mochiy text-xs">Os Cachorros Amam!!! <LuBone size={28} /></h4>
                        </div>
                    </div>

                    <div >
                        <div className="max-w-7xl w-full mx-auto  rounded-md  py-2 px-2.5" >
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
                                {produto.map((item, index) => (
                                    <article key={index} className=" bg-[#F6ECBA] rounded-md">

                                        <div className="flex flex-col items-center justify-center px-4">
                                            <div className=" w-full  py-2 mb-2">
                                                <Link to={`/detalhe/${item.id}`}><img src={item.urlImage} alt={item.nome} className="w-full rounded-md " /></Link>
                                            </div>
                                            <div className="flex flex-col flex-start justify-center w-full text-xs  gap-2">
                                                <p className="text-start">{item.nome}</p>
                                                <div className="border-[#d4c369] border-b-[1px]"></div>
                                            </div>
                                            <div className="flex items-center justify-between gap-2 w-full py-4">
                                                <div className="flex flex-col  justify-center gap-2">
                                                    {item.precoPromocao && item.desconto && (<p className="text-xs font-poppins line-through italic font-medium text-gray-700">De: {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>)}

                                                    {item.precoPromocao && item.desconto && ( <span className=" font-poppins font-bold text-baseMenuText text-sm">Por: {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} {item.precoPromocao && ( <span className="text-xs text-baseMenuText font-poppins font-medium italic">{item.desconto}% de desconto</span> )}</span> )}

                                                    {!item.precoPromocao && !item.desconto && ( <span className=" font-poppins font-medium py-2.5">{item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} </span> )}
                                                </div>
                                                <button title="Adicionar ao carrinho" className="flex items-center justify-center py-1 px-1.5 bg-green-600 rounded-md cursor-pointer hover:bg-green-700 hover:duration-200 "><FiShoppingCart size={22} color='#FFF' /></button>
                                            </div>
                                        </div>

                                    </article>
                                ))}
                            </div>
                        </div>

                        <Link to="/cachorros" className="flex flex-row-reverse pr-2   text-blue-500 text-sm font-bold hover:text-blue-800 hover:duration-300 md:pr-5 xl:pr-8 2xl:pr-28">Ver mais...</Link>

                    </div>
                </section>
                <section className=" w-full flex flex-col gap-16">
                    <div className="my-8  ">
                        <div className="absolute right-0  bg-[url(../../src/assets/cardimage.png)]  bg-cover bg-blend-overlay bg-[#fcdbd2] w-auto px-8 py-2 rounded-l-full shadow-[#682716] shadow-xs z-10  md:px-14">
                            <h4 className="flex items-center justify-center gap-2  text-[#c41508] font-mochiy text-xs"><IoFishOutline size={28} /> Os Gatos Adoram!!! </h4>
                        </div>
                    </div>

                    <div >
                        <div className="max-w-7xl w-full mx-auto  rounded-md  py-2 px-2.5" >
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
                                {produto.map((item, index) => (
                                    <article key={index} className=" bg-[#F6ECBA] rounded-md">

                                        <div className="flex flex-col items-center justify-center px-4">
                                            <div className=" w-full  py-2 mb-2">
                                                <Link to={`/detalhe/${item.id}`}><img src={item.urlImage} alt={item.nome} className="w-full rounded-md " /></Link>
                                            </div>
                                            <div className="flex flex-col flex-start justify-center w-full text-xs  gap-2">
                                                <p className="text-start">{item.nome}</p>
                                                <div className="border-[#d4c369] border-b-[1px]"></div>
                                            </div>
                                            <div className="flex  items-center justify-between gap-2 w-full py-4">
                                                <div className="flex flex-col  justify-center gap-2">
                                                    {item.precoPromocao && item.desconto && (<p className="text-xs font-poppins line-through italic font-medium text-gray-700">De: {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>)}

                                                    {item.precoPromocao && item.desconto && ( <span className=" font-poppins font-bold text-baseMenuText text-sm">Por: {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} {item.precoPromocao && ( <span className="text-xs text-baseMenuText font-poppins font-medium italic">{item.desconto}% de desconto</span> )}</span> )}

                                                    {!item.precoPromocao && !item.desconto && ( <span className=" font-poppins font-medium py-2.5">{item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} </span> )}
                                                </div>

                                                <button title="Adicionar ao carrinho" className="flex items-center justify-center py-1 px-1.5 bg-green-600 rounded-md cursor-pointer hover:bg-green-700 hover:duration-200 "><FiShoppingCart size={22} color='#FFF' /></button>
                                            </div>
                                        </div>

                                    </article>
                                ))}
                            </div>
                        </div>

                        <Link to="/cachorros" className="flex flex-row-reverse pr-2 text-blue-500 text-sm font-bold hover:text-blue-800 hover:duration-300 md:pr-5 xl:pr-8 2xl:pr-28">Ver mais...</Link>

                    </div>
                </section>

            </Container>
                <MeusServicos/>

        </main>
    )
}