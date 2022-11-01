import React, { useState, useMemo } from "react";
import UserDetailModal from "../../component/userDetaliModal";
import { userList, customStyles } from "../../data/const";
import Modal from "react-modal";

function UserList() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  const handleView = (item) => {
    setIsOpen(true);
    setCurrentItem(item);
  };
  return (
    <div className="user-list-outer display-f">
      <table>
        <tr>
          <th className="px-3">Name</th>
          <th>Email Id</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr>
          <div className="mb-2"></div>
        </tr>
        {userList.map((item, key) => {
          return (
            <tr key={key}>
              <td className="px-3">{item.userName}</td>
              <td>{item.emailId}</td>
              <td>{item.date}</td>
              <td>
                <button className="view-btn" onClick={() => handleView(item)}>
                  view
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <Modal
        isOpen={isOpen}
        style={useMemo(() => customStyles, [customStyles])}
        onRequestClose={() => setIsOpen(false)}
      >
        <UserDetailModal currentItem={currentItem} />
      </Modal>
    </div>
  );
}
export default UserList;
