export type Entry = {
  _id: string;
  title: string;
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
