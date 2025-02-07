import React from "react";
import { VStack, Text } from "@yamada-ui/react";
import { Dropzone, DropzoneProps } from "@yamada-ui/dropzone";
import { useState } from "react";

type FileUploaderProps = {
  onFileLoaded: (data: any) => void;
};

export const FileUploader = ({ onFileLoaded }: FileUploaderProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrop: DropzoneProps["onDrop"] = async (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const jsonData = JSON.parse(text);
        onFileLoaded(jsonData);
      } catch (error) {
        console.error("Invalid .ipynb file:", error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <VStack>
      <Dropzone
        onDrop={handleDrop}
        p="4"
        border="2px dashed"
        borderRadius="md"
        cursor="pointer"
      >
        <Text>{fileName ? `Loaded: ${fileName}` : "Drag & drop a .ipynb file or click to select"}</Text>
      </Dropzone>
    </VStack>
  );
};
