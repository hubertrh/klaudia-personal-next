import { getEntries } from '@/sanity/sanity-utils';

export default async function Portfolio() {
  const entries = await getEntries();

  return (
    <div>
      {entries.map((entry) => {
        console.log(entry);
      })}
    </div>
  );
}
