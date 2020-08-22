const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');

const url = 'https://horoscopes.astro-seek.com/retrograde-planets-astrology-calendar-2020';
const planetSelector = '#vypocty_id_rocni .right-sedy-odsazeni a.tenky-modry';

rp(url)
	.then((html) => {
		const retrogrades = $(planetSelector, html)
			.map(function (i, el) {
				const name = $(this).text();
				const dateFields = $(this).parent().next().next().text();
				// Formate date to match Mmm dd, yyyy
				const regex = /[A-Za-z]{3} [0-9]{1,2}, [0-9]{4}/g;
				const dates = [...dateFields.matchAll(regex)].map((match) => {
					return match[0];
				});

				return {
					name,
					dates
				};
			})
			.get();

		// convert JSON object to string
		const data = JSON.stringify(retrogrades, null, 4);

		// write JSON string to a file
		try {
			fs.writeFileSync('retrograde-planets.json', data);
			console.log('JSON data is saved.');
		} catch (error) {
			console.error(err);
		}
	})
	.catch((err) => console.error(err));
