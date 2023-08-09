const contact = {
  name: 'contact',
  title: 'Contact Me',
  type: 'document',
  fields: [
    {
      name: 'contact-me-title',
      title: 'Section name',
      type: 'string',
    },
    {
      name: 'contact-me-description',
      title: 'Section description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default contact;
