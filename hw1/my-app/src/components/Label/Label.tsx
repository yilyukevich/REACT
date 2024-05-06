import React from 'react';

type TLableTags = "h1" | "h2" | "h3" | "h4" | "h5";

interface ILabelProps {
    tagName: TLableTags,
    value: string
}

export default function Label(props: ILabelProps) {
    return (
        React.createElement(props.tagName, {}, props.value)
    );
}