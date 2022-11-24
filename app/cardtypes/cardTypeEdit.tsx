"use client"

import { CardType } from "../fetchDataStatic"
import { useRouter } from 'next/navigation';
import { ChangeEvent, SyntheticEvent, useState, useEffect } from "react";

async function create(formData: Object) {

  const res = fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/storybuilders/types/create", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([{ ...formData }])
  });
}

async function update(cardType: CardType, formData: Object) {

  const res = fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/storybuilders/types/edit", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([{ ...cardType, ...formData }])
  });
}

export default function CardTypeEdit({ cardType, isCreate }: any) {
  const [formValue, setFormValue] = useState({
    name: cardType.name,
    color: cardType.color
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

  const { name, color } = formValue;

  function launchUpdate(event: SyntheticEvent) {
    const target = event.target as typeof event.target & {
      color: { value: string }
    }
    if (isCreate) {
      create(formValue)
      return;
    }
    update(cardType, formValue);
  }

  return (
    <div >
      <form className="mt-1 form-group" onSubmit={launchUpdate}>
        <textarea onChange={handleChange} className="form-control " name="name" value={name} />
        <input onChange={handleChange} type="color" className="form-control form-control-color" name="color" value={color} title="Choose your color" />
        {isCreate ? <input className="mt-2 mb-2 btn btn-primary" type="submit" value="Create" /> : <input className="mt-2 mb-2 btn btn-primary" type="submit" value="Update" />}
      </form>

    </div>
  )
}