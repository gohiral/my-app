import { readFile } from 'fs/promises';

export async function get() {
	const articles = JSON.parse(await readFile(`./src/_data/all-articles.json`));
	return {
		body: { articles }
	};
}
