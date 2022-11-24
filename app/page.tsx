import Link from 'next/link';
// import CardsList from './cardsList';
import CardsList from './cardsListStatic';
import 'bootstrap/dist/css/bootstrap.min.css';


export default async function Page() {

  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <CardsList />
    </div>
  );
}