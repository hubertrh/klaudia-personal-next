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
      name: 'about-me-description',
      title: 'Section description',
      type: "array",
      of: [{ type: "block" }]}
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
