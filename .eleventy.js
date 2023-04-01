module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("specs.pdf");

    return {
        dir: {
          input: "src/*",
          output: "_site",
          includes: "_includes"
        }
    }
  };