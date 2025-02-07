import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VStack, Heading, Button, Box, Collapse, Text } from "@yamada-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@yamada-ui/lucide";
import { FileUploader } from "../components/FileUploader";

export const Home = () => {
  const [_, setNotebookData] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleFileLoaded = (data: any) => {
    setNotebookData(data);
    localStorage.setItem("notebookData", JSON.stringify(data));
    navigate("/viewer");
  };

  return (
    <VStack w="full" h="100vh" justify="center" align="center" gap={6} px={4}>
      <Heading size="xl" fontWeight="bold">
        Jupyeek - ipynb Viewer
      </Heading>
      <Box w="400px">
        <FileUploader onFileLoaded={handleFileLoaded} />
      </Box>
      <Button variant="outline" onClick={() => navigate("/viewer")}>
        View Last Uploaded Notebook
      </Button>

      {/* Toggleable usage instructions */}
      <Box w="400px" textAlign="center">
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}>
          How to Use
        </Button>
        <Collapse isOpen={isOpen} mt={2} >
          <Box p={4} borderWidth="1px" borderRadius="lg" bg="gray.50" _dark={{ bg: "gray.800" }}>
            <Text fontSize="sm" textAlign="left">
              ① Upload a Jupyter Notebook file (`.ipynb`).<br />
              ② Click "View Last Uploaded Notebook".<br />
              ③ View the notebook content in Jupyeek.
            </Text>
          </Box>
        </Collapse>
      </Box>
    </VStack>
  );
};

