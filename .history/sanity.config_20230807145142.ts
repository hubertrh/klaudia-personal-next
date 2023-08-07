import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'ja4beydf',
  dataset: 'production',
  title: 'Klaudia Rogala-Haracz',
  apiVersion: '2023-08-07',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
