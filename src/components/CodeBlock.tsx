import React from 'react';

interface CodeBlockProps {
  language: string;
  code: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, title }) => {
  return (
    <div className="my-6">
      {title && (
        <div className="bg-muted/20 px-4 py-2 rounded-t-lg border-b border-border/50">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
      )}
      <pre className={`code-block ${title ? 'rounded-t-none' : ''} overflow-x-auto`}>
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
};