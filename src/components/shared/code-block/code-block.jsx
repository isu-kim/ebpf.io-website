import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import useCopyToClipboard from 'hooks/use-copy-to-clipboard';

import CheckIcon from './images/check.inline.svg';
import CopyIcon from './images/copy.inline.svg';

const DEFAULT_LANGUAGE = 'bash';

const CodeBlock = ({ className, children, showLineNumbers, ...otherProps }) => {
  const { isCopied, handleCopy } = useCopyToClipboard(3000);

  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : DEFAULT_LANGUAGE;
  const code = children?.trim();

  return (
    <div className={clsx('group relative', className)} {...otherProps}>
      <SyntaxHighlighter
        language={language}
        useInlineStyles={false}
        showLineNumbers={showLineNumbers}
        className="no-scrollbars"
      >
        {code}
      </SyntaxHighlighter>
      <button
        className="invisible absolute top-2 right-2 rounded border border-gray-70 bg-[#353535] p-1.5 text-gray-90 opacity-0 transition-[background-color,opacity,visibility] duration-200 hover:bg-gray-30 group-hover:visible group-hover:opacity-100 lg:visible lg:opacity-100"
        type="button"
        disabled={isCopied}
        onClick={() => handleCopy(code)}
      >
        {isCopied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
      </button>
    </div>
  );
};

CodeBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  showLineNumbers: PropTypes.bool,
};

CodeBlock.defaultProps = {
  className: null,
  showLineNumbers: false,
};

export default CodeBlock;
