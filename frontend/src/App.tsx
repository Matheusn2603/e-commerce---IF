import NavBar from "./components/templates/navBar/navBar";
import Produto from "./components/ui/produto/produto";

import { produtos } from "./utils/produtos";

export default function App(){
  return (
      <div className="h-dvh">
        <NavBar/>
        <div className="flex items-center justify-center h-[90%] w-full p-2 gap-5 flex-wrap">
          {
            produtos.map((p) => (
              <Produto name={p.name} url={p.url} de={p.de} por={p.por}/>
            ))
          }
        </div>
      </div>
  );
}