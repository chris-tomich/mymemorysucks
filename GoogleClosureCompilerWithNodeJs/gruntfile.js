module.exports = function(grunt) {
    var closurePath = "C:\\Program Files\\GoogleClosureCompiler";

    grunt.initConfig({
        "closure-compiler": {
            oystr: {
                noreport: true,
                closurePath: closurePath,
                js: [
                    "index.js",
                    "subtract.js"
                ],
                jsOutputFile: "index.min.js",
                options: {
                    compilation_level: "SIMPLE_OPTIMIZATIONS",
                    jscomp_error: [
                        'accessControls',
                        'ambiguousFunctionDecl',
                        'checkEventfulObjectDisposal',
                        'checkRegExp',
                        'checkStructDictInheritance',
                        'checkTypes',
                        'checkVars',
                        'conformanceViolations',
                        'const',
                        'constantProperty',
                        'deprecated',
                        'es3',
                        'es5Strict',
                        'externsValidation',
                        'globalThis',
                        'inferredConstCheck',
                        'internetExplorerChecks',
                        'invalidCasts',
                        'misplacedTypeAnnotation',
                        'missingProperties',
                        'missingProvide',
                        'missingRequire',
                        'missingReturn',
                        'newCheckTypes',
                        'suspiciousCode',
                        'typeInvalidation',
                        'undefinedNames',
                        'undefinedVars',
                        'unknownDefines',
                        'uselessCode',
                        'useOfGoogBase',
                        'visibility'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-closure-compiler");

    grunt.registerTask("default", ["closure-compiler"]);
};