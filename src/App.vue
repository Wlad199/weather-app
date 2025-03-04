<template>
	<CurrentDate />
	<SearchInput />

	<div class="cards">
		<WeatherCard
			v-for="place in weatherStore.places"
			:place="place"
			:key="(place.location.localtime_epoch).toString" />
	</div>
</template>

<script setup lang="ts">
import CurrentDate from "@/components/CurrentDate.vue";
import SearchInput from "@/components/SearchInput.vue";
import WeatherCard from "@/components/WeatherCard.vue";
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore()

</script>

<style scoped>
.cards {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 50px;
	justify-content: center;
}
</style>

