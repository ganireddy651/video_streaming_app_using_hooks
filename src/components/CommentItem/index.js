import {
  ListItem,
  Avatar,
  NameAndCommentContainer,
  NameText,
  CommentText,
  HorizontalLine,
} from './styledComponents'

const CommentItem = props => {
  const {commentDetails} = props
  const {userName, comment} = commentDetails

  return (
    <>
      <ListItem>
        {userName && <Avatar>{userName[0].toUpperCase()}</Avatar>}
        <NameAndCommentContainer>
          <NameText>{userName}</NameText>
          <CommentText>{comment}</CommentText>
        </NameAndCommentContainer>
      </ListItem>
      <HorizontalLine />
    </>
  )
}

export default CommentItem
