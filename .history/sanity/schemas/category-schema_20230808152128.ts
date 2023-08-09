const category = {
  name: 'category',
  title: 'Portfolio Categories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'entries',
      title: 'Entries',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'entry' } }],
    },
  ],
};

export default category;