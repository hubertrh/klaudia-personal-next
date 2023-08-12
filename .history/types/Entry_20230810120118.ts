export type Entry = {
  name: string;
  slug: string;
  featuredPicture: {
    asset: {
      _id: string;
      url: string;
    };
  };
  pictures: {
    asset: {
      _id: string;
      url: string;
    };
  }[];
};
