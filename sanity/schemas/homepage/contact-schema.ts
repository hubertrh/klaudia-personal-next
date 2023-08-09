const contact = {
  name: 'contact',
  title: 'Contact Me',
  type: 'document',
  fields: [
    {
      name: 'contactMeTitle',
      title: 'Section name',
      type: 'string',
    },
    {
      name: 'contactMeDescription',
      title: 'Section description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default contact;
