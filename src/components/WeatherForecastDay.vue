<template>
	<div class="forecast">
		<div class="forecast__wekday">
			{{ new Date(day.date).toLocaleDateString('en-us', {
				weekday: 'long'
			}) }}
		</div>
		<div class="forecast__image">
			<img :src="day.day.condition.icon" alt="icon">
		</div>
		<div class="forecast__temper">
			{{ Math.round(day.day.maxtemp_c) }} /
			{{ Math.round(day.day.mintemp_c) }}
		</div>
	</div>
</template>

<script setup lang='ts'>
import { IForecastDayItem } from "@/types/weatherApi";

defineProps<{
	day: IForecastDayItem
}>()
</script>

<style scoped  lang='scss'>
.forecast {
	display: flex;
	align-items: center;
	font-size: 20px;

	&__wekday {
		flex: 1 1 auto;
	}

	&__image {}

	&__temper {
		flex: 80px 0 0;
		text-align: right;
	}
}
</style>