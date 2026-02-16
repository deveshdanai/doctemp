export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy("src/assets");

	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
			data: "_data"
		}
	};
}
export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};
