export type BorderStyle = "solid" | "dotted" | "dashed"

export interface BorderStyling {
    readonly borderWidth?: number,
    readonly borderStyle?: BorderStyle
    readonly borderColor?: string
}

export const border = (borderWidth: number, borderStyle: BorderStyle, borderColor: string): BorderStyling =>
    ({borderWidth, borderStyle, borderColor})
