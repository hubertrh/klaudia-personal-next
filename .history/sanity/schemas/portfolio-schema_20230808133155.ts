const portfolio = {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'category' }],
    },
  ],
};

export default portfolio;
