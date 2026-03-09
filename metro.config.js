const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure that asset files like .png are handled correctly
config.resolver.assetExts.push('png');

module.exports = config;
