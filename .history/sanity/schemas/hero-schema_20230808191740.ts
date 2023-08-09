const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        },
      ],
    },
  ],
};

export default hero;
