import { SectionMetadata } from "@/components/types";
import Grid from "@/assets/icons/Grid";
import Book from "@/assets/icons/Book";
import Table from "@/assets/icons/Table";
import Git from "@/assets/icons/Git";

const sectionMetadata: Record<string, SectionMetadata> = {
  overview: {
    name: "Overview",
    order: 1,
    icon: <Book />,
  },
  grid: {
    name: "Grid",
    order: 2,
    icon: <Grid />,
  },
  table: {
    name: "Table",
    order: 3,
    icon: <Table />,
  },
  versions: {
    name: "Versions",
    order: 4,
    icon: <Git />,
  },
};

export default sectionMetadata;
