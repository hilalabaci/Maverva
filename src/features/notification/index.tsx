import {
  ButtonStylesforIconPerson,
} from "../../features/top-menu/styles";
import { formatDistanceToNow } from "date-fns";
import {
  Container,
  Wrapper,
  UserInfo,
  UserName,
  MessageText,
  Info,
  Main,
  TimeInfo,
  UnreadDot,
} from "./styles";
import { NotificationType } from "../../types";
import MemberPhoto from "../user/member-photo";

type NotificationPropsType = {
  notification: NotificationType;
};
function Notification(props: NotificationPropsType) {
  const { notification } = props;

  return (
    <Container $isRead={notification.IsRead}>
      <Wrapper>
        <UserInfo>
          <ButtonStylesforIconPerson style={{ margin: 0 }}>
            <MemberPhoto
              $userPhotoWidth="32px"
              $userPhotoHeight="32px"
              $userPhotoFontSize="10px"
              $userBorderadius="50px"
              $fontWeight="600"
              user={notification.FromUser}
            />
          </ButtonStylesforIconPerson>
        </UserInfo>
        <Info>
          <Main>
            <UserName>{notification.FromUser?.FullName}</UserName>
            <MessageText>{notification.Message}</MessageText>
          </Main>
          <TimeInfo>
            {formatDistanceToNow(notification.CreatedAt, { addSuffix: true })}
          </TimeInfo>
        </Info>
      </Wrapper>
      {!notification.IsRead && <UnreadDot />}
    </Container>
  );
}
export default Notification;
