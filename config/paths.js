var path = require('path')
var fs = require('fs')

const projectDirectory = fs.realpathSync(process.cwd())
const resolve = relativePath => path.resolve(projectDirectory, relativePath)

module.exports = {
    appAssets: resolve('assets'),
    appBuild: resolve('public'),
    appComponents: resolve('src/components'),
    appHtml: resolve('src/index.html'),
    appIndex: resolve('src/index.js'),
    appModules: resolve('node_modules'),
    appRoot: path.resolve(__dirname, '..'),
    appSrc: resolve('src'),
    appStyles: resolve('src/styles'),
    config: resolve('config'),
    nodeModules: resolve('node_modules'),
}