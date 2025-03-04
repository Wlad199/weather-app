<template>
	<div class="weather__date">
		{{ new Date().toLocaleDateString('en-us', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}) }}
	</div>
</template>

<script setup lang='ts'></script>

<style scoped  lang='scss'>
.weather__date {
	text-align: center;
	margin-bottom: 40px;
	font-size: 32px;
	color: #6539bc;
	line-height: 120%;

	@media (max-width: 767px) {
		font-size: 24px;
	}
}
</style>