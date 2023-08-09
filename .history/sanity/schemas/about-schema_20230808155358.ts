const about = {
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'aboutMeTitle',
      title: 'Section name',
      type: 'string',
    },
    {
      name: 'aboutMeDescription',
      title: 'Section description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'aboutMeImage',
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
