import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  list-style-type: none;
`

export const Avatar = styled.p`
  flex-shrink: 0;
  text-align: center;
  color: #ffffff;
  background-color: #824aaf;
  font-family: 'Roboto';
  font-size: 16px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin: 0px;
  padding: 7px;
`

export const NameAndCommentContainer = styled.div`
  margin-left: 12px;
`

export const NameText = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`
export const CommentText = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
`

export const HorizontalLine = styled.hr`
  border: 1px solid #cbd5e140;
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const RemoveButton = styled.button`
  background-color: #fc0307;
  outline: none;
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  height: 35px;
  width: 90px;
  border-radius: 5px;
`
