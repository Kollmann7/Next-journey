import {db} from '@/db'


export default async function Home() {
  const items = await db.query.test.findMany()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        {items.map((item) => (
          <div key={item.id}><p>user connected : {item.name}</p></div>
        ))}
        
    </main>
  );
}
