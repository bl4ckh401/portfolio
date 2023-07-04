import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {schemaTypes} from './schemas'

const config = defineConfig({
    projectId:'loialb2e',
    dataset:'production',
    title:'pavprograms',
    apiVersion:'2023-03-04',
    basePath:'/admin',
    plugin:[deskTool()],
    schema: {
        types: schemaTypes,
      
    },
})