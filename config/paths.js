var path = require('path')
var fs = require('fs')

const projectDirectory = fs.realpathSync(process.cwd())
const resolve = relativePath => path.resolve(projectDirectory, relativePath)

module.exports = {
    appIndex: resolve('src/index.js'),
    appRoot: path.resolve(__dirname, '..'),
    components: resolve('src/components'),
    config: resolve('config'),
    htmlRoot: resolve('src/index.html'),
    nodeModules: resolve('node_modules'),
    public: resolve('public'),
    source: resolve('src'),
    styles: resolve('src/styles'),
}