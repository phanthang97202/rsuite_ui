import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Modal, Stack } from "rsuite";
import InputNumber from "rsuite/esm/InputNumber";
import Placeholder from "rsuite/esm/Placeholder";
import SelectPicker from "rsuite/esm/SelectPicker";
import { v4 as uuidv4 } from "uuid";
interface IProps {
  code: string;
  uuid: any;
}
interface IData {
  __idx?: number;
  id: string;
  name: string;
  age: number;
  address: string;
}
const defaultData: IData[] = [
  {
    id: "pt1",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "pt2",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Noi",
  },
  {
    id: "pt3",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Giang",
  },
  {
    id: "pt4",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "pt5",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "pt6",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "pt7",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "pt8",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "pt9",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "pt1fd",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "pt2fdf",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "ptfd3",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "pt1sds",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "pt2sss",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "pt3fsfds",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "pt1sdfsfsd",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "pt2hghg",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "pt3gfgf",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "pgfdgt1",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "pdfgt2",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "pdfggt3",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "psdt1",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "ptsas2",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "ptytr3",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "pkjhkt1",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "yyyy",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "rtretrt",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "mbnm",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "bnmbmnb",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "bnmbmbn",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "bnmbnmbn",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "ptrt2",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "pretrt3",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
  {
    id: "rrr234",
    name: "Phan Thang 1",
    age: 20,
    address: "Ha Nam",
  },
  {
    id: "p423t2",
    name: "Phan Thang 2",
    age: 51,
    address: "Ha Nam",
  },
  {
    id: "pt2343",
    name: "Phan Thang 3",
    age: 11,
    address: "Ha Nam",
  },
];

const FormEdit = ({ code, uuid }: IProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //   default form value
  //   để type any nó mới chạy mới vl chứ , tạo type cụ thể thì k chạy
  const defaultFormValue: any = {
    id: uuidv4(),
    name: "",
    age: 0,
    address: "",
  };

  // state form value modal
  const [formValue, setFormValue] = useState(defaultFormValue);
  const [country, setCountry] = useState([]);
  const formRef: any = React.useRef();
  //   const getData = () => {
  //     const data = defaultData.filter((item) => item.id === code);
  //     console.log("===data detail", data);
  //   };
  //   getData();

  // set data vào form
  const loadPositionDetail = () => {
    if (code !== "") {
      const data = defaultData.filter((item) => item.id === code)[0];
      console.log(
        "🚀 ~ file: FormEdit.tsx:262 ~ loadPositionDetail ~ data:",
        data
      );
      if (data) {
        setFormValue({
          id: data.id,
          name: data.name,
          age: data.age,
          address: data.address,
        });
      }
    } else {
      setFormValue(defaultFormValue);
    }
  };

  const getAllCountry = () => {
    const address: any = Array.from(
      new Set(defaultData.map((item) => item.address))
    );
    setCountry(address.map((value: any) => ({ label: value, value: value })));
    console.log("🚀 ~ file: FormEdit.tsx:253 ~ FormEdit ~ country:", country);
  };
  const loadData = () => {
    setLoading(true);
    loadPositionDetail();
    getAllCountry();

    setLoading(false);
  };
  useEffect(() => {
    setOpen(true);
    loadData();
  }, [code, uuid]);

  const body = () => {
    return (
      <Form fluid formValue={formValue} ref={formRef} onChange={setFormValue}>
        {/* <Form.Group controlId="id-1">
          <Form.ControlLabel>Id</Form.ControlLabel>
          <Form.Control name="id"></Form.Control>
        </Form.Group> */}
        <Form.Group controlId="name-1">
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Form.Control name="name"></Form.Control>
        </Form.Group>
        <Form.Group controlId="age-1">
          <Form.ControlLabel>Age</Form.ControlLabel>
          <Form.Control name="age" accepter={InputNumber}></Form.Control>
        </Form.Group>
        <Form.Group controlId="address-1">
          <Form.ControlLabel>Address</Form.ControlLabel>
          <Form.Control
            name="address"
            data={country}
            accepter={SelectPicker}
            labelKey={"label"}
            valueKey={"value"}
          ></Form.Control>
        </Form.Group>
      </Form>
    );
  };

  return (
    <>
      <Modal open={open}>
        <Modal.Header onClick={() => setOpen(false)}>
          {code === "" ? (
            <Modal.Title>Add new data</Modal.Title>
          ) : (
            <Modal.Title>Update data</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <Placeholder.Paragraph rows={10}></Placeholder.Paragraph>
          ) : (
            body()
          )}
        </Modal.Body>
        <Modal.Footer>
          <Stack spacing={5}>
            <Button>Accept</Button>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Stack>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormEdit;
