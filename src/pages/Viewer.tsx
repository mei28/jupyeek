import { useEffect, useState } from "react";
import { VStack, Button } from "@yamada-ui/react";
import { useNavigate } from "react-router-dom";
import { NotebookViewer } from "../components/NotebookViewer";

export const Viewer = () => {
  const [notebookData, setNotebookData] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("notebookData");
    if (storedData) {
      setNotebookData(JSON.parse(storedData));
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <VStack w="full" p={4}>
      <Button onClick={() => navigate("/")}>⬅ Back to Home</Button>
      {notebookData && <NotebookViewer notebookData={notebookData} />}
    </VStack>
  );
};
