import {ITslintPreprocessorConfig} from "karma-tslint/lib";

export = (config: any) => {
    config.set({
        basePath: '',

        frameworks: ['jasmine', 'karma-typescript'],

        files: [
            "src/**/*.ts",
            "spec/**/*.ts"
        ],

        exclude: [],


        preprocessors: {
            '**/*.ts': ['typescript']
        },

        typescriptPreprocessor: {
            options: {
                sourceMap: true, // generate source maps
                noResolve: false // enforce type resolution
            },
            transformPath: function (path) {
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

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false,

        concurrency: Infinity
    })
}
