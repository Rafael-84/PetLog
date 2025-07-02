import { useState, createContext, type ReactNode } from 'react';


interface CartContextData{

}

interface CartProviderProps{
    children: ReactNode
}

interface CartProps{
    id: string;
    name: string;
    preco: string | number;
    desconto?: string | number;
    precoDesconto?: string | number;
    urlImage: string;
    quantidadeCarrinho: string | number;
    precoTotal: string | number;
}

export const cartContext = createContext({} as CartContextData);

function CartProvider({children}: CartProviderProps){

    const [cart, setCart] = useState<CartProps[]>([]);

    return(
        <cartContext.Provider value={{}}>
            {children}
        </cartContext.Provider>
    )

}

export default CartProvider;