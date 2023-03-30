import React, { useState } from "react";
import { AutoComplete, Divider, InputGroup } from "rsuite";
import MemberIcon from "@rsuite/icons/Member";
import SearchIcon from "@rsuite/icons/Search";

const RAutoComplete = () => {
  const [valueInput, setValueInput] = useState("");

  console.log(valueInput);
  //   không cần hàm này
  //   const handleInput = (e: any) => {
  //     setValueInput(e.target.value);
  //     console.log(e.target.value);
  //   };
  return (
    <div>
      <Divider>AUTO COMPLETE </Divider>
      <AutoComplete
        data={["Thang", "Huan", "Back"]}
        value={valueInput}
        onChange={setValueInput}
        placeholder="Lấy giá trị ra khi nhập...."
      />
      <AutoComplete
        style={{ width: "200px" }}
        data={["Thang", "Huan", "Nam"]}
        placeholder="Nhập..."
        size="lg"
        renderMenuItem={(item) => {
          return (
            <div>
              <MemberIcon /> {item}
            </div>
          );
        }}
      />
      <AutoComplete
        style={{ width: "200px" }}
        data={["Thang", "Huan", "Nam"]}
        placeholder="Nhập..."
        size="xs"
      />
      <AutoComplete
        style={{ width: "200px" }}
        data={["Thang", "Huan", "Nam"]}
        placeholder="<disable>Nhập..."
        size="xs"
        disabled
      />
      <AutoComplete
        style={{ width: "200px" }}
        data={[]}
        placeholder="<readOnly>Nhập..."
        size="md"
        readOnly
        defaultValue="Huan"
      />

      <Divider>INPUT GROUP AUTOCOMPLETE</Divider>
      <InputGroup style={{ width: "200px" }}>
        <AutoComplete
          data={["Thang", "Huan", "Back"]}
          placeholder="Nhập thông tin..."
        />
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      <InputGroup inside style={{ width: "200px" }}>
        <AutoComplete
          data={["Thang", "Huan", "Back"]}
          placeholder="Nhập thông tin..."
        />
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      <InputGroup inside style={{ width: "200px" }}>
        <AutoComplete
          data={["Thang", "Huan", "Back"]}
          placeholder="Nhập thông tin..."
        />
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup inside style={{ width: "200px" }}>
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
        <AutoComplete
          data={["Thang", "Huan", "Back"]}
          placeholder="Nhập thông tin..."
        />
      </InputGroup>
    </div>
  );
};

export default RAutoComplete;
