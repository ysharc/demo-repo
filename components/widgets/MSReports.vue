<script setup lang="ts">
import { computed } from 'vue';

import { getPrimary, getLight100 } from '@/utils/UpdateColors';
import * as themeColors from '@/theme/LightTheme';

/* Chart */
const root = themeColors.MAIN_THEME.colors
const chartOptions = computed(() => {
    return {
        chart: {
            height: 300,
            type: 'bar',
            fontFamily: `inherit`,
            foreColor: "#adb0bb",
            toolbar: {
                show: false
            }
        },
        colors: [root.lightprimary, root.lightprimary, root.lightprimary, root.lightprimary, root.lightprimary, root.primary, root.lightprimary],
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '45%',
                distributed: true,
                endingShape: 'rounded',
                borderRadiusApplication: 'end'
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        xaxis: {
            categories: [['SUN'], ['MON'], ['TUE'], ['WED'], ['THU'], ['FRI'], ['SAT']],
            axisBorder: {
                show: false
            },
            labels: {
                style: {
                    cssClass: 'apexcharts-axes-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    cssClass: 'apexcharts-axes-label',
                },
            }
        },
    };
});
const Chart = {
    series: [
        {
            name: 'Likes',
            data: [41000, 50000, 70000, 30000, 55000, 93000, 66000]
        }
    ]
};
</script>
<template>
    <VCard elevation="10">
        <v-card-item>
            <div class="d-sm-flex align-start mb-2">
                <div>
                    <h5 class="msh5"><b>Reports</b></h5>
                </div>
                <div class="ml-auto">
                    <div class="d-flex ml-auto">
                        <div class="d-flex align-center">
                            <div class="d-flex align-center px-1">
                                <v-btn variant="text" color="grey200" class="ms-st-2">
                                    Instagram<v-icon size="30">mdi-menu-down</v-icon>
                                </v-btn>
                            </div>
                        </div>
                        <div class="d-flex align-center">
                            <div class="d-flex align-center px-1">
                                <v-btn variant="text" color="grey200" class="ms-st-2">
                                    Likes<v-icon size="30">mdi-menu-down</v-icon>
                                </v-btn>
                            </div>
                        </div>
                        <div class="d-flex align-center">
                            <div class="d-flex align-center px-1">
                                <v-btn variant="text" color="grey200" class="ms-st-2">
                                    Last week<v-icon size="30">mdi-menu-down</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <apexchart type="bar" height="320" :options="chartOptions" :series="Chart.series"> </apexchart>
        </v-card-item>
    </VCard>
</template>
