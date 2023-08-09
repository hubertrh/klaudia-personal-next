const about = {
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'about-me-title',
      title: 'About Me - section name',
      type: 'string',
    },
    {
      name: 'about-me-image',
      title: 'About Me - section image',
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
