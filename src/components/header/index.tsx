import { useState } from 'react';

import { Link } from 'react-router';
import { FiHeart, FiPhone, FiMap, FiShoppingCart } from 'react-icons/fi';
import { IoIosClose, IoMdMenu } from 'react-icons/io';

export function Header() {

    const [openButton, setButton] = useState(false);
    const [user, setUser] = useState(null);

    function handleOpenButton() {
        setButton(true);
    }

    function handleCloseButton() {
        setButton(false);
    }

    return (
        <header className='w-full bg-white '>
            <nav className=' border-b-baseMenuText border-b-8 w-full flex items-center justify-between px-14 py-2 mx-auto md:h-20 '>
                <Link to="/" className='font-mochiy text-lg from-baseMenuText bg-gradient-to-r bg-orange-500 text-transparent bg-clip-text' >Pet Log</Link>
                <Link to="/carrinho" className='md:hidden'><FiShoppingCart size={22} color='#6C0020' /></Link>
                <button onClick={handleOpenButton} className='cursor-pointer bg-baseMenuText rounded-md p-1  md:hidden'><IoMdMenu size={25} color='#FFF' /></button>
                {openButton && (
                    <div className='fixed -right-80 -top-0.5 ease-linear duration-300 transition-all overflow-x-hidden  bg-rose-800  z-40 w-1/2 h-screen   md:hidden  ' style={{ right: -0.5, top: 0, scrollbarWidth: 'none' }}>
                        <div className='relative flex flex-col items-center justify-center gap-6 py-8  bg-white border-baseMenuText border-2 h-screen'>
                            <Link to="/cachorros" className='text-baseMenuText font-mochiy text-xs w-full text-center py-2 hover:bg-orange-200 duration-300'>Cachorros</Link>
                            <Link to="/gatos" className='text-baseMenuText font-mochiy text-xs w-full text-center py-2 hover:bg-orange-200 duration-300'>Gatos</Link>
                            <Link to="/passaros" className='text-baseMenuText font-mochiy text-xs w-full text-center py-2 hover:bg-orange-200 duration-300'>Aves</Link>
                            <Link to="#" className='text-baseMenuText font-mochiy text-xs w-full text-center py-2 hover:bg-orange-200 duration-300'>Favoritos</Link>
                            <Link to="#" className='text-baseMenuText font-mochiy text-xs w-full text-center py-2 hover:bg-orange-200 duration-300'>Telefone</Link>
                            <Link to="#" className='text-baseMenuText font-mochiy text-xs w-full text-center py-2 hover:bg-orange-200 duration-300'>Endereço</Link>
                            <button onClick={handleCloseButton} className=' bg-baseMenuText rounded-md p-1 font-bold text-lg flex items-center justify-center cursor-pointer'><IoIosClose size={30} color='#FFF' /></button>
                        </div>
                    </div>
                )}

                <div className='hidden md:flex md:items-center md:justify-center md:gap-4 md:py-2 '>
                    <Link to="/cachorros" className='text-baseMenuText font-mochiy text-xs hover:text-orange-500 hover:transition-colors hover:duration-200 '>Cachorros</Link>
                    <Link to="/gatos" className=' text-baseMenuText font-mochiy text-xs hover:text-orange-500 hover:transition-colors hover:duration-200 '>Gatos</Link>
                    <Link to="/passaros" className=' text-baseMenuText font-mochiy text-xs hover:text-orange-500 hover:transition-colors hover:duration-200 '>Aves</Link>                    
                    <Link to="/banhoetosa" className=' text-baseMenuText font-mochiy text-xs hover:text-orange-500 hover:transition-colors hover:duration-200 '>Banho e Tosa</Link>                    
                </div>

                <div className='hidden md:flex md:items-center md:justify-center gap-6 '>                    
                    <Link to="/endereco"><FiMap size={18} color='#6C0020' /></Link>
                    <Link to="#"><FiPhone size={18} color='#6C0020' /></Link>
                    <Link to="/carrinho"><FiShoppingCart size={18} color='#6C0020' /></Link>
                    {!user ? <Link to="/login" className='text-baseMenuText font-mochiy text-xs hover:text-orange-500 hover:transition-colors hover:duration-200'>Acessar</Link> : "Usuário logado" }
                </div>

            </nav>
        </header>
    )
}


