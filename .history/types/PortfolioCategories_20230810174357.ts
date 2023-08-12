export type PortfolioCategories = {
  _id: string;
  title: string;
  featuredPicture: {
    asset: {
      _id: string;
      url: string;
    };
  };
  // {
  //   name: 'entries',
  //   title: 'Category Entries',
  //   type: 'array',
  //   of: [{ type: 'reference', to: { type: 'entry' } }],
  // },
  entries: {
    _id: string;
    title: string;
    
