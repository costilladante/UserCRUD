/* craco.config.js */
const CracoLessPlugin = require("craco-less");
const { getThemeVariables } = require("antd/dist/theme");

const themeVariables = getThemeVariables({
	dark: true,
	compact: false,
});

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { ...themeVariables, "primary-color": "#8860d0" },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
