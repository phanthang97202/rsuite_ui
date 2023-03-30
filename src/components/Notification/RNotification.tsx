// import React from "react";
// import { Button, Notification, Placeholder, useToaster } from "rsuite";
//
// type ShowNotificationProps = {
//   typeNotifi: "info" | "success" | "warning" | "error";
// };
// const ShowNotifications: React.FC<ShowNotificationProps> = ({ typeNotifi }) => {
//   return (
//     <Notification closable={true} type={typeNotifi} header={typeNotifi}>
//       <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
//     </Notification>
//   );
// };
// const RNotification = () => {
//   const toast = useToaster();
//   const handlePush = () => {
//     toast.push(<ShowNotifications typeNotifi="success" />, {
//       placement: "topEnd",
//       duration: 3000,
//     });
//   };
//   return (
//     <>
//       <Button onClick={handlePush}>Push Notification</Button>
//       {/* <ShowNotifications typeNotifi="warning" /> <br />
//       <ShowNotifications typeNotifi="success" /> <br />
//       <ShowNotifications typeNotifi="info" /> <br /> */}
//     </>
//   );
// };
//
// export default RNotification;
import React from "react";
import { Button, Notification, useToaster } from "rsuite";

const RNotification = () => {
  const toast = useToaster();
  const handlePush = () => {
    toast.push(
      <Notification
        closable
        type="info"
        header="info"
        title="Notification Title"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum libero
        nihil necessitatibus
      </Notification>,
      { placement: "bottomEnd", duration: 5000 }
    );
  };
  return (
    <>
      <Button onClick={handlePush}>Show Notification</Button>
    </>
  );
};

export default RNotification;
