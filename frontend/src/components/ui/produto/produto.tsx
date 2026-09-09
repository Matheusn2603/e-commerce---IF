import Division from "../division/division";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

type Props = {
    name :string;
    url :string;
    de :number;
    por :number;
}

export default function Produto(props :Props) {

    const [favoritar, setFavoritar] = useState(false);

    return (
        <Division className="flex gap-2 items-center flex-col h-120 w-100 bg-white hover:scale-102 transition ease-in-out">
            <div className="flex items-center w-full">
                <button 
                    className="buyBtn cursor-pointer hover:scale-110 transition ease-in-out active:scale-95"
                    onClick={() => {
                        setFavoritar(!favoritar);
                    }}
                >
                    {favoritar ? <FaHeart className="h-9 w-9 text-red-400"/> : <FaRegHeart className="h-9 w-9 text-neutral-400"/>}
                </button>
            </div>

            <div className="h-60 bg-neutral-300 w-65 rounded-xl">
                <img className="h-full w-full" src={props.url} alt=""/>
            </div>

            <div className="h-28 w-65">
                <strong className="text-2xl"> {props.name} </strong>
                <div className="flex justify-between h-20 w-full">
                    {props.de &&(
                        <del className="font-bold text-red-500"> DE: R$ {props.de} </del>
                    )}
                    
                    <strong className="text-xl"> POR: R$ {props.por} </strong>
                </div>
            </div>

            <button className="w-65 bg-red-400 h-10 text-white font-bold rounded-lg active:bg-red-400 hover:bg-red-500 cursor-pointer hover:scale-105 transition ease-in duration-100"> Comprar </button>
            
            {/* <p> {props.name} </p>
            <p> {props.url} </p>
            <p> {props.de} </p>
            <p> {props.por} </p> */}
        </Division>
    );
}