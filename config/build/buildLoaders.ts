import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BiuldOptions } from "./types/types";

export function buildLoaders(options: BiuldOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const cssLoaderWithModule = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModule,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const tsLoader = {
    // ts-loader умеет работать с jsx(tsx)
    // без TS пришлось бы подключать babel-loader
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [scssLoader, tsLoader];
}
