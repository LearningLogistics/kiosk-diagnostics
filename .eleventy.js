module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("specs.pdf");
    eleventyConfig.addPassthroughCopy("nativeapi.html");
    eleventyConfig.addPassthroughCopy("unittests.html");
    return {
        dir: {
          input: "src/*",
          output: "_site",
          includes: "_includes"
        }
    }
  };