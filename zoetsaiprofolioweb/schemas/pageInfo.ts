import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'introImage',
      title: 'Image',
      type: 'image',
      options:{
        hotspot: true,
      }
      }),
    defineField({
      name: 'aboutMeInformation',
      title: 'AboutMeIndformation',
      type: 'string',
    }),
    defineField({
      name: 'profilePic',
      title: 'ProfliePic',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'social'}}],
    }),
  ],

})
