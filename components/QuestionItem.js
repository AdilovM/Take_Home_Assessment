import Link from 'next/link'
import questionsStyles from '../styles/Question.module.css'

const QuestionItem = ({ question }) => {
  return (
    <Link className={questionsStyles.card} href={`/question/${question.id}`}>
      {/* <a className={questionsStyles.card}> */}
        <h3>{question.title} &rarr;</h3>
        <p>{question.excerpt}</p>
      {/* </a> */}
    </Link>
  )
}

export default QuestionItem
