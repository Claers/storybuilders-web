"use client"

import { Card, CardExtension, CardType } from "./fetchDataStatic"
import { useRouter } from 'next/navigation';
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";

async function update(card: Card, formData: Object) {
  const res = fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/storybuilders/cards/edit", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([{ ...card, ...formData, description: "" }]),
  });
}

async function create(card: Card, formData: Object) {
  const res = fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/storybuilders/cards/create", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([{ ...formData, description: "", extension: 1 }])
  })
}

type CardEditType = {
  card: Card,
  types: CardType[],
  extensions: CardExtension[],
  isCreate?: boolean
}

export default function CardEdit({ card, types, extensions, isCreate = false }: CardEditType) {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    name: card.name,
    difficulty: card.difficulty,
    card_type: card.card_type?.id || types[0].id,
    extension: card.extension?.id || extensions[0].id,
  })

  function handleChange(event: ChangeEvent<any>) {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  function selectType(event: ChangeEvent<HTMLSelectElement>) {
    setFormValue((prevState) => {
      return {
        ...prevState,
        [event.target.name]: Number.parseInt(event.target.value)
      }
    })
  }

  const { name, difficulty, card_type, extension } = formValue;

  function launchUpdate(event: SyntheticEvent) {
    // console.log(formValue);
    // event.preventDefault();
    if (isCreate) {
      create(card, formValue);
      return;
    }
    update(card, formValue);
  }


  return (
    <div >
      <form className="mt-1 form-group row ml-1" action={`#${card.id}`} onSubmit={launchUpdate}>
        {/* <p>{card.id}</p> */}
        <textarea onChange={handleChange} className="form-control " name="name" value={name} rows={3} />
        <label htmlFor="difficulty" className="col-sm-5 col-form-label">Difficulty</label>
        <input onChange={handleChange} className="form-control col-sm-7" name="difficulty" value={difficulty} />
        <label htmlFor="type" className="col-sm-5 col-form-label">Type de carte</label>
        <select onChange={selectType} className="form-control col-sm-7" name="card_type" value={card_type}>
          {types.map((existing_type: CardType) => {
            return (
              <option key={existing_type.id} value={existing_type.id} >{existing_type.name} </option>
            )
          })}
        </select>
        <label htmlFor="extension" className="col-sm-5 col-form-label">Extension</label>
        <select onChange={selectType} className="form-control col-sm-7" name="extension" value={extension}>
          {extensions.map((existing_extension: CardExtension) => {
            return (
              <option key={existing_extension.id} value={existing_extension.id} >{existing_extension.name} </option>
            )
          })}
        </select>

        {isCreate ? <input className="mt-2 mb-2 btn btn-primary" type="submit" value="Create" /> : <input className="mt-2 mb-2 btn btn-primary" type="submit" value="Update" />}
      </form>
    </div >
  )
}