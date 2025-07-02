import { useState } from "react"
import dogCart from '../../assets/dog_cart.png'
import { Link } from "react-router";
import { Footer } from "../../components/footer";

export function Carrinho(){

    const [cart, setCart] = useState(null);

    return(
        <main>
            <section className="w-full flex flex-col items-center justify-center">
                {!cart && (
                    <div className="w-full  flex flex-col items-center justify-center h-screen ">
                        <img src={dogCart} alt="cachorrinho" />
                        <h1>Que pena! Seu carrinho está vazio!</h1> 
                        <Link className="border-[1px] border-baseMenuText p-2 rounded-md shadow-md shadow-baseMenuText/75 text-baseMenuText font-bold mt-2.5 hover:bg-baseMenuText hover:text-white hover:duration-300" to='/'>Voltar ao Início</Link>
                    </div>
                )}

               
            <Footer/>
            </section>
        </main> 
    )
}