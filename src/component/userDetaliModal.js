import React from "react";
import { staticData } from "../data/const";

function UserDetailModal(currentItem) {
  const { userName, emailId, phoneNumber } = currentItem.currentItem;
  console.log("currentItem", currentItem);
  return (
    <div>
      <div>
        <span>{staticData.name}:</span>
        <span className="mx-1">{userName}</span>
      </div>
      <div>
        <span>{staticData.email}:</span>
        <span className="mx-1">{emailId}</span>
      </div>
      <div>
        <span>{staticData.phoneNumber}:</span>
        <span className="mx-1">{phoneNumber}</span>
      </div>
    </div>
  );
}
export default UserDetailModal;
