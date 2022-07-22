/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@monorepo-sample/ui", "@monorepo-sample/a"]);

module.exports = withTM({
  reactStrictMode: true,
});
