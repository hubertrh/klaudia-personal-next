const about = {
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'about-me-title',
      title: 'Section name',
      type: 'string',
    },
    {
      name: 'about-me-image',
      title: 'Section image',
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

export default about;
