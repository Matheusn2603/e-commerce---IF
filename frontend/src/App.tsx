import { useEffect, useState } from "react";
import NavBar from "./components/templates/navBar/navBar";
import Produto from "./components/ui/produto/produto";

export default function App(){
  let [produtos, setProdutos] = useState([])
  useEffect(()=>{
    fetch("https://6ac65871bea0e72cf5c8e8b8.mockapi.io/api/produto")
    .then((res) => res.json())
    .then((data)=>{
      setProdutos(data)
    })
  })

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