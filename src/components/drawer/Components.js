import styled from 'styled-components'

export const DrawerContainer = styled.div.attrs({
  className:'h-full bg-white'
})`
  box-shadow: 8px 0 10px -6px #00000021
`

export const HeaderDrawer = styled.div.attrs({
  className:'pl-5 pt-4'
})``

export const Title = styled.h4.attrs({
  className:'font-semibold text-xl text-gray-700'
})``

export const ListDrawer = styled.div.attrs({
  className:'pt-5'
})``

export const Item = styled.div.attrs(props=>({
  className:`flex items-center py-3 pl-8 ${props.index % 2 === 0 ? 'bg-gray-100' : ''}`
}))``

export const Description = styled.p.attrs({
  className:'pl-3 text-base text-gray-600'
})``