module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ["module-resolver", {
                "root": [
                    "./src*"
                ],
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx",
                ],
                "alias": {
                    "@assets": "./src/assets",
                    "@componentes": "./src/componentes",
                    "@config": "./src/config",
                    "@hooks": "./src/hooks",
                    "@route": "./src/route",
                    "@screns": "./src/screns",
                    "@services": "./src/services",
                    "@styles": "./src/styles",
                    "@ultils": "./src/ultils"
                }
            }]
        ],
    };
};
