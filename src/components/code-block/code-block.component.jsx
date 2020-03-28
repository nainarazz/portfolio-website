import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Pre, LineNumber } from './code-block.style';

export const CodeBlock = ({ children, className }) => {
    const language = className.replace(/language-/, '');
    return (
        <Highlight {...defaultProps} code={children} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={{ ...style }}>
                    {tokens.slice(0, tokens.length - 1).map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            <LineNumber>{i + 1}</LineNumber>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </Pre>
            )}
        </Highlight>
    );
};
