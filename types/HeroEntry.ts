type Dimensions = {
  width: number;
  height: number;
};

type Metadata = {
  lqip: string;
  dimensions: Dimensions;
};

type HeroImage = {
  url: string;
  alt: string;
  metadata: Metadata;
};

export type HeroEntry = {
  _id: string;
  heroImage: HeroImage;
};
