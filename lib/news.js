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
      ...matterResult.data,
      date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : null
    }
  })
  // Filter out news items scheduled in the future
  const now = new Date()
  const liveNews = allNewsData.filter(item => item.date && new Date(item.date) <= now)
  // Sort news items by date
  return liveNews.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllNewsIds() {
  const fileNames = fs.readdirSync(newsDirectory)
  // Only include IDs for news items whose date is not in the future
  return fileNames
    .filter(fileName => {
      const fullPath = path.join(newsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      // Ensure date is valid before comparison
      const itemDate = new Date(matterResult.data.date);
      return !isNaN(itemDate) && itemDate <= new Date();
    })
    .map(fileName => {
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
    metaDescription: matterResult.data.metaDescription || '',
    ...matterResult.data,
    date: matterResult.data.date ? new Date(matterResult.data.date).toISOString() : null
  }
}
