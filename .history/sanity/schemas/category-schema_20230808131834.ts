const category = {
  name: 'category',
  title: 'Category',
  type: 'object',
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
      of: [{ type: 'entry' }],
    },
  ],
};

export default category;
