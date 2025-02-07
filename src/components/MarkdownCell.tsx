import React from "react";
import { Box } from "@yamada-ui/react";
import ReactMarkdown from "react-markdown";

type MarkdownCellProps = {
  source: string[];
};

export const MarkdownCell = ({ source }: MarkdownCellProps) => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md" border="1px solid var(--border-color)">
      <ReactMarkdown className="markdown-content">{source.join("")}</ReactMarkdown>
    </Box>
  );
};

