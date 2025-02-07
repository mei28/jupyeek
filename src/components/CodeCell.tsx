import React from "react";
import { Box } from "@yamada-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeCellProps = {
  source: string[];
  outputs: any[];
};

export const CodeCell = ({ source, outputs }: CodeCellProps) => {
  return (
    <Box w="full" p={4} bg="var(--code-bg)" color="var(--code-text)" borderRadius="md">
      <SyntaxHighlighter language="python" style={vs}>
        {source.join("")}
      </SyntaxHighlighter>
      {outputs.length > 0 && (
        <Box mt={2} p={2} bg="gray.100" borderRadius="md">
          {outputs.map((output, index) => (
            <pre key={index}>{JSON.stringify(output, null, 2)}</pre>
          ))}
        </Box>
      )}
    </Box>
  );
};

