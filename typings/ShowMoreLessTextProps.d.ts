/**
 * This file was generated from ShowMoreLessText.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface ShowMoreLessTextContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    text: EditableValue<string>;
    lines: number;
    showMoreCaption: string;
    showLessCaption: string;
    isDynamicWidth: boolean;
    width: number;
    anchorClass: string;
}

export interface ShowMoreLessTextPreviewProps {
    class: string;
    style: string;
    text: string;
    lines: number | null;
    showMoreCaption: string;
    showLessCaption: string;
    isDynamicWidth: boolean;
    width: number | null;
    anchorClass: string;
}
