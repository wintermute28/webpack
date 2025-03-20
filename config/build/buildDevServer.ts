import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    // npm run start -- --env port=3001
    //вместо 3001 можеи указать любой порт при запуске
    open: true,
    // эта опция работает только для dev-сервера
    historyApiFallback: true,
    hot: true,
  };
}
