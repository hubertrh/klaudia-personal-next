import { createClient, groq } from 'next-sanity';
import { Entry } from '@/types/Entry';

const clientConfig = {
  projectId: 'ja4beydf',
  dataset: 'production',
  apiVersion: '2023-08-07',
};

export async function getPortfolioCategories

export async function getEntries(): Promise<Entry[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "entry"]{
      _id,
      name,
      "slug": slug.current,
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
