const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // module: {
    //     rules: [
    //         // Add your loaders here
    //     ],
    // },
    // Add your plugins and other configuration options here
};
