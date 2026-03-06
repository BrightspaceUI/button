import { addExtensions, litConfig, setDirectoryConfigs } from 'eslint-config-brightspace';

export default [
	...setDirectoryConfigs(
		addExtensions(litConfig, ['.js', '.html'])
	)
];
