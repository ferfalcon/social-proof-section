import loadData from './async-fetch-json-data';
import printJsonObject from './print-json-object';

const dataUrl = './data.json';

loadData(dataUrl)
	.then ( data => {
		printJsonObject(data);
	})