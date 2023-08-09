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
      type: 'picture',
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
      media: 'featuredPicture',
    },
  },
};

export default entry;
