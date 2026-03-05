"use client";

import Grid, {
  ColDef,
  GridPaginationState,
  RowDef,
} from "@absreim/react-bootstrap-data-grid";
import { FC, useState } from "react";

const cols: ColDef[] = [
  {
    type: "string",
    name: "name",
    label: "Name",
  },
  {
    type: "number",
    name: "class",
    label: "Armor Class",
  },
  {
    type: "string",
    name: "weight",
    label: "Weight",
  },
];

interface Data {
  name: string;
  class: number;
  weight: string;
}

const rows: RowDef<Data>[] = [
  {
    id: 0,
    data: {
      name: "Leather Armor",
      class: 11,
      weight: "Light",
    },
  },
  {
    id: 1,
    data: {
      name: "Padded Armor",
      class: 11,
      weight: "Light",
    },
  },
  {
    id: 2,
    data: {
      name: "Studded Leather Armor",
      class: 12,
      weight: "Light",
    },
  },
  {
    id: 3,
    data: {
      name: "Hide Armor",
      class: 12,
      weight: "Medium",
    },
  },
  {
    id: 4,
    data: {
      name: "Chain Shirt",
      class: 13,
      weight: "Medium",
    },
  },
  {
    id: 5,
    data: {
      name: "Scale Mail",
      class: 14,
      weight: "Medium",
    },
  },
  {
    id: 6,
    data: {
      name: "Breastplate",
      class: 14,
      weight: "Medium",
    },
  },
  {
    id: 7,
    data: {
      name: "Half Plate",
      class: 15,
      weight: "Medium",
    },
  },
  {
    id: 8,
    data: {
      name: "Ring Mail",
      class: 14,
      weight: "Heavy",
    },
  },
  {
    id: 9,
    data: {
      name: "Chain Mail",
      class: 16,
      weight: "Heavy",
    },
  },
  {
    id: 10,
    data: {
      name: "Splint Armor",
      class: 17,
      weight: "Heavy",
    },
  },
  {
    id: 11,
    data: {
      name: "Plate Armor",
      class: 18,
      weight: "Heavy",
    },
  },
];

const SamplePaginatedGrid: FC = () => {
  const [pageSizeIndex, setPageSizeIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  const paginationState: GridPaginationState = {
    pageSizeOptions: [5, 10, 15],
    pageSizeIndex: pageSizeIndex,
    setPageSizeIndex: (pageSizeIndex) => setPageSizeIndex(pageSizeIndex),
    currentPage: pageNum,
    setCurrentPage: (pageNum) => setPageNum(pageNum),
    maxPageButtons: 5,
    componentSize: "large",
  };

  return <Grid rows={rows} cols={cols} pagination={paginationState} />;
};

export default SamplePaginatedGrid;
