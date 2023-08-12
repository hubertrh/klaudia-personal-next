import { createClient, groq } from 'next-sanity';

const config = {
  projectId: 'ja4beydf',
  dataset: 'production',
  apiVersion: '2023-08-07',
};

export async function getEntries() {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "entry"]{
      name,
      slug,
      featuredPicture{
        asset->{
          _id,
          url
        }
      },
      pictures[]{
        asset->{
          _id,
          url
        }
      }
    }`,
  );
}
