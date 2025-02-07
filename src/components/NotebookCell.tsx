import { Box } from "@yamada-ui/react";
import { MarkdownCell } from "./MarkdownCell";
import { CodeCell } from "./CodeCell";

type NotebookCellProps = {
  cell: any;
};

export const NotebookCell = ({ cell }: NotebookCellProps) => {
  return (
    <Box w="full" p={2} border="1px solid gray" borderRadius="md">
      {cell.cell_type === "markdown" ? (
        <MarkdownCell source={cell.source} />
      ) : cell.cell_type === "code" ? (
        <CodeCell source={cell.source} outputs={cell.outputs} />
      ) : (
        <p>Unknown cell type</p>
      )}
    </Box>
  );
};
