module.exports = {
  devServer: {
    port: 9090,
  },
  chainWebpack: config => {
    config.module
      .rule('graphql')
      .test(/\.(gql|graphql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
};
