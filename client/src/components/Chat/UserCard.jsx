import { useContext } from "react";
import { Stack } from "react-bootstrap";
import avater from "../../assets/avarter.svg";
import { ChatContext } from "../../context/ChatContext";
import { useFecthLatestMessage } from "../../hooks/useFetchLatestMessage";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { unreadNotificationsFunc } from "../../utils/unreadNotifications";
import moment from "moment";

const UserCard = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const { latestMessage } = useFecthLatestMessage(chat);
  const { onlineUsers, notifications, markThisUserNotificationsAsRead } =
    useContext(ChatContext);

  const unreadNotifications = unreadNotificationsFunc(notifications);

  const isOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );

  const thisUserNotifications = unreadNotifications?.filter(
    (n) => n.senderId == recipientUser?._id
  );

  const truncateText = (text) => {
    let shortText = text.substring(0, 20);

    if (text.length > 20) {
      shortText = shortText + "...";
    }

    return shortText;
  };

  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className={`user-card align-items-center p-3 ${
          thisUserNotifications?.length > 0 ? "unread" : ""
        }`}
        role="button"
        onClick={() => {
          if (thisUserNotifications?.length !== 0) {
            markThisUserNotificationsAsRead(
              thisUserNotifications,
              notifications
            );
          }
        }}
      >
        <div className="d-flex align-items-center">
          <div className="me-3">
            <img src={avater} alt="person-circle" height="50px" />
          </div>
          <div className="text-content">
            <div className="name fs-5"  style={{color: "black"}}>{recipientUser?.name}</div>
            <div className="text text-muted">
              {latestMessage?.text && (
                <span>{truncateText(latestMessage?.text)}</span>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <div className="date text-muted">
            {moment(latestMessage?.createdAt).calendar()}
          </div>
          <div className="notifications-badge">
            {thisUserNotifications?.length > 0 &&
              thisUserNotifications?.length}
          </div>
          <span className={`user-status ${isOnline ? "online" : ""}`}></span>
        </div>
      </Stack>
    </>
  );
};

export default UserCard;
