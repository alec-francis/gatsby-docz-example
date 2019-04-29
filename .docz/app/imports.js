export const imports = {
  'src/docs/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-index" */ 'src/docs/index.mdx'
    ),
}
