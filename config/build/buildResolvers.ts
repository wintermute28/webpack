import { Configuration } from "webpack";
import { BiuldOptions } from "./types/types";

export function buildResolvers(
  options: BiuldOptions
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@': options.paths.src,
    },
  };
}
