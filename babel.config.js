const tsconfig = require('./tsconfig.json')
let rawAlias = tsconfig.compilerOptions.paths
let alias = {}

for (let x in rawAlias) {
    alias[x.replace('/*', '')] = rawAlias[x].map((p) => {
        return p.replace('/*', '').replace('[', '').replace(']', '')
    })[0]
}

module.exports = function (api) {
    console.log('alias', alias)
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias,
                },
            ],
        ],
    }
}
