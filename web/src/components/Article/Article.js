import { Heading, Text } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article>
      <header>
        <Heading as="h2">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </Heading>
      </header>
      <Text>{article.body}</Text>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
