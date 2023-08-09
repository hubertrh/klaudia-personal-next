const entry = {
  name: 'entry',
  title: 'Entry',
  type: 'object',
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
      of: [{ type: 'image' }],
    },
  ],
};

export default entry;
