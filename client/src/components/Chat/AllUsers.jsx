import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);
  const { onlineUsers } = useContext(ChatContext);

  const styles = `
    .all-users-container {
      width: 33%; /* 1/3 de la page */
      padding: 20px;
      box-sizing: border-box;
    }

    .all-users {
      display: flex;
      flex-direction: column;
    }

    .single-user {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      cursor: pointer;
      background-color: #f5f5f5;
      transition: background-color 0.3s;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .single-user:hover {
      background-color: #e0e0e0;
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    .user-name {
      font-weight: bold;
      color:black;
      margin-bottom: 5px;
    }

    .user-status {
      font-size: 12px;
    }

    .online {
      color: #4caf50; /* vert */
    }

    .offline {
      color: #f44336; /* rouge */
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="all-users-container">
        <div className="all-users">
          {potentialChats &&
            potentialChats.map((receiver, index) => (
              <div
                className="single-user"
                key={index}
                onClick={() => createChat(user._id, receiver._id)}
              >
                <div className="user-info">
                  <div className="user-name">{receiver.name}</div>
                  <div
                    className={
                      onlineUsers?.some(
                        (user) => user?.userId === receiver?._id
                      )
                        ? "user-status online"
                        : "user-status offline"
                    }
                  >
                    {onlineUsers?.some(
                      (user) => user?.userId === receiver?._id
                    )
                      ? "En ligne" 
                      : "Hors ligne"}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllUsers;
