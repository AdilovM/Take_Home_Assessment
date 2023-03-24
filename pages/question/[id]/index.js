import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

const question = ({ question }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={question.question} description={question.excerpt} />
      <h3>{question.question}</h3>
      <p>{question.answer}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/questions/${context.params.id}`,
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    }
  )

  const question = await res.json()

  return {
    props: {
      question,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/questions`,
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`,
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    }
  )

  const questions = await res.json()

  const ids = questions.map((question) => question.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}



export default question
