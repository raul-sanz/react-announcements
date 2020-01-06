import styled from 'styled-components'

export const Icon = styled.i.attrs(props =>({
  className:`${props.icon} text-${props.size || 'lg'} text-${props.color || 'black'}`
}))``

export const Col = styled.div.attrs(props=>({
  className:`w-${props.size} `
}))``

export const Card = styled.div.attrs({
  className: 'rounded-lg bg-white w-full h-full shadow-lg p-5'
})``

export const Btn = styled.button.attrs(props=>({
  className:`bg-${props.color} text-${props.text}  py-2 px-4 rounded ml-1 ${props.border}`
}))``