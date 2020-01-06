import styled from "styled-components";

export const Label = styled.label.attrs({
 className: 'text-gray-700 block pb-2 text-sm '
})``

export const Input = styled.input.attrs({
  className:'shadow-md appearance-none rounded py-2 px-3 text-grey-darker bg-gray-100 w-full mb-4'
})``

export const TextArea = styled.textarea.attrs({
  className:'shadow-md appearance-none rounded py-2 px-3 text-grey-darker bg-gray-100 w-full mb-6'
})`
  resize: none;
`
export const ColorsContainer = styled.div.attrs({
  className: 'flex'
})``

export const ColorBtn = styled.div.attrs(props=>({
  className:`bg-${props.color} text-white font-bold py-2 px-4 rounded-full mr-2 flex justify-center cursor-pointer`
}))`
  height: 30px;
  width:30px;
`
export const Actions = styled.div.attrs({
  className:'flex mt-6'
})``

