import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VStack, Heading, Button, Box } from "@yamada-ui/react";
import { FileUploader } from "../components/FileUploader";

export const Home = () => {
  const [notebookData, setNotebookData] = useState<any | null>(null);
  const navigate = useNavigate();

  const handleFileLoaded = (data: any) => {
    setNotebookData(data);
    localStorage.setItem("notebookData", JSON.stringify(data));
    navigate("/viewer");
  };

  return (
    <VStack w="full" h="100vh" justify="center" align="center" gap={6}>
      <Heading size="xl" fontWeight="bold">
        Jupyeek - ipynb Viewer
      </Heading>
      <Box w="400px">
        <FileUploader onFileLoaded={handleFileLoaded} />
      </Box>
      <Button variant="outline" onClick={() => navigate("/viewer")}>
        View Last Uploaded Notebook
      </Button>
    </VStack>
  );
};

