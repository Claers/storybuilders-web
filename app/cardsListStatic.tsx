
// import useFetchData from "./fetchData"
import { FormEvent, SyntheticEvent } from "react";
import CardImage from "./cardImage";
import CardEdit from "./cardEdit";
import AddCard from "./addCard";
import useFetchData, { Card, CardType } from "./fetchDataStatic";

type Data = {
  cards: Card[],
  types: CardType[]
}

export default async function CardsList() {
  const { cards, types, extensions } = await useFetchData();

  return (
    <div>
      <form action="/" id="new_card_form"></form>
      <div className="row">
        <div className="row text-center">
          {cards?.map((card: Card) => {
            return (
              <div key={`${card.id}`} className="col-6 col-sm-5 col-lg-4 text-center mb-5">
                <CardEdit card={card} types={types} extensions={extensions} />
                <div>
                  <CardImage id={card.id} face="0" endpoint="cards" name={card.name} key={`${card.name}_0`} />
                  <CardImage id={card.id} face="1" endpoint="cards" name={card.name} key={`${card.name}_1`} />
                </div>
              </div>
            )
          })}
          <AddCard cards={cards} types={types} extensions={extensions} />
        </div>
      </div>
    </div >
  );
}