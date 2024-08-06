import { ButtonStylesforIconPerson, IconPerson } from "../top-menu/styles";
import { formatDistanceToNow } from "date-fns";
import {
  Container,
  Wrapper,
  UserInfo,
  UserName,
  Info,
  Main,
  MainInfo,
  TimeInfo,
} from "./styles";

function Notification(props) {
  const { notification } = props;

  return (
    <Container $isRead={notification.isRead}>
      <Wrapper>
        <UserInfo>
          <ButtonStylesforIconPerson style={{ margin: 0 }}>
            <IconPerson />
          </ButtonStylesforIconPerson>
        </UserInfo>
        <Info>
          <UserName>{notification.fromUserId.fullName}</UserName>
          <Main>
            <MainInfo>{notification.message}</MainInfo>
            <TimeInfo>
              {formatDistanceToNow(notification.createdAdd, {
                addSuffix: true,
              })}
            </TimeInfo>
          </Main>
        </Info>
      </Wrapper>
    </Container>
  );
}
export default Notification;
