/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@monorepo-sample/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
