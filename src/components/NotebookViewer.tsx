import { VStack, Box } from "@yamada-ui/react";
import { NotebookCell } from "./NotebookCell";

type NotebookViewerProps = {
  notebookData: any;
};

export const NotebookViewer = ({ notebookData }: NotebookViewerProps) => {
  return (
    <VStack w="full" p={6} gap={4} align="center">
      <Box w="100%" maxW="800px" p={4} borderRadius="md" bg="white" boxShadow="md">
        {notebookData.cells?.map((cell: any, index: number) => (
          <NotebookCell key={index} cell={cell} />
        ))}
      </Box>
    </VStack>
  );
};

