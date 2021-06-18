const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const today = new Date();
const year = today.getFullYear();

const url = `https://horoscopes.astro-seek.com/retrograde-planets-astrology-calendar-${year}`;
const planetSelector = '#vypocty_id_rocni .right-sedy-odsazeni a.tenky-modry';

const fetchData = async () => {
	try {
		// get html text from reddit
		const response = await fetch(url);
		// using await to ensure that the promise resolves
		const body = await response.text();

		return body;
	} catch (err) {
		console.log('All errors are welcomed here! From promises or not, this catch is your catch.');
	}
};

const scrapeRetrogrades = async (body) => {
	// parse the html text and extract titles
	const $ = cheerio.load(body);
	let retrogrades = [];
	$(planetSelector).each((i, el) => {
		const name = $(el).text();
		const dateFields = $(el).parent().next().next().text();
		// Formate date to match Mmm dd, yyyy
		const regex = /[A-Za-z]{3} [0-9]{1,2}, [0-9]{4}/g;
		const dates = [...dateFields.matchAll(regex)].map((match) => {
			return match[0];
		});

		retrogrades.push({
			name,
			dates
		});
	});

	return retrogrades;
};

const writeToFile = async (retrogrades) => {
	// convert JSON object to string
	const data = JSON.stringify(retrogrades, null, 4);

	// write JSON string to a file
	try {
		fs.writeFileSync('retrograde-planets.json', data);
		console.log('JSON data is saved.');
	} catch (error) {
		console.error(error);
	}
};

const fetchAndCreateRetrogradeData = async () => {
	const astroseekData = await fetchData();
	const htmlScrapedData = await scrapeRetrogrades(astroseekData);
	const createRetrogradeJsonData = await writeToFile(htmlScrapedData);
	return astroseekData, htmlScrapedData, createRetrogradeJsonData;
};

fetchAndCreateRetrogradeData().catch((error) => console.error(`${error}, there was an error creating the data.`));
