import { getEntries } from '@/sanity/sanity-utils';

export default async function Portfolio() {
  const entries = await getEntries();
  console.log(entries);

  return (
    <div>
      <h1>Portfolio page</h1>
      {entries.map((entry) => {
        {
          console.log('something');
          console.log(entry);
        }
        <div key={entry.id}>{entry.name}</div>;
      })}
    </div>
  );
}
