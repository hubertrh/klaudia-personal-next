import { createClient, groq } from 'next-sanity';
import { Entry } from '@/types/Entry';
import { PortfolioCategory } from '@/types/PortfolioCategory';

const clientConfig = {
  projectId: 'ja4beydf',
  dataset: 'production',
  apiVersion: '2023-08-07',
};

export async function getPortfolioCategories(): Promise<PortfolioCategory> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      title,
      featuredPicture{
        asset->{
          _id,
          url
        }
      },
      entries[]{
        _id,
        name,
        slug,
        featuredPicture{
          asset->{
            _id,
            url
          }
        },
        pictures {
          asset->{
            _id,
            url
          }
        }[],
      }
    }`,
  );
}

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
