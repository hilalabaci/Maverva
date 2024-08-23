import { ButtonStylesforIconPerson, IconPerson } from "../top-menu/styles";
import { formatDistanceToNow } from "date-fns";
import {
  Container,
  Wrapper,
  UserInfo,
  UserName,
  Info,
  Main,
  TimeInfo,
} from "./styles";
import { NotificationType } from "../../../types";

type NotificationPropsType = {
  notification: NotificationType;
};
function Notification(props: NotificationPropsType) {
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
          <Main>
            <UserName>
              {notification.fromUserId.fullName} {notification.message}
              <TimeInfo>
                {formatDistanceToNow(notification.createdAdd, {
                  addSuffix: true,
                })}
              </TimeInfo>
            </UserName>
          </Main>
        </Info>
      </Wrapper>
    </Container>
  );
}
export default Notification;
