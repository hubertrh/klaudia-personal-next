const entry = {
  name: 'entry',
  title: 'Portfolio Entries',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'featuredPicture',
      title: 'Featured Picture',
      type: 'image',
    },
    {
      name: 'pictures',
      title: 'Pictures',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'featuredPicture',
    },
  },
};

export default entry;
