import { useState } from 'react';

import { Link } from 'react-router';
import { FiHeart, FiPhone, FiMap, FiShoppingCart } from 'react-icons/fi';
import { IoIosClose, IoMdMenu } from 'react-icons/io';

export function Header() {

    const [openButton, setButton] = useState(false);

    function handleOpenButton() {
        setButton(true);
    }

    function handleCloseButton() {
        setButton(false);
    }

    return (
        <header className='w-full md:h-20'>
            <nav className=' border-b-baseMenuText border-b-8 w-full flex items-center justify-around p-2 mx-auto '>
                <Link to="#" className='font-mochiy text-baseMenuText text-sm' >PetLog</Link>
                <Link to="/carrinho" className='md:hidden'>Carrinho</Link>
                <button onClick={handleOpenButton} className='md:hidden'><IoMdMenu size={25} color='#6C0020' /></button>
                {openButton && (
                    <div className='fixed -right-80 -top-0.5 ease-linear duration-300 transition-all overflow-x-hidden  bg-rose-800  z-40 w-1/2 h-screen   md:hidden  ' style={{ right: -0.5, top: 0, scrollbarWidth: 'none' }}>
                        <div className='relative flex flex-col items-center justify-center gap-6 py-8  bg-white border-baseMenuText border-2 h-screen'>
                            <Link to="#" className=' w-full text-center py-2 hover:bg-rose-300 duration-300'>Cachorros</Link>
                            <Link to="#" className=' w-full text-center py-2 hover:bg-rose-300 duration-300'>Gatos</Link>
                            <Link to="#" className=' w-full text-center py-2 hover:bg-rose-300 duration-300'>Aves</Link>
                            <Link to="#" className=' w-full text-center py-2 hover:bg-rose-300 duration-300'>Favoritos</Link>
                            <Link to="#" className=' w-full text-center py-2 hover:bg-rose-300 duration-300'>Telefone</Link>
                            <Link to="#" className=' w-full text-center py-2 hover:bg-rose-300 duration-300'>Endereço</Link>
                            <button onClick={handleCloseButton} className='border-red-800 w-auto rounded-md border-2   text-rose-800 font-bold text-lg flex items-center justify-center'><IoIosClose size={30} color='6C0020' /></button>
                        </div>
                    </div>
                )}

                <div className='hidden md:flex md:items-center md:justify-center md:gap-4 md:py-2 '>
                    <Link to="#" className='text-baseMenuText font-mochiy text-xs '>Cachorros</Link>
                    <Link to="#" className='text-base text-baseMenuText font-mochiy text-xs '>Gatos</Link>
                    <Link to="#" className='text-base text-baseMenuText font-mochiy text-xs '>Aves</Link>                    
                    <Link to="#" className='text-base text-baseMenuText font-mochiy text-xs '>Banho e Tosa</Link>                    
                </div>

                <div className='hidden md:flex md:items-center md:justify-center gap-4 '>
                    <Link to="#"><FiHeart size={18} color='#6C0020' /></Link>
                    <Link to="#"><FiPhone size={18} color='#6C0020' /></Link>
                    <Link to="#"><FiMap size={18} color='#6C0020' /></Link>
                    <Link to="#"><FiShoppingCart size={18} color='#6C0020' /></Link>
                </div>

            </nav>
        </header>
    )
}


