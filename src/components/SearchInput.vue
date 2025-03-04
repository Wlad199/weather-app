<template>
	<form @submit.prevent>
		<label class="search">
			<Icon class="search-icon" icon="material-symbols-light:search" />
			<input
				type="text"
				placeholder="Search for a place"
				v-model="weatherStore.query"
				@input="weatherStore.handleSearch">
		</label>
		<div class="city-list">
			<div v-for="place in weatherStore.results">
				<button @click="weatherStore.getWeather(place.id)">
					{{ place.name }} ({{ place.region }}, {{ place.country }})
				</button>
			</div>
		</div>
	</form>
</template>

<script setup lang='ts'>
import { Icon } from "@iconify/vue";
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore()

</script>

<style scoped  lang='scss'>
.search {
	display: flex;
	align-items: center;
	height: 40px;
	justify-content: center;
	font-size: 20px;

	input {
		width: 550px;
		height: 100%;
		padding: 3px 15px;

		@media (max-width: 650px) {
			width: 350px;
		}

		@media (max-width: 460px) {
			width: 100%;
		}
	}

	.search-icon {
		background: #fff;
		height: 100%;
		width: 50px;
	}
}

.city-list {
	max-width: 600px;
	margin: 0 auto;
	font-size: 20px;
	padding: 5px 0;

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	button {
		transition: all 0.1s ease 0s;
	}

	button:hover {
		color: #6539bc;
	}
}
</style>