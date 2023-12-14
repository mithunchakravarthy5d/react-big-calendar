import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./src/common/swagger-output.json",
  apiFile: "./src/common/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "./src/common/petApi.ts",
  exportName: "petApi",
  hooks: true,
};

export default config;
