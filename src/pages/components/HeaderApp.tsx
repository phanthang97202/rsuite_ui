import React from "react";
import { FlexboxGrid, IconButton, Input, InputGroup, Stack } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import PlusIcon from "@rsuite/icons/Plus";
const HeaderApp = () => {
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item style={{ marginRight: "20px" }}>
        <Stack spacing={6}>
          <p>Tìm theo mã huyện: </p>
          <InputGroup
            style={{
              width: 300,
              marginBottom: 10,
            }}
          >
            <Input placeholder="Nhập mã huyện..." />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </Stack>
        <Stack spacing={6}>
          <p>Tìm theo tên huyện:</p>
          <InputGroup
            style={{
              width: 300,
              marginBottom: 10,
            }}
          >
            <Input placeholder="Nhập tên huyện..." />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </Stack>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>
        <Stack spacing={6}>
          <IconButton icon={<SearchIcon />}>Tìm kiếm</IconButton>
          <IconButton icon={<PlusIcon />}>Thêm</IconButton>
        </Stack>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default HeaderApp;
