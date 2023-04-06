<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
import * as themeColors from '@/theme/LightTheme';
/*Chart*/
const chartOptions = computed(() => {
    return {

        colors: [themeColors.MAIN_THEME.colors.graphPrimary, themeColors.MAIN_THEME.colors.graphSecondary],
        fill: {
            type: "",
            opacity: ["0", "0"],
        },
        chart: {
            type: "area",
            fontFamily: "inherit",
            height: 365,
            foreColor: "#adb0bb",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
            border: 1,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            labels: {
                style: {
                    cssClass: 'apexcharts-axes-label',
                },
            }
        },
        yaxis: {
            labels: {
                style: {
                    cssClass: 'apexcharts-axes-label',
                },
            }
        },
        grid: {
            show: true,
            borderColor: "rgba(0, 0, 0, .2)",
            color: "rgba(0, 0, 0, .2)",
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        tooltip: {
            theme: "dark",
        },
    }
});
const Chart = {
    series: [
        {
            name: "IMPRESSIONS",
            data: [16000, 19000, 24000, 29500, 24000, 30000, 39000, 31000, 22000, 23000, 24500, 21000],
        },
        {
            name: "VIEWS",
            data: [35000, 28000, 9000, 33000, 42000, 35000, 30000, 43000, 37000, 40000, 25000, 36000],
        },
    ],
};
const select = ref("March");
const items = ref(["March", "April", "May", "June"]);
const elementVisible = ref(false);
onMounted(() => {
    setTimeout(() => (elementVisible.value = true), 10);
});
</script>

<template>
    <VCard elevation="10">
        <v-card-text>
            <div class="d-sm-flex align-start mb-2">
                <div>
                    <h5 class="msh5"><b>Traffic</b></h5>
                </div>
                <div class="ml-auto">
                    <div class="ml-auto">
                        <div class="d-flex align-center">
                            <v-btn variant="text" color="grey200" class="ms-st-2">
                                Last year<v-icon size="30">mdi-menu-down</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-center justify-space-between">
                <div class="d-flex">
                    <div class="mr-6">
                        <h5 class="ms-subh4 ms-orange mb-1">IMPRESSIONS</h5>
                        <h5 class="msh2">216K</h5>
                    </div>
                    <div>
                        <h5 class="ms-subh4 ms-pink mb-1">VIEWS</h5>
                        <h5 class="msh2">6.75K</h5>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="mr-6">
                        <h5 class="ms-subh4 ms-grey mb-1" style="color: #8A8F9C;">AVG.CPV</h5>
                        <h5 class="msh2">$128</h5>
                    </div>
                    <div>
                        <h5 class="ms-subh4 ms-grey mb-1" style="color: #8A8F9C;">VIEW RATE</h5>
                        <h5 class="msh2">48%</h5>
                    </div>
                </div>
            </div>
            <div v-show="elementVisible" class="mt-6">
                <apexchart type="area" height="365" :options="chartOptions" :series="Chart.series"></apexchart>
            </div>
        </v-card-text>
    </VCard>
</template>
