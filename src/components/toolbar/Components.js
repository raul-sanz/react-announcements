import styled from 'styled-components'
import { Icon,  } from "../global/GlobalComponents";

export const ToolbarSpace = styled.div.attrs({
  className:'flex w-full justify-end mt-4 pr-5'
})``  

export const ToolbarContainer = styled.div.attrs({
  className:'flex bg-white rounded-full py-1 px-2 w-full  md:w-5/12 h-12 shadow-lg'
})``

export const Options = styled.div.attrs({
  className:'w-3/5 h-full items-center flex'
})``

export const UserInfo = styled.div.attrs({
  className:'w-2/5 h-full flex justify-end'
})``

export const ItemIcon = styled(Icon)`
  padding:0px 8px;
`
export const RoleName = styled.p.attrs({
  className:'text-sm text-gray-600' 
})``

export const UserName = styled.div.attrs({
  className:'flex-no-wrap text-center mr-3'
})``

export const Status = styled.div`
  font-size:10px;
`
export const Avatar = styled.img.attrs({
  className: 'rounded-full h-full'
})``

export const ContBadge = styled.div`
  text-decoration: none;
  position: relative;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
`
export const Badge = styled.span`
  background: #fb4848eb;
  color: white;
  position: absolute;
  right: 2px;
  padding: 1px 2px;
  font-size:8px;
  border-radius: 25px;
`

