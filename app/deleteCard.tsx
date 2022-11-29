"use client"
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";

async function del(card_id: number) {
    const res = fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/storybuilders/cards/delete", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: card_id })
    })
}

export default function DeleteCard({ card_id }: any) {

    function deleteCard(event: SyntheticEvent) {
        del(card_id)
        location.reload()
    }

    return (
        <button className="btn btn-danger" onClick={deleteCard}  >
            <span aria-hidden="true" className="fa-solid fa-xmark"></span>
        </button>
    )

}