import React, { useState } from "react";

const CodeBlock = () => {
  const [isCopied, setIsCopied] = useState(false);

  const data = "navigator.clipboard.writeText(data)";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(data);
    setIsCopied(true);
  };

  return (
    <div className="code-block">
      <code>
        {
          <>
            <p>{data}</p>
          </>
        }
      </code>
      <button onClick={handleCopyClick} disabled={isCopied}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CodeBlock;
