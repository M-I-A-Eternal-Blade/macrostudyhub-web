import React, { useMemo } from 'react';
import katex from 'katex';

interface KatexMathProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const KatexMath: React.FC<KatexMathProps> = ({ math, block = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch (err) {
      console.error('KaTeX rendering error:', err);
      return math;
    }
  }, [math, block]);

  return (
    <span
      className={`inline-block ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
