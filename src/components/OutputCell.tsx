import React, { useState } from "react";
import { Box, Image, Button } from "@yamada-ui/react";

type OutputCellProps = {
  output: any;
};

export const OutputCell = ({ output }: OutputCellProps) => {
  const [expanded, setExpanded] = useState(false);
  const maxHeight = "200px"; // 折りたたみ時の最大高さ

  console.log("Output Data:", output); // デバッグ用

  // `execute_result` または `display_data` の場合
  if (output.output_type === "execute_result" || output.output_type === "display_data") {
    const data = output.data || {};

    // ✅ `image/png` があるなら、それを最優先で表示
    if (data["image/png"]) {
      const base64Image = `data:image/png;base64,${data["image/png"]}`;
      return (
        <Box p={2} bg="gray.200" borderRadius="md" textAlign="center">
          <Image
            src={base64Image}
            alt="Output Image"
            maxW="100%"
            borderRadius="md"
            onError={(e) => console.error("Image failed to load", e)}
          />
        </Box>
      );
    }

    // ✅ `text/html` (Pandas DataFrame の場合)
    if (data["text/html"]) {
      return (
        <Box
          p={2}
          bg="white"
          borderRadius="md"
          overflowX="auto"
          border="1px solid var(--border-color)"
          sx={{
            maxWidth: "100%",
            padding: "10px",
            overflowX: "auto",
          }}
        >
          <style>
            {`
              table {
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
              }
              th, td {
                padding: 8px;
                border: 1px solid #ddd;
                text-align: left;
              }
              th {
                background-color: #f4f4f4;
              }
              tbody tr:nth-child(odd) {
                background-color: #f9f9f9;
              }
              tbody tr:hover {
                background-color: #f1f1f1;
              }
            `}
          </style>
          <div dangerouslySetInnerHTML={{ __html: data["text/html"].join("\n") }} />
        </Box>
      );
    }

    // ✅ Pandas DataFrame の `text/plain` (ASCIIテーブル)
    if (data["text/plain"]) {
      // ❌ Matplotlib の `<Figure size ...>` は無視する
      if (data["text/plain"][0].includes("<Figure size")) {
        return null;
      }

      return (
        <Box
          p={3}
          bg="gray.100"
          borderRadius="md"
          border="1px solid var(--border-color)"
          maxW="100%"
          overflow="hidden"
          sx={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            maxHeight: expanded ? "none" : maxHeight,
            overflowY: expanded ? "visible" : "hidden",
            fontFamily: "monospace",
          }}
        >
          <pre>{data["text/plain"].join("\n")}</pre>
          {!expanded && data["text/plain"].join("").length > 500 && (
            <Button size="xs" variant="ghost" mt={2} onClick={() => setExpanded(true)}>
              Show More
            </Button>
          )}
        </Box>
      );
    }
  }

  // 未対応の出力タイプ
  return (
    <Box p={2} bg="gray.200" borderRadius="md">
      <pre>⚠ Unknown output type</pre>
    </Box>
  );
};

