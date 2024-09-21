/// <reference path="../.astro/types.d.ts" />
/// <reference path="../.astro/env.d.ts" />
/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DB_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
