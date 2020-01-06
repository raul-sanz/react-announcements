import React,{useState,useEffect} from 'react'
import Toolbar from "../components/toolbar/Toolbar";
import styled from 'styled-components'
import {Col} from '../components/global/GlobalComponents'
import Event from '../components/event/Event'
import Announcement from '../components/announcement/Announcement'
import axios from 'axios'

const Container = styled.div.attrs({
  className: 'flex p-6'
})``

const Coll = styled(Col)`
  padding:0px 10px;
`

const Home = () => {

  const [announcements,setAnnouncements] = useState([])

  useEffect(() =>{
    async function fetchData() {
      const resp = await axios.get('https://challeng-back-react.herokuapp.com/announcements')
      setAnnouncements(resp.data)
    }
    fetchData();
    
  }, [])

  const newItem = async (title,message,color,callback) =>{
    const resp = await axios.post('https://challeng-back-react.herokuapp.com/announcements',{title,message,color})
    console.log(resp.data)
    setAnnouncements([...announcements,resp.data])
    callback()
  }

  return (
    <div className="h-full">
      <Toolbar/>

      <Container >
        <Coll size="3/6">
          <Event func={newItem}/>
        </Coll>
        <Coll size="3/6">
          <Announcement data={announcements}/>
        </Coll>
      </Container>
    </div>
  )
}

export default Home
