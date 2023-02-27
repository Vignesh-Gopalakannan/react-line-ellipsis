import { Component, ReactNode, createElement } from "react";
import { ShowMoreLessTextContainerProps } from "../typings/ShowMoreLessTextProps";
import ShowMoreText from "react-show-more-text";
import "./ui/ShowMoreLessText.css";
import React from "react";
import classNames from "classnames";

export default class ShowMoreLessText extends Component<ShowMoreLessTextContainerProps> {
    private myRef: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
    }
    render(): ReactNode {
        let { lines, showMoreCaption, showLessCaption, anchorClass, isDynamicWidth, width } = this.props;
        let text = this.props.text.displayValue;
        const className = classNames(this.props.class);

        let elememtWidth;
        if (isDynamicWidth) {
            elememtWidth =
                this.myRef.current?.parentElement?.clientWidth != undefined
                    ? this.myRef.current?.parentElement?.clientWidth - 100
                    : 200;
        } else {
            elememtWidth = width;
        }
        return (
            <div ref={this.myRef} className={className}>
                <ShowMoreText
                    lines={lines}
                    more={showMoreCaption}
                    less={showLessCaption}
                    className="content-css"
                    width={elememtWidth}
                    anchorClass={anchorClass}
                    expanded={false}
                    truncatedEndingComponent={"... "}
                >
                    {text}
                </ShowMoreText>
            </div>
        );
    }
}
