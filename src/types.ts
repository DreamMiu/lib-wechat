export type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "mark" | "off"
export type Dict<T=any,K extends string|symbol=string>=Record<K, T>
