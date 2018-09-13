const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const prod = require('./webpack.config.prod')
const paths = require('./paths')

module.exports = merge(prod, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})