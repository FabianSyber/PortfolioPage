export interface Project {
  id: string
  markdown: string
  images: string[]
  meta: {
    title: string
    year: string
    location?: string
    status?: string
    client?: string
    categories: string[]
  }
}

export const loadProjects = async (): Promise<Project[]> => {
  const mdModules = import.meta.glob('../../posts/*/content.md', { as: 'raw' })
  const imgModules = import.meta.glob('../../posts/*/images.json', { as: 'json' })
  const jsonModules = import.meta.glob('../../posts/*/post.json', { as: 'json' })

  const projects: Project[] = []

  for (const path in mdModules) {
    const id = path.split('/')[3] // Adjust based on your path structure
    
    const imgKey = Object.keys(imgModules).find(key => key.includes(`/${id}/`))
    const jsonKey = Object.keys(jsonModules).find(key => key.includes(`/${id}/`))
    
    if (!imgKey || !jsonKey) {
      console.warn(`Missing files for project: ${id}`)
      continue
    }

    const [markdown, images, meta] = await Promise.all([
        mdModules[path](),
        imgModules[imgKey](),
        jsonModules[jsonKey](),
    ])

    projects.push({
        id,
        markdown,
        images: images.default,
        meta: meta.default,
    })
  }

  console.log(projects)
  return projects
}