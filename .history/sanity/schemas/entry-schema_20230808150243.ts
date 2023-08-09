const entry = {
  name: 'entry',
  title: 'Entry',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'pictures',
      title: 'Pictures',
      type: 'array',
      of: [{ type: 'picture' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'pictures[0]',
    },
  },
};

export default entry;
