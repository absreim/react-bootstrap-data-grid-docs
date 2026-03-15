"use client";

import Grid, {
  ColDef,
  FilterModel,
  GridPaginationState,
  RowDef,
  UncontrolledFilterModel,
} from "@absreim/react-bootstrap-data-grid";
import { FC, useMemo, useState } from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

interface VersionInfo {
  version: number;
  releaseDate: Date;
}

const versionFormatter: (version: number) => string = (version: number) => {
  const hundredth = Math.floor(version / 100);
  const tens = Math.floor((version - hundredth * 100) / 10);
  const ones = version - hundredth * 100 - tens * 10;
  return `${hundredth}.${tens}.${ones}`;
};

const cols: ColDef[] = [
  {
    type: "number",
    name: "version",
    label: "Version Number",
    formatter: versionFormatter,
  },
  {
    type: "date",
    name: "releaseDate",
    label: "Release Date",
    formatter: (d: Date) => d.toDateString(),
  },
];

const rows: RowDef<VersionInfo>[] = [
  {
    id: 220,
    data: {
      version: 220,
      releaseDate: new Date("2026-03-16"),
    },
  },
  {
    id: 210,
    data: {
      version: 210,
      releaseDate: new Date("2026-03-10"),
    },
  },
  {
    id: 200,
    data: {
      version: 200,
      releaseDate: new Date("2026-03-06"),
    },
  },
  {
    id: 142,
    data: {
      version: 142,
      releaseDate: new Date("2026-03-01"),
    },
  },
  {
    id: 141,
    data: {
      version: 141,
      releaseDate: new Date("2026-02-13"),
    },
  },
  {
    id: 140,
    data: {
      version: 140,
      releaseDate: new Date("2026-02-09"),
    },
  },
  {
    id: 130,
    data: {
      version: 130,
      releaseDate: new Date("2026-01-28"),
    },
  },
  {
    id: 122,
    data: {
      version: 122,
      releaseDate: new Date("2026-01-19"),
    },
  },
  {
    id: 121,
    data: {
      version: 121,
      releaseDate: new Date("2026-01-16"),
    },
  },
  {
    id: 120,
    data: {
      version: 120,
      releaseDate: new Date("2026-01-14"),
    },
  },
  {
    id: 114,
    data: {
      version: 114,
      releaseDate: new Date("2025-12-29"),
    },
  },
  {
    id: 113,
    data: {
      version: 113,
      releaseDate: new Date("2025-12-23"),
    },
  },
  {
    id: 112,
    data: {
      version: 112,
      releaseDate: new Date("2025-12-20"),
    },
  },
];

const SampleExportGrid: FC = () => {
  const [enableFilter, setEnableFilter] = useState(true);
  const [enablePagination, setEnablePagination] = useState(true);
  const [enableFormatters, setEnableFormatters] = useState(true);

  const modifiedCols: ColDef[] = useMemo(() => {
    if (enableFormatters) {
      return cols;
    }

    return cols.map((col) => ({
      ...col,
      formatter: undefined,
    }));
  }, [enableFormatters]);

  const paginationModel: GridPaginationState | undefined = useMemo(() => {
    if (!enablePagination) {
      return undefined;
    }

    return {
      type: "uncontrolled",
      pageSizeOptions: [5, 10],
    };
  }, [enablePagination]);

  const filterModel: FilterModel | undefined = useMemo(() => {
    if (!enableFilter) {
      return undefined;
    }

    return {
      type: "uncontrolled",
      tableFilterState: {
        version: {
          type: "number",
          scheme: "lessThan",
          numValue: 200,
          enabled: true,
        },
        releaseDate: {
          type:"date",
          scheme: "startFrom",
          startDate: null,
          enabled: false
        }
      },
    } as UncontrolledFilterModel;
  }, [enableFilter]);

  return (
    <Stack className="gap-2">
      <Form>
        <Form.Check
          onChange={({ target }) => {
            setEnableFilter(target.checked);
          }}
          checked={enableFilter}
          type="switch"
          id="toggle-filter"
          label="Enable Filtering"
        />
        <Form.Check
          onChange={({ target }) => {
            setEnablePagination(target.checked);
          }}
          checked={enablePagination}
          type="switch"
          id="toggle-pagination"
          label="Enable Pagination"
        />
        <Form.Check
          onChange={({ target }) => {
            setEnableFormatters(target.checked);
          }}
          checked={enableFormatters}
          type="switch"
          id="toggle-formatters"
          label="Enable Formatters"
        />
      </Form>
      <Grid
        rows={rows}
        cols={modifiedCols}
        pagination={paginationModel}
        filterModel={filterModel}
        useToolbar={true}
      />
    </Stack>
  );
};

export default SampleExportGrid;
