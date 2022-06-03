import { readFile } from 'fs/promises';

export async function get({ params }) {
	const article = JSON.parse(await readFile(`./src/_data/${params.slug}.json`));
	if (article) {
		return {
			body: { article }
		};
	}

	return {
		status: 404
	};
}
