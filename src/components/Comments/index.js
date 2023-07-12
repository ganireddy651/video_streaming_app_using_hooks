import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [userName, setUserName] = useState('')
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])

  const onChangeUserName = e => {
    setUserName(e.target.value)
  }

  const onChangeComment = e => {
    setComment(e.target.value)
  }

  const onFormSubmit = e => {
    e.preventDefault()

    const newComment = {
      id: uuidv4(),
      userName,
      comment,
    }
    setCommentList(prevCommentList => [...prevCommentList, newComment])
    setUserName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onFormSubmit}>
        <NameInput
          onChange={onChangeUserName}
          type="text"
          placeholder="Your name"
          value={userName}
        />
        <CommentTextInput
          onChange={onChangeComment}
          placeholder="Your comment"
          rows="6"
          value={comment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(eachItem => (
          <CommentItem commentDetails={eachItem} key={eachItem.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}
export default Comments
