import { Icon } from "@rsuite/icons";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Divider,
  Grid,
  Input,
  InputGroup,
  Pagination,
  Row,
  Stack,
  Table,
  TagPicker,
} from "rsuite";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { ValueType } from "rsuite/esm/Checkbox";
import SearchIcon from "@rsuite/icons/Search";
import PlusIcon from "@rsuite/icons/Plus";
import FormEdit from "./FormEdit";

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
const RTable = () => {
  const [windowSize, setWindowSize] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(defaultData);
  const [loadingTable, setLoadingTable] = useState(false);
  useEffect(() => {
    setWindowSize(window.innerHeight);
    // console.log("===windowSize", windowSize);
  }, [windowSize]);

  // change limit
  const handleChangeLimit = (valueLimit: number) => {
    setLimit(valueLimit);
  };
  // console.log("===limit", limit);
  // change page
  const handleChangePage = (valuePage: number) => {
    setPage(valuePage);
  };
  // console.log("===page", page);

  //  hiển thị data trong table theo pagination
  useEffect(() => {
    setLoadingTable(true);
    const data = defaultData.filter((v: any, i: number) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    });
    let idx = limit * (page - 1);
    // console.log("====idx===", idx);
    for (let item of data) {
      item.__idx = ++idx;
    }
    setData(data);

    const getData = setTimeout(() => {
      setLoadingTable(false);
    }, 500);
    return () => clearTimeout(getData);
  }, [limit, page]);

  // check row data table
  const [checkedKeys, setCheckedKeys] = useState([]);

  const CheckCell = ({
    checkedKeys,
    onChange,
    rowData,
    dataKey,
  }: {
    checkedKeys: any;
    onChange: any;
    rowData: any;
    rowHeight?: any;
    dataKey: any;
  }) => {
    return (
      <Checkbox
        value={rowData[dataKey]}
        inline
        onChange={onChange}
        checked={checkedKeys.some((item: any) => item === rowData[dataKey])}
      />
    );
  };
  const handleCheck = (value: any, checked: boolean) => {
    const keys: any = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value);
    console.log("====keys", keys);
    setCheckedKeys(keys);
  };

  // check all row
  let indeterminate = false;
  let checked: boolean = false;
  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }
  const handleCheckAll: any = (value: any, checked: any) => {
    const keys: any = checked ? data.map((item) => item.id) : [];
    setCheckedKeys(keys);
  };

  // ẩn hiển tag picker
  const defaultColumn = [
    {
      key: "id",
      label: "Id",
      fixed: true,
      width: 70,
    },
    {
      key: "name",
      label: "Name",
      fixed: true,
      width: 70,
    },
    {
      key: "age",
      label: "Age",
      fixed: true,
      width: 70,
    },
    {
      key: "address",
      label: "Address",
      fixed: true,
      width: 70,
    },
  ].map((item) => ({ label: item.label, value: item.key }));

  const [columnHide, setColumnHide] = useState(["name", "address", "age"]);
  const handleColumnHide = (value: any) => {
    setColumnHide(value);
  };

  console.log("===columnHide", columnHide);

  // định nghĩa các column
  // định nghĩa 1 defaultColumns tổng
  const columns = [
    {
      label: "ID",
      width: 50,
      dataKey: "id",
      sortable: true,
      resizable: true,
    },
    {
      label: "Name",
      width: 200,
      dataKey: "name",
      sortable: true,
      resizable: true,
    },
    {
      label: "Age",
      width: 200,
      dataKey: "age",
      sortable: true,
      resizable: false,
    },
    {
      label: "Address",
      width: 200,
      dataKey: "address",
      sortable: false,
      resizable: true,
    },
  ];

  // set 1 state columnsKeys để cập nhật trạng thái của defaultColumns
  const columnViews = columns.filter((ch) =>
    columnHide.some((v) => v === ch.dataKey)
  );
  console.log("===columnViews", columnViews);
  //  tạo 1 columns có tác dụng render columns khi thay đổi trạng thái trong TagPicker
  // =>> filter defaultColumns => nếu columnsKeys có chứa key của column defaultColumn thì cập nhật lại columns
  //

  // check update hay delete and update
  const genButtonsWhenChecked = () => {
    if (checkedKeys.length === 1) {
      return (
        <div>
          <Stack spacing={2} divider={<Divider vertical />}>
            <Button
              onClick={() => {
                console.log("===checkedKeys[0]", checkedKeys[0]);
                handlUpdateData();
              }}
            >
              Update
            </Button>
            <Button
              onClick={() => {
                console.log("===DELETE: checkedKeys", checkedKeys);
              }}
            >
              Delete
            </Button>
          </Stack>
        </div>
      );
    }
    if (checkedKeys.length > 1) {
      return (
        <div>
          <Stack spacing={2} divider={<Divider vertical />}>
            <Button
              onClick={() => {
                console.log("===DELETE: checkedKeys", checkedKeys);
              }}
            >
              Delete
            </Button>
          </Stack>
        </div>
      );
    } else {
      return <></>;
    }
  };

  // check mở Modal
  // const [code, setCode] = useState("0");
  const [genModalFormHandle, setGenModalFormHandle] = useState(<></>);

  const handlAddNewData = () => {
    setGenModalFormHandle(<FormEdit uuid={uuidv4()} code={""}></FormEdit>);
  };
  const handlUpdateData = () => {
    let code = checkedKeys[0];
    setGenModalFormHandle(<FormEdit uuid={uuidv4()} code={code}></FormEdit>);
  };
  return (
    <>
      <Grid fluid style={{ margin: 20 }}>
        <Divider></Divider>
        <Row>
          <Col md={8}>
            <Stack divider={<Divider vertical />}>
              <span>Hanlde</span>
              {genButtonsWhenChecked()}
            </Stack>
          </Col>
          <Col md={8}>
            <Stack spacing={5}>
              <InputGroup>
                <Input placeholder="Enter keyword..." />
                <InputGroup.Button>
                  <SearchIcon />
                </InputGroup.Button>
              </InputGroup>
              <Button
                onClick={() => {
                  handlAddNewData();
                }}
              >
                <Icon as={BsPlusCircle} />
                Add new
              </Button>
            </Stack>
          </Col>
          <Col md={8}>
            <Stack
              spacing={4}
              divider={<Divider vertical />}
              style={{ float: "right" }}
            >
              <label>Show Columns</label>
              <TagPicker
                data={defaultColumn}
                labelKey={"label"}
                valueKey={"value"}
                value={columnHide}
                onChange={handleColumnHide}
                cleanable={false}
              />
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <Divider>TABLE DATA</Divider>
            <Table data={data} height={windowSize - 300} loading={loadingTable}>
              <Table.Column width={100} fixed align="center">
                <Table.HeaderCell>
                  <div>
                    All
                    <Checkbox
                      indeterminate={indeterminate}
                      checked={checked}
                      onChange={handleCheckAll}
                    />
                  </div>
                </Table.HeaderCell>
                <Table.Cell>
                  {(rowData) => (
                    <CheckCell
                      rowData={rowData}
                      onChange={handleCheck}
                      checkedKeys={checkedKeys}
                      dataKey="id"
                    />
                  )}
                </Table.Cell>
              </Table.Column>

              <Table.Column width={100}>
                <Table.HeaderCell>Số thứ tự</Table.HeaderCell>
                <Table.Cell dataKey="__idx" />
              </Table.Column>

              {columnViews.map((col) => {
                return (
                  <Table.Column
                    width={col.width}
                    sortable={col.sortable}
                    resizable={col.resizable}
                  >
                    <Table.HeaderCell>{col.label}</Table.HeaderCell>
                    <Table.Cell dataKey={col.dataKey} />
                  </Table.Column>
                );
              })}
            </Table>
            <Pagination
              size="md"
              prev
              next
              total={defaultData.length}
              activePage={page}
              layout={["total", "-", "limit", "|", "pager", "skip"]}
              limit={limit}
              onChangePage={handleChangePage}
              limitOptions={[10, 20, 30]}
              onChangeLimit={handleChangeLimit}
            />
          </Col>
        </Row>
        <Divider></Divider>
      </Grid>

      {/* open form handle  */}
      {genModalFormHandle}
    </>
  );
};

export default RTable;
