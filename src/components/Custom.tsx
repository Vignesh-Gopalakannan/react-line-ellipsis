import { Component, ReactNode, createElement } from "react";

export interface CustomProps {}

export class Custom extends Component<CustomProps> {
    render(): ReactNode {
        return <div>Custom Components</div>;
    }
}
