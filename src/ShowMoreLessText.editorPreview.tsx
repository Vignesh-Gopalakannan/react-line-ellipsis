import { Component, ReactNode, createElement } from "react";
import { ShowMoreLessTextPreviewProps } from "../typings/ShowMoreLessTextProps";

declare function require(name: string): string;

export class preview extends Component<ShowMoreLessTextPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/ShowMoreLessText.css");
}
