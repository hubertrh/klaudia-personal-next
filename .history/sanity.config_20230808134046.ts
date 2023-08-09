import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas';

const config = defineConfig({
  projectId: 'ja4beydf',
  dataset: 'production',
  title: 'Klaudia Next Website',
  apiVersion: '2023-08-07',
  basePath: '/admin',
  plugins: [deskTool()],
  schemas: { types: schemas },
});

export default config;
