const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c2ab1a38dmshc94e7a92bf0b451p14c4a1jsn753158d356e0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

import { FilterProps } from "@/types";
export async function fetchCars( filters : FilterProps ){
  const { manufacturer, year, model, limit, fuel } = filters;
	
	const headers = {
		'X-RapidAPI-Key': '6c2ab1a38dmshc94e7a92bf0b451p14c4a1jsn753158d356e0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

	const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
