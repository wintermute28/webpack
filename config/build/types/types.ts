export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
}
export type BuildMode = "development" | "production";

export interface BiuldOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
