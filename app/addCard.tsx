"use client"

import useFetchData, { Card, CardExtension } from "./fetchDataStatic"
import { useRouter } from 'next/navigation';
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";
import { CardType } from "./fetchDataStatic";
import CardEdit from "./cardEdit";

type AddCardParams = {
    cards: Card[]
    types: CardType[],
    extensions: CardExtension[]
}

export default function AddCard({ cards, types, extensions }: AddCardParams) {
    const router = useRouter();

    const [newCard, setNewCard] = useState(false);

    function addNew(event: SyntheticEvent) {
        // event.preventDefault();
        cards.push({ name: "name", description: "", difficulty: 1 })
        setNewCard(true);
        console.log(cards);
        // router.refresh();
    }

    return (
        <div className="col-6 col-sm-5 col-lg-4 text-center mb-5">
            {!newCard ? <button className="btn btn-success" onClick={addNew}  >
                <span aria-hidden="true" className="fa-solid fa-plus"></span>
            </button> : ""}

            <div >
                {newCard ? <CardEdit card={cards[cards.length - 1]} types={types} extensions={extensions} isCreate={true} /> : ""}
            </div>

        </div>
    )
}