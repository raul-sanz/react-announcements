import React,{useState} from 'react'
import {Icon,Col,Card, Btn} from  '../global/GlobalComponents'
import {Label, Input, TextArea, ColorsContainer, ColorBtn, Actions } from "./Componens";

const colors = [
  {name:'red-600'},
  {name:'green-600'},
  {name:'purple-600'},
  {name:'blue-600'},
  {name:'orange-600'},
  {name:'yellow-600'}
]

const Event = (props) => {
  const [selected,setSelected] = useState('red-600')

  const [title,setTitle] = useState('')
  const [message,setMessage] = useState('')

  const hadleClick = ()=>{
    props.func(title,message,selected,()=>{
      setSelected('red-600')
      setTitle('')
      setMessage('')
    })
  }

  return (
    <Card>
      <Label>Event Title</Label>
      <Input value={title} name="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter you event title"/>

      <Label>Event Description</Label>
      <TextArea value={message} name="message" onChange={(e)=>{setMessage(e.target.value)}} rows="4" placeholder="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit."/>

      <Label>Set Color</Label>
      <ColorsContainer>
        {colors.map((color,i)=>{
          return(
            <ColorBtn color={color.name} onClick={()=>{setSelected(color.name)}} key={i.toString()}>
              {selected === color.name && <Icon icon="fal fa-check" size="sm" color="white"/>}
            </ColorBtn>
          )
        })}
      </ColorsContainer>
      
      <Actions>
        <Col size="3/6">
          <Btn color="purple-600" text="white" onClick={hadleClick}>Create</Btn>
          <Btn color="transparent" text="red-500" border="border border-red-500">Cancel</Btn>
        </Col>
        <Col size="3/6" className="flex justify-end">
          <Btn color="transparent" text="black">Delete</Btn>
        </Col>
      </Actions>
    </Card>
  )
}

export default Event
