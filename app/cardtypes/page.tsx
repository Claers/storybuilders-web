import TypesList from "./typeList";



export default async function CardTypes() {

  return (
    <div>
      <h1>Card Types</h1>
      {/* @ts-expect-error Server Component */}
      <TypesList />
    </div>
  );
}