import { getEntries } from '@/sanity/sanity-utils';
// import { Entry } from '@/types/Entry';

export default async function Portfolio() {
  await getEntries().then((entries) => {
    console.log(entries);
  });

  return (
    <div>
      <h1>Portfolio page</h1>
      {/* {entries.map((entry: Entry) => {
        <div key={entry._id}>{entry.name}</div>;
      })} */}
    </div>
  );
}
