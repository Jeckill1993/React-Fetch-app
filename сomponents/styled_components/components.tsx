import styled from 'styled-components';



export const MainContainerLayout = styled.div`
  background:  rgb(212, 212, 224);
  color: rgb(123, 123, 143);
  display: grid;
  grid-template-rows: 100px 10fr;
  width: 60%;
  margin: auto;
  padding: 10px;
`

//comments
export const CommentLayout = styled.div`
    background-color: white;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
`
export const ButtonLayout = styled.button`  
    background-color: rgb(145, 143, 153);
    color: white;
    height: 2em;
    width: 10em;
    border: 1px solid rgb(145, 143, 153);
    border-radius: 4px;
    margin: 10px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
`
export const TextareaLayout = styled.textarea`
    resize: none;
`

//createPost
export const CreateFormLayout = styled.form`
    background:  rgb(212, 212, 224);
    width: 70%,
    margin: auto;
    display: grid;
    grid-template-rows: 50px 3fr 1fr
`
export const InputLayout = styled.input`
    margin-top: 10px;
    width: 95%;
    height: 30px;
`
export const TextAreaLayout = styled.input`
    width: 95%;
    height: 300px;
    margin-top: 10px;
`

//posts
export const LinkLayout = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
`
export const A = styled.a`
    text-decoration: none;
    color: rgb(45, 45, 51);
`


//navbar
export const NavLayout = styled.div`
    display: flex;
    align-items: center;  
    background: rgb(79, 79, 87);
    padding: 10px;
`

//
export const PostLayout = styled.div`
    background:  rgb(212, 212, 224);
    color: rgb(45, 45, 51);
  
    display: grid;
    grid-template-rows: 100px 10fr;
  
    width: 60%;
    margin: auto;
    padding: 10px;
`
export const ButtonsContainerLayout = styled.div`
    display: flex;
    align-items: center;  
    padding: 10px;
`
export const ButtonLinkLayout = styled.a`
    background-color: rgb(145, 143, 153);
    color: white;
    height: 2em;
    width: 10em;
    border: 1px solid rgb(145, 143, 153);
    border-radius: 4px;
    margin: 10px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
`

export const PostBodyLayout = styled.div`
    background-color: white;
    border: 1px solid rgb(45, 45, 51);
    margin-top: 10px;
    padding: 10px;
`
