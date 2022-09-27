// https://preset-env.cssdb.org/

const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const fs = require('fs');
const css = fs.readFileSync('styles.css', 'utf-8').toString();

postcss([
	postcssPresetEnv({
		stage: false,
		features: {
			'nesting-rules': true,
			'is-pseudo-class': true,
			'clamp': true,
			'custom-media-queries': true
			
		}
	})
]).process(css, { from: './styles.css' })
	.then(result => {
		fs.writeFile('./styles-min.css', result.css, () => true)
	})