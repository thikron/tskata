module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts",
            "spec/**/*.ts"
        ],
        preprocessors: {
            '**/*.ts': ['typescript']
        },

        typescriptPreprocessor: {
            options: {
                sourceMap: true, // generate source maps
                noResolve: false // enforce type resolution
            },
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js');
            }
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"]
    });
};