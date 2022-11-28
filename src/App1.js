import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Shop from './Shop';
import ShopDetail from './ShopDetail';
import { fakeShopData } from './data/fakeData';
import Data from './Data';
import { sleep, waiting } from './utils/utils';
import Pokemon from './pokemon/Pokemon';
import { getDetailPokemon, getListPokemon } from './data/pokemon';
import ChildPokemon from './pokemon/ChildPokemon';
import SubChildPokemon from './pokemon/SubChildPokemon';
import ErrorPokemon from './error/ErrorPokemon';
import DeferPokemon from './pokemon/DeferPokemon';
import DeferChildPokemon from './pokemon/DeferChildPokemon';
import DeferSubChildPokemon from './pokemon/DeferSubChildPokemon';

const router =
  createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="topics" element={<Topics />} />
      </Route>
      <Route path="shop" element={<Shop />}>
        <Route path=":shopId" element={<ShopDetail />} />
      </Route>


      <Route
        path='data'
        loader={async ({ params, request }) => {
          const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
            signal: request.signal,
          });
          const pokemon = await res.json();
          return pokemon
          // return waiting(3000, pokemon)
        }}
        element={<Data />}
      />

      <Route
        path='pokemon'
        loader={async ({ params }) => {
          return getListPokemon()
        }}
        element={<Pokemon />}
        errorElement={<ErrorPokemon />}
      >
        <Route
          path=':childId'
          loader={async ({ params }) => {
            return getDetailPokemon(params.childId)
          }}
          element={<ChildPokemon />}
        >
          <Route
            path=':subChildId'
            loader={async ({ params }) => {
              return getDetailPokemon(params.subChildId)
              // case for error
              // return getDetailPokemon(params.subChildId)

              // case for waiting
              // return waiting(3000, getDetailPokemon(params.subChildId))
            }}
            element={<SubChildPokemon />}
            // case ketika error hanya di child
            // errorElement={<ErrorPokemon />}
          />
        </Route>
      </Route>

      <Route
        path='defer'
        loader={async () => {
          const list = getListPokemon()
          return defer({ list })
        }}
        element={<DeferPokemon />}
      >
        <Route
          path=':childId'
          loader={async ({ params }) => {
            const childDetail = getDetailPokemon(params.childId)
            return defer({ childDetail })
          }}
          element={<DeferChildPokemon />}
        >
          <Route
            path=':subChildId'
            loader={async ({ params }) => {
              const subChildDetail = getDetailPokemon(params.subChildId)
              return defer({ subChildDetail })
            }}
            element={<DeferSubChildPokemon />}
          />
        </Route>
      </Route>

    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
