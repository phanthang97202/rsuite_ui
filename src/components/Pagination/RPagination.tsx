import React, { useState } from "react";
import { Pagination } from "rsuite";

const RPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  return (
    <>
      <Pagination
        prev
        next
        first
        last
        total={100}
        activePage={currentPage}
        onChangePage={setCurrentPage}
        limit={10}
      />
    </>
  );
};

export default RPagination;
