const portfolio = {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'category' }],
    },
  ],
};

export default portfolio;
