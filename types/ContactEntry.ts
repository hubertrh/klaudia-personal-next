import { PortableTextBlock } from 'sanity';

export type ContactEntry = {
  _id: string;
  contactMeTitle: string;
  contactMeDescription: PortableTextBlock[];
};
