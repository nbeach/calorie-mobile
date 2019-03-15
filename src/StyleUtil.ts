export type BorderStyle = "solid" | "dotted" | "dashed";

export interface BorderStyling {
    borderWidth?: number,
    borderStyle?: BorderStyle;
    borderColor?: string
}

export const border = (borderWidth: number, borderStyle: BorderStyle, borderColor: string): BorderStyling =>
    ({ borderWidth,  borderStyle, borderColor})
