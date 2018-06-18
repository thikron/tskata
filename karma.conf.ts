import { ITslintPreprocessorConfig } from 'karma-tslint';

export = (config: any) => {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts",
            "spec/**/*.ts"
        ],
        preprocessors: {
            '**/*.ts': ['tslint', 'typescript']
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
        tslintPreprocessor: {
            configuration: 'default',
            formatter: 'prose',
            formattersDirectory: 'formatters-dir',
            rulesDirectory: 'rules-dir',
            stopOnFailure: true,
            fix: true
        } as ITslintPreprocessorConfig,
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"]
    });
};