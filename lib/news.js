import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const newsDirectory = path.join(process.cwd(), 'news')

export function getSortedNewsData() {
  // Get file names under /news
  const fileNames = fs.readdirSync(newsDirectory)
  const allNewsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(newsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort news items by date
  return allNewsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllNewsIds() {
  const fileNames = fs.readdirSync(newsDirectory)
  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const seoFriendlyId = id.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    return {
      params: {
        id: seoFriendlyId
      }
    }
  })
}

export async function getNewsData(id) {
  const fullPath = path.join(newsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()    // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    metaDescription: matterResult.data.description || '',
    ...matterResult.data
  }
}
