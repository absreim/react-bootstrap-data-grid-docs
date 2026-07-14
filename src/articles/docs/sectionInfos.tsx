import { SectionInfo } from "@/shared/types";
import Table from "@/assets/icons/Table";
import Git from "@/assets/icons/Git";

// TODO: consider dynamically importing a named TSX file containing the icon
// rather than using a file like this

const sectionInfos: Record<string, SectionInfo> = {
  table: {
    title: "Table",
    icon: <Table />
  },
  versions: {
    title: "Versions",
    icon: <Git />
  }
}

export default sectionInfos;
