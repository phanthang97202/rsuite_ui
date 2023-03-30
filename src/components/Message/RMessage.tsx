import React from "react";
import { Message } from "rsuite";

const RMessage = () => {
  return (
    <>
      <Message showIcon type="warning">
        Đang tải dữ liệu về máy
      </Message>
      <Message
        full
        style={{ marginTop: 0 }}
        closable
        showIcon
        type="info"
        header="Thông tin"
      >
        Lỗi dữ liệu hiển thị
      </Message>
    </>
  );
};

export default RMessage;
