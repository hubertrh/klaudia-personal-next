import { createClient, groq } from 'next-sanity';
import { AboutEntry } from '@/types/AboutEntry';
import { ContactEntry } from '@/types/ContactEntry';
import { HeroEntry } from '@/types/HeroEntry';

const clientConfig = {
  projectId: 'ja4beydf',
  dataset: 'production',
  apiVersion: '2023-08-07',
};

export async function getHeroEntry(): Promise<HeroEntry | null> {
  const client = createClient(clientConfig);

  const query = groq`*[_type == "hero"] {
    _id,
    "heroImage": heroImage.asset->{
      url,
      alt,
      metadata {
        lqip,
        dimensions {
          width,
          height
        }
      }
    }
  }[0]`;

  try {
    const result: HeroEntry = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Failed to fetch hero entry:', error);
    return null;
  }
}

export async function getAboutEntry(): Promise<AboutEntry | null> {
  const client = createClient(clientConfig);

  const query = groq`*[_type == "about"] {
    _id,
    aboutMeTitle,
    aboutMeDescription,
    "aboutMeImage": aboutMeImage.asset->{
      url,
      alt,
      metadata {
        lqip,
        dimensions {
          width,
          height
        }
      }
    }
  }[0]`;

  try {
    const result: AboutEntry = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Failed to fetch about entry:', error);
    return null;
  }
}

export async function getContactEntry(): Promise<ContactEntry | null> {
  const client = createClient(clientConfig);

  const query = groq`*[_type == "contact"] {
    _id,
    contactMeTitle,
    contactMeDescription,
  }[0]`;

  try {
    const result: ContactEntry = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Failed to fetch contact entry:', error);
    return null;
  }
}
