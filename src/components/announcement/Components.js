import styled from 'styled-components'

export const Title = styled.h3.attrs({
  className:'text-gray-700'
})``

export const List = styled.ul.attrs({
  className: 'list-outside py-3 '
})`
  height: 85%;
`

export const ListItem = styled.li.attrs(props=>({
  className:`py-2 px-5 flex items-center ${props.index % 2 === 0 ? 'bg-gray-100' : ''}`
}))``

export const Description = styled.p.attrs({
  className:'pl-2 text-sm text-gray-800'
})``

export const Time = styled.div.attrs({
  className:'pl-2 text-gray-600'
})`
  font-size:10px;
`
export const CardFooter = styled.div.attrs({
  className: 'flex justify-center'
})``