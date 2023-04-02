<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
import * as themeColors from '@/theme/LightTheme';

const select = ref('March 2022');
const items = ref(['March 2022', 'April 2022', 'May 2022']);
const root = themeColors.BLUE_THEME.colors
/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            height: 360,
            type: 'bar',
            fontFamily: `inherit`,
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            stacked: true,
        },
        colors: [root.primary, root.mediumPrimary, root.lightprimary],
        plotOptions: {
            bar: {
                borderRadius: [3],
                horizontal: false,
                barHeight: '100%',
                columnWidth: '40%',
            }
        },
        stroke: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            show: true
        },
        yaxis: {
            tickAmount: 6
        },
        xaxis: {
            categories: ['CONVERSATIONS', 'ENGAGEMENTS', 'IMPRESSIONS', 'VIEWS', 'LIKES', 'PARAMETER'],
            axisTicks: {
                show: false
            }
        },
    };
});
const Chart = [
    {
        name: 'FACEBOOK',
        data: [25, 31, 42, 19, 37, 55],
    },
    {
        name: 'YOUTUBE',
        data: [35, 54, 20, 38, 38, 27],
    },
    {
        name: 'INSTAGRAM',
        data: [40, 40, 38, 10, 46, 19],
    },
];
</script>

<template>
    <v-card elevation="10" class="mt-6">
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between">
                <v-card-title class="text-h5"><b>Platforms</b></v-card-title>
                <div class="d-flex align-center pb-1 justify-center">
                    <h6 class="text-subtitle-1 text-medium-emphasis d-flex align-center">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-2" size="10" color="primary"></v-icon>FACEBOOK
                    </h6>
                    <h6 class="text-subtitle-1 text-medium-emphasis pl-5 d-flex align-center">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-2" size="10" color="mediumPrimary"></v-icon>
                        YOUTUBE
                    </h6>
                    <h6 class="text-subtitle-1 text-medium-emphasis pl-5 d-flex align-center">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-2" size="10" color="lightprimary"></v-icon>
                        INSTAGRAM
                    </h6>
                </div>
            </div>
            <apexchart type="bar" height="250" :options="chartOptions" :series="Chart"> </apexchart>
        </v-card-item>
    </v-card>
</template>
