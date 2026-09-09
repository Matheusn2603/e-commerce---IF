import type { HTMLAttributes } from "react";

type Props = {} & HTMLAttributes<HTMLDivElement>

export default function Division(props :Props){
    return (
        <div {...props} className={`bg-white rounded-xl border-2 border-neutral-200 p-2 ${props.className ?? ""}`}>
            {props.children}
        </div>
    );
}