import React from 'react'
import { ToolbarSpace, ToolbarContainer,Options, UserInfo, ItemIcon, RoleName, ContBadge, Badge, UserName, Status, Avatar } from "./Components";

const Toolbar = () => {
  return (
    <ToolbarSpace>
      <ToolbarContainer>

        <Options>

          <ItemIcon color="gray-700" icon="fal fa-envelope" />
          <ItemIcon color="gray-700" icon="fal fa-calendar" />

          <RoleName>
            Administrador 
          </RoleName>

          <ContBadge>
            <ItemIcon color="gray-700" icon="fal fa-bell" />
            <Badge>10</Badge>
          </ContBadge>

        </Options>

        <UserInfo>

          <UserName>
            <div className="text-sm">
              Alice Moran
            </div>
            <Status >
              Conectado
            </Status>
          </UserName>

          <Avatar src="https://avatarfiles.alphacoders.com/124/124426.jpg" alt="imagen pic"/>

        </UserInfo>

      </ToolbarContainer>
    </ToolbarSpace>
  )
}

export default Toolbar
