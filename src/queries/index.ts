import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'z3sueazq',
  dataset: 'production',
})

export async function getProjectsData() {
  try {
    const data = await client.fetch(`*[_type == "post"] | order(date desc){
      title,
      slug,
      githubLink,
      liveDemoLink,
      description,
      publishedMonth,
      date,
      images[]{
            asset->{
              _id, url
            },
            alt
          },
       categories[]->{ 
         title
        },
        topicTitle1,
        topicBody1[]{
          ...,
          asset->{
            ...,
            "_key": _id
          }
        },
        topicTitle2,
        topicBody2[]{
          ...,
          asset->{
            ...,
            "_key": _id
          }
        },
        topicTitle3,
        topicBody3[]{
          ...,
          asset->{
            ...,
            "_key": _id
          }
        },
        topicTitle4,
        topicBody4[]{
          ...,
          asset->{
            ...,
            "_key": _id
          }
        }
            
    }`)
    return data
  } catch (error) {
    console.log(error)
  }
}
