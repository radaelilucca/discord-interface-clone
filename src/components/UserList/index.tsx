import React from "react";

import randomName from "../../utils/randomName";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar
        className={isBot ? "bot" : ""}
        src={`https://api.adorable.io/avatars/50/${nickname}.png`}
      />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Lucca Radaeli" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
      <UserRow nickname={randomName()} />
    </Container>
  );
};

export default UserList;
