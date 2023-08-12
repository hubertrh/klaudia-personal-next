export type Entry = {
  _id: string;
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
