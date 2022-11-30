"use client"
import { Card } from "./fetchDataStatic";
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";

// async function printall(start_id: number, end_id: number) {
//     const res = fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/storybuilders/cards/generate_print/" + start_id + "/" + end_id, {
//         method: "GET",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//     })
// }

type CardPrintType = {
    cards: Card[]
}

export default function PrintCards({ cards }: CardPrintType) {

    // function printCards(event: SyntheticEvent) {
    //     printall(cards[0].id || 0, cards[cards.length].id || cards[cards.length - 1].id || 0)
    //     location.reload()
    // }

    const start_id = cards[0].id || 0;
    const end_id = cards[cards.length - 1].id || cards[cards.length - 2].id || 0;

    return (
        <a className="btn btn-warning" href={process.env.NEXT_PUBLIC_API_HOST + "/api/storybuilders/cards/generate_print/" + start_id + "/" + end_id}  >
            <span aria-hidden="true" className="fa-solid fa-print"></span>
        </a>
    )

}