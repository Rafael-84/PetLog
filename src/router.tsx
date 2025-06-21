import { createBrowserRouter } from 'react-router';

import { Layout } from './components/layout';
import { Home } from './pages/home';
import { PageDog } from './pages/pageDog';
import { PageCat } from './pages/pageCat';
import { PageBirds } from './pages/pageBirds';
import { Favoritos } from './pages/favoritos';
import { NotFound } from './pages/error';
import { Endereco } from './pages/endereco';
import { Carrinho } from './pages/carrinho';
import { Tosa } from './pages/tosa';
import { PerfilClient } from './pages/perfilCliente';
import { Details } from './pages/detalheProduto';


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <PageDog />,
        path: "/cachorros",
      },
      {
        element: <PageCat />,
        path: "/gatos",
      },
      {
        element: <PageBirds />,
        path: "/passaros",
      },
      {
        element: <Favoritos />,
        path: "/favoritos",
      },
      {
        element: <Details/>,
        path: "/detalhe/:id",
      },
      {
        element: <Endereco />,
        path: "/endereco",
      },
      {
        element: <Carrinho />,
        path: "/carrinho",
      },
      {
        element: <Tosa />,
        path: "/banhoetosa",
      },
      {
        element: <PerfilClient />,
        path: "/perfil",
      },
    ],
  },
  {
    element: <NotFound />,
    path: "*",
  }
]);

export { router };