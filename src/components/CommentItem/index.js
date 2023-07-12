import {
  ListItem,
  Avatar,
  NameAndCommentContainer,
  NameText,
  CommentText,
  HorizontalLine,
  RemoveButton,
  FlexContainer,
} from './styledComponents'

const CommentItem = props => {
  const {commentDetails, removeComment} = props
  const {id, userName, comment} = commentDetails

  const onRemove = () => {
    removeComment(id)
  }

  return (
    <>
      <ListItem>
        <FlexContainer>
          {userName && <Avatar>{userName[0].toUpperCase()}</Avatar>}
          <NameAndCommentContainer>
            <NameText>{userName}</NameText>
            <CommentText>{comment}</CommentText>
          </NameAndCommentContainer>
        </FlexContainer>
        <div>
          <RemoveButton type="button" onClick={onRemove}>
            Remove
          </RemoveButton>
        </div>
      </ListItem>
      <HorizontalLine />
    </>
  )
}

export default CommentItem
