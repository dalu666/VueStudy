module.exports = {
    // 修改的配置
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.105.45.48:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
