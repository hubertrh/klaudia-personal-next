import { PortableTextBlock } from 'sanity';

type Dimensions = {
  width: number;
  height: number;
};

type Metadata = {
  lqip: string;
  dimensions: Dimensions;
};

type AboutMeImage = {
  url: string;
  alt: string;
  metadata: Metadata;
};

export type AboutEntry = {
  _id: string;
  aboutMeTitle: string;
  aboutMeDescription: PortableTextBlock[];
  aboutMeImage: AboutMeImage;
};
