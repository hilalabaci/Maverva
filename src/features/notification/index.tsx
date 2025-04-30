import {
  ButtonStylesforIconPerson,
  IconPerson,
} from "../../features/top-menu/styles";
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
import { NotificationType } from "../../types";

type NotificationPropsType = {
  notification: NotificationType;
};
function Notification(props: NotificationPropsType) {
  const { notification } = props;

  console.log("Notification", notification);
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
              {notification.Message}
              <TimeInfo>
                {formatDistanceToNow(notification.CreatedAt, {
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
