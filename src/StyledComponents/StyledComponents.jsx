// import React from "react";
import styled, { keyframes } from "styled-components";


const Wrap = styled.section`
 background: lightyellow;
 height: 200px;
`
const Title = styled.h1`
 font-size: 24px;
 text-align: center;
 line-height: 200px;
 color: lightgreen;
`
const Button = styled.button`
 width: 100px;
 height: 50px;
 background: ${(props)=> (props.best? 'lightcoral' : 'lightblue')};
 margin: 10px;
 border: 3px solid ${(props)=> (props.best? '#ccc' : '#333')};
 border-radius: 5px;
`

const FirstButton = styled(Button)`
 width: 150px;
 background: orange; 
` // 상속받아서 적용하는 방법

const SecondButton = (props) =>
<button {...props} children={props.children.split('').reverse()} />

const Input = styled.input`
 padding: 8px;
 margin: 10px;
 color: ${(props)=> props.inputColor || 'lightblue'};
 background: lightyellow;
 border-radius: 5px;
`

const InputTwo = styled.input.attrs((props)=>({
    type: 'text',
    size: props.size || '16px'
}))`
color: navy;
font-size: ${(props) => props.size};
border: 2px solid #333;
border-radius: 5px;

padding: ${(props) => props.size};
`

const rotate = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`

const Rotate = styled.div`
 display: inline-block;
 animation: ${rotate} 0.5s infinite linear;
 padding: 30px;
 font-size: 50px;
 color: lightcoral;
`




export default function StyledComponents() {
    return(
        <>
          <Wrap>
            <Title>Hello, React!</Title>
          </Wrap>
          <Button>Button</Button>
          <Button best>Button</Button> 
          {/* best가 존재하면 true 존재하지 않다면 false 하지만 항상 존재하기 때문에 생략가능함 */}

          <br/>

          <FirstButton>FirstButton</FirstButton> {/* 상속받기 */}
          <FirstButton as= 'a' href= 'http://www.google.com'>FirstButton</FirstButton>

          <br />

          <SecondButton>SecondButton</SecondButton>
          <Button as={SecondButton}>Button</Button>
          {/* as로 다른 컴포넌트의 속성을 가져올 수 있다 */}

          <br />

          <Input type='text' defaultValue='input-text' inputColor='red' />
          <InputTwo placeholder='small-size'/>
          <InputTwo placeholder='big-size' size='24px'/>

          <Rotate>*</Rotate>
          
        </>
    )
}

