
export type CardExtension = {
  id?: number
  name: string
  cards?: Array<Card>
}

export type CardType = {
  id?: number
  name: string
  cards?: Array<Card>
  color?: string
}

export type Card = {
  id?: number
  name: string
  description: string
  difficulty: number
  card_type?: CardType
  extension?: CardExtension
}


export default async function useFetchData() {
  const cards_res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/storybuilders/cards/get`, { cache: 'no-store' })
  const types_res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/storybuilders/types/get`, { cache: 'no-store' })
  const extensions_res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/storybuilders/extensions/get`, { cache: 'no-store' })

  if (!cards_res.ok) {
    console.log(await cards_res.text());
    throw new Error()
  }

  if (!types_res.ok) {
    console.log(await types_res.text())
    throw new Error()
  }

  if (!extensions_res.ok) {
    console.log(await extensions_res.text())
    throw new Error()
  }

  const extensionData: JSON[] = await extensions_res.json();
  const typeData: JSON[] = await types_res.json();
  const cardData: JSON[] = await cards_res.json();

  const extensions: CardExtension[] = extensionData?.map((data: any) => { const extension: CardExtension = { id: data.id, name: data.name }; return extension })
  const types: CardType[] = typeData?.map((data: any) => { const type: CardType = { id: data.id, name: data.name, color: data.color }; return type })
  const cards: Card[] = cardData?.map((data: any) => {
    const card: Card =
    {
      id: data.id,
      name: data.name,
      description: data.desription,
      difficulty: data.difficulty,
      card_type: types?.find(type => type.id == data.card_type),
      extension: extensions?.find(extension => extension.id == data.extension)
    }; return card
  })
  return {
    cards: cards,
    types: types,
    extensions: extensions,
  };
}