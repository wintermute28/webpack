import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

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

  // const tsLoader = {
  //   // ts-loader умеет работать с jsx(tsx)
  //   // без TS пришлось бы подключать babel-loader
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  // };

  const tsLoader = {
    // ts-loader умеет работать с jsx(tsx)
    // без TS пришлось бы подключать babel-loader
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: isDev ? [require("react-refresh-typescript")()] : [],
        }),
      },
    },
  };
  //Babel можно конфигурировать или из лоадеров, или из  файла babel.config.json, просто передаем туда объект options, в котором включаем нужные пресеты
  const babelLoader = buildBabelLoader(options);

  return [
    assetLoader,
    scssLoader,
    //  tsLoader,
    babelLoader,
    svgrLoader,
  ];
}
function ReactRefreshTypeScript() {
  throw new Error("Function not implemented.");
}
