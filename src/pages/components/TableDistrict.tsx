import { Button, Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;
const data = [
  {
    id: 1,
    firstName: "Phan",
    lastName: "Thang",
    city: "Ha Nam",
    email: "phanthang@gmail.com",
  },
  {
    id: 2,
    firstName: "Phan",
    lastName: "Thang2",
    city: "Ha Nam",
    email: "phanthang@gmail.com",
  },
  {
    id: 3,
    firstName: "Phan",
    lastName: "Thang3",
    city: "Ha Nam",
    email: "phanthang@gmail.com",
  },
  {
    id: 4,
    firstName: "Phan",
    lastName: "Thang4",
    city: "Ha Nam",
    email: "phanthang@gmail.com",
  },
];
const TableData = () => {
  return (
    <div>
      <Table
        height={420}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>
        <Column width={200}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column width={80}>
          <HeaderCell>Option</HeaderCell>
          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <Button
                appearance="link"
                onClick={() => alert(`id:${rowData.id}`)}
              >
                Edit
              </Button>
            )}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};
export default TableData;
