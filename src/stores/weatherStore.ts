import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import ICity from "@/types/city";
import { IWeatherApi } from "@/types/weatherApi";
import { watch } from "vue";

export const useWeatherStore = defineStore('weatherStore', () => {

	const query = ref<string>('')
	const timeOut = ref(null)
	const results = ref<ICity[]>([])
	const places = ref<IWeatherApi[]>([])


	const CITY_URL = 'http://api.weatherapi.com/v1/search.json?key=e06a680c7a934767860155344252402'
	const WEATHER_URL = 'http://api.weatherapi.com/v1/forecast.json?key=e06a680c7a934767860155344252402'


	const handleSearch = () => {
		timeOut.value = setTimeout(async () => {
			if (query.value !== '') {
				const response = await axios(`
				${CITY_URL}&q=${query.value}
				`)
				results.value = response.data
			} else {
				results.value = []
			}
		}, 500);
	}

	const getWeather = async (id: number) => {
		const response = await axios(`
			${WEATHER_URL}&q=id:${id}&days=3&aqi=no&alerts=no
		`)
		places.value.push(response.data)

		query.value = ''
		results.value = []
		console.log(places.value)
	}

	const deleteWeatherCard = (name: string) => {
		places.value = places.value.filter(place => place.location.name !== name)
	}

	let weatherInLocalStorage = JSON.parse(localStorage.getItem('places')) || ''

	if (weatherInLocalStorage) {
		places.value = weatherInLocalStorage
	}

	watch(() => places, (state) => {
		localStorage.setItem('places', JSON.stringify(places.value))
	}, { deep: true })


	return {
		query,
		results,
		places,

		handleSearch,
		getWeather,
		deleteWeatherCard,
	}
})