"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useFieldExtension } from "microcms-field-extension-react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// dynamic importを使用してMarkdown Editor for Reactを読み込む
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => <div>initializing...</div>,
});

// 自身が利用しているmicroCMSのURLを設定
const origin = "https://ym5754n.microcms.io";

const IndexPage = () => {
  const [markdown, setMarkdown] = useState<string | undefined>();
  // microCMSのフィールド拡張を利用するためのhook
  const { data, sendMessage } = useFieldExtension("", {
    origin,
    height: 540,
  });

  useEffect(() => {
    if (!markdown) {
      setMarkdown(data);
    }
  }, [data, markdown]);

  return (
    <div data-color-mode="light">
      <MDEditor
        value={markdown}
        onChange={(value) => {
          setMarkdown(value);
          sendMessage({
            data: value,
          });
        }}
        height={540}
        textareaProps={{
          placeholder: "Please enter Markdown text",
        }}
      />
    </div>
  );
};

export default IndexPage;