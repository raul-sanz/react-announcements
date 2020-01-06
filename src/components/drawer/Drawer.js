import React from 'react'
import { DrawerContainer, HeaderDrawer, Title, ListDrawer, Item, Description } from "./Components";
import { Icon } from "../global/GlobalComponents";

const items = [
  {name:'Inicio',icon:'fal fa-home-alt',color:'blue-700'},
  {name:'Mensages',icon:'fal fa-envelope',color:'red-500'},
  {name:'Alumnos',icon:'fal fa-user-friends',color:'green-400'},
  {name:'Profesores',icon:'fal fa-user',color:'blue-400'},
  {name:'Ganancias',icon:'fal fa-chart-line',color:'blue-900'},
  {name:'Calendario',icon:'fal fa-calendar',color:'green-400'},
  {name:'Pagos',icon:'fal fa-dollar-sign',color:'red-500'},
  {name:'Comunicados',icon:'fal fa-comment-alt',color:'orange-500'},
  {name:'Cursos',icon:'fal fa-window-restore',color:'blue-900'},
  {name:'Setting',icon:'fal fa-cog',color:'red-500'}
]

const Drawer = () => {
  return (
      <DrawerContainer>
        <HeaderDrawer>
          <Title>
            MENU PRINCIPAL
          </Title>
        </HeaderDrawer>
        <ListDrawer>
          {items.map((el,i)=>{
            return (
              <Item  index={i} key={i.toString()}>
                <Icon color={el.color} icon={el.icon} size="xl"/>
                <Description>
                  {el.name}
                </Description>
              </Item>
            )
          })}
        </ListDrawer>
      </DrawerContainer>
  )
}

export default Drawer
