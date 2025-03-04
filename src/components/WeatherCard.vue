<template>
	<div class="card" :class="place.current.is_day === 1 ? 'card-day' : 'card-night'">

		<div class="card__top card-top">
			<div class="card-top__location">
				<Icon icon="mdi:place-outline" />
				<p>{{ place.location.name }}</p>
			</div>
			<div class="card-top__time">
				<Icon icon="wi:time-4" />
				<span>
					{{ new Date(place.location.localtime).getHours() }} :
					{{ new Date(place.location.localtime).getMinutes() }}
				</span>
			</div>
		</div>

		<div class="card__current card-current">
			<div class="card-current__image">
				<img :src="place.current.condition.icon" alt="icon">
			</div>
			<div class="card-current__temper">
				<h3>{{ Math.round(place.current.temp_c) }}&deg</h3>
			</div>
			<div class="card-current__text">
				{{ place.current.condition.text }}
			</div>
		</div>

		<div class="card__forecast">
			<WeatherForecastDay
				v-for="day in place.forecast.forecastday"
				:key="day.date_epoch"
				:day="day" />
		</div>

		<div class="card__info" :class="{ active: showInfo }">
			<WeatherInfo
				:place="place"
				:setShowInfo="setShowInfo" />
		</div>

		<div class="card__actions actions-card">
			<button @click="setShowInfo" class="actions-card__more">
				<span>More</span>
				<Icon icon="mingcute:arrow-up-line" />
			</button>
			<button @click="weatherStore.deleteWeatherCard(place.location.name)" class="actions-card__close">
				<span>Close</span>
				<Icon icon="material-symbols:close-rounded" />
			</button>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import { IWeatherApi } from "@/types/weatherApi";
import { Icon } from "@iconify/vue";
import WeatherForecastDay from "@/components/WeatherForecastDay.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";
import { useWeatherStore } from "@/stores/weatherStore";


const weatherStore = useWeatherStore()

defineProps<{
	place: IWeatherApi
}>()

let showInfo = ref<boolean>(false)

const setShowInfo = () => {
	showInfo.value = !showInfo.value
}

</script>

<style scoped  lang='scss'>
.card {
	position: relative;
	overflow: hidden;
	padding: 10px 15px;
	padding-bottom: 0;
	flex: 0 0 293px;
	border-radius: 5px;

	@media (max-width: 650px) {
		flex: 1 0 270px;
	}

	&__top {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 20px;
	}

	&__current {}

	&__forecast {}

	&__info {}

	&__actions {}
}

.card-day {
	background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}

.card-night {
	background-image: linear-gradient(62deg, #0a2a4a 0%, #270845 100%);
	color: #fff;
}

.card-top {

	&__location {
		display: flex;
		align-items: center;
		gap: 3px;
		line-height: 100%;
		font-size: 20px;
	}

	&__time {
		display: flex;
		align-items: center;
		gap: 3px;
		font-size: 18px;
		line-height: 100%;
	}
}

.card-current {
	text-align: center;

	&__image {
		img {
			width: 100px;
		}
	}

	&__temper {
		font-size: 50px;
		margin: 20px 0;
	}

	&__text {
		font-size: 22px;
		margin-bottom: 20px;
		padding-bottom: 20px;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: #fff;
		}
	}
}

.actions-card {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 22px;
	margin-top: 30px;

	&__more {
		display: flex;
		align-items: center;
		gap: 3px;
		padding: 10px;
	}

	&__close {
		display: flex;
		align-items: center;
		gap: 3px;
		padding: 10px;
	}
}
</style>