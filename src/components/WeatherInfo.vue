<template>
	<div class="info" :class="{ active: showInfo }">
		<div class="info__wrapper">
			<ul class="info__content">
				<li class="info__wind">
					<Icon class="icon" icon="iconoir:wind" />
					<p>{{ place.current.wind_kph }} km/h</p>
					<p class="text">wind</p>
				</li>
				<li class="info__humidity">
					<Icon class="icon" icon="iwwa:humidity" />
					<p>{{ place.current.humidity }} %</p>
					<p class="text">humidity</p>
				</li>
				<li class="info__pressure">
					<Icon class="icon" icon="healthicons:blood-pressure-monitor-outline" />
					<p>{{ Math.round(place.current.pressure_mb) }} mm</p>
					<p class="text">Pressure</p>
				</li>
				<li class="info__precipitation">
					<Icon class="icon" icon="iconoir:umbrella" />
					<p>{{ place.current.precip_mm }} mm</p>
					<p class="text">precipitation</p>
				</li>
				<li class="info__direction">
					<Icon class="icon" icon="wpf:wind-rose" />
					<p>{{ place.current.wind_dir }}</p>
					<p class="text">direction</p>
				</li>
				<li class="info__feels">
					<Icon class="icon" icon="fluent:temperature-24-regular" />
					<p>{{ Math.round(place.current.feelslike_c) }}&deg</p>
					<p class="text">Feels</p>
				</li>
			</ul>
		</div>
		<div class="info__update">
			<p>last update: {{ place.current.last_updated }}</p>
		</div>
		<button @click="setShowInfo()" class="info__back">
			<span>Back</span>
			<Icon icon="mingcute:arrow-down-line" />
		</button>
	</div>
</template>

<script setup lang='ts'>
import { IWeatherApi } from "@/types/weatherApi";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

let showInfo = ref<boolean>(false)

defineProps<{
	place: IWeatherApi
	setShowInfo
}>()

</script>

<style scoped  lang='scss'>
.info {
	position: absolute;
	top: 110%;
	left: 0;
	width: 100%;
	height: 62%;
	padding: 15px 10px;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	transition: all 0.3s ease 0s;

	&__wrapper {
		flex: 1 1 auto;
	}

	&__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 5px;

		li {
			margin: 0 -5px;
			flex: 0 0 33.333%;
			text-align: center;
			margin-bottom: 15px;

			.icon {
				font-size: 35px;
			}

			.text {
				opacity: .6;
				font-size: 14px;
			}
		}
	}

	&__wind {}

	&__humidity {}

	&__precipitation {}

	&__direction {}

	&__feels {}

	&__update {
		font-size: 14px;
		opacity: .6;
		text-align: center;
		margin-bottom: 15px;
	}

	&__back {
		display: inline-flex;
		align-items: center;
		gap: 3px;
		line-height: 100%;
		font-size: 22px;
		padding: 15px;
		max-width: 100px;
		background: transparent;
	}
}

.card__info.active .info {
	top: 38%;
}

.card-day .info {
	backdrop-filter: blur(15px);
}

.card-night .info {
	backdrop-filter: blur(15px);
}</style>