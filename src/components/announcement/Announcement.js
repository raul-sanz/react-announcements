import React,{useState,useEffect} from 'react'
import { Title, List, ListItem, Description, Time, CardFooter } from "./Components";
import {Card,Icon,Btn} from '../global/GlobalComponents'
import moment from 'moment'


const Announcement = ({data}) => {
  const validate = (item)=>{
    let to = moment(item.created_at)
    let now = moment(moment().format())
    return now.diff(to,'minutes')
  }
  return (
    <Card>
      <Title>Ultimos Comunicados</Title>
      {data.length === 0 && <div className="text-center">no hay datos</div> }
      <List>
        {
        data.map((el,i)=>{
          return (<ListItem index={i} key={i.toString()}>
            <Icon icon="fas fa-circle" color={el.color}/>
            <div>
              <Description>{el.title}</Description>
              <Time>{`Hace ${validate(el)+360} minutos`}</Time>
            </div>
          </ListItem>)
        })}
      </List>
      {
        data.length != 0 &&
        
        <CardFooter>
          <Btn color="transparent" text="black">ver todos los comunicados</Btn>
        </CardFooter>
      }
    </Card>
  )
}

export default Announcement