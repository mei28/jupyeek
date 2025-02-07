import React from "react";
import { Box, Image } from "@yamada-ui/react";

type OutputCellProps = {
  output: any;
};

export const OutputCell = ({ output }: OutputCellProps) => {
  // 1. `text/plain` → テキストとして表示
  if (output.data?.["text/plain"]) {
    return (
      <Box p={2} bg="gray.200" borderRadius="md">
        <pre>{output.data["text/plain"].join("\n")}</pre>
      </Box>
    );
  }

  // 2. `image/png` → 画像を表示
  if (output.data?.["image/png"]) {
    return (
      <Box p={2} bg="gray.200" borderRadius="md">
        <Image
          src={`data:image/png;base64,${output.data["image/png"]}`}
          alt="Output Image"
          maxW="100%"
        />
      </Box>
    );
  }

  // 3. `text/html` → HTML を埋め込む
  if (output.data?.["text/html"]) {
    return (
      <Box p={2} bg="gray.200" borderRadius="md">
        <div dangerouslySetInnerHTML={{ __html: output.data["text/html"].join("\n") }} />
      </Box>
    );
  }

  // 4. `application/vnd.plotly.v1+json` → まだ未実装
  if (output.data?.["application/vnd.plotly.v1+json"]) {
    return (
      <Box p={2} bg="gray.200" borderRadius="md">
        <pre>📊 Plotly chart rendering is not implemented yet.</pre>
      </Box>
    );
  }

  // その他の未対応の出力
  return (
    <Box p={2} bg="gray.200" borderRadius="md">
      <pre>⚠ Unknown output type</pre>
    </Box>
  );
};
