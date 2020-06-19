import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton mentions={27} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={97} />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications />
    </Container>
  );
};

export default ServerList;
