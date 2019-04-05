// Web jest setup
module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    "testMatch": null,
    "testRegex": "test.(js|ts)x?$",
    "transform": {
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.(js|ts)x?$": "babel-jest"
    },
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/src/",
    ],
    "moduleDirectories": ["node_modules", "src"]
};
