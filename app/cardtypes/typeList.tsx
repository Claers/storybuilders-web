
import useFetchData, { CardType } from "../fetchDataStatic"
import CardTypeEdit from "./cardTypeEdit";
import CardImage from "../cardImage";
import AddType from "./addType";

export default async function TypesList() {
  const { types } = await useFetchData();

  return (
    <div className="row text-center">
      {types?.map((cardType: CardType) => {
        return (
          <div key={`${cardType.id}`} className="row col-6 col-sm-5 col-lg-4 text-center mb-5">
            <CardTypeEdit cardType={cardType} />
            <div>
              <CardImage id={cardType.id} face="0" endpoint="types" name={cardType.name} key={`${cardType.color}_${cardType.id}_0`} />
              <CardImage id={cardType.id} face="1" endpoint="types" name={cardType.name} key={`${cardType.color}_${cardType.id}_0`} />
            </div>
          </div>
        )
      })}
      <AddType types={types} />
    </div>
  );
}