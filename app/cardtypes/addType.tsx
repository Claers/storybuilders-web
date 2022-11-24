"use client"

import useFetchData, { Card, CardExtension } from "../fetchDataStatic"
import { useRouter } from 'next/navigation';
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";
import { CardType } from "../fetchDataStatic";
import CardTypeEdit from "./cardTypeEdit";

type AddCardParams = {
    types: CardType[],
}

export default function AddType({ types }: AddCardParams) {

    const [newType, setNewType] = useState(false);

    function addNew(event: SyntheticEvent) {
        // event.preventDefault();
        types.push({ name: "name", color: "#000000" })
        setNewType(true);
        // router.refresh();
    }

    return (
        <div className="col-6 col-sm-5 col-lg-4 text-center mb-5">
            {!newType ? <button className="btn btn-success" onClick={addNew}  >
                <span aria-hidden="true" className="fa-solid fa-plus"></span>
            </button> : ""}

            <div >
                {newType ? <CardTypeEdit cardType={types[types.length - 1]} isCreate={true} /> : ""}
            </div>

        </div>
    )
}