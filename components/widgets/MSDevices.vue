<script setup lang="ts">
import { computed } from 'vue';
import { getPrimary, getSecondary, getLightPrimary } from '@/utils/UpdateColors';
import * as themeColors from '@/theme/LightTheme';
const root = themeColors.BLUE_THEME.colors

/* Chart */
const chartOptions1 = computed(() => {
    return {
        labels: ['Computer', 'Tablet', 'Mobile'],
        chart: {
            height: 150,
            type: 'donut',
            foreColor: '#adb0bb',
            fontFamily: `inherit`,
            toolbar: {
                show: false
            }
        },
        colors: [root.graphPrimary, root.graphSecondary, root.graphTertiary],
        plotOptions: {
            pie: {
                donut: {
                    size: '84%',
                    background: 'transparent',
                    borderRadius: [3],
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7
                        },
                        value: {
                            show: false
                        },
                        total: {
                            show: true,
                            fontSize: '12px',
                            fontWeight: '600',
                            color: '#001919',
                            label: 'CLICKS'
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false
        },
        legend: {
            show: false
        }
    };
});
const seriescolumnchart1 = [55, 55, 55];

const chartOptions2 = computed(() => {
    return {
        labels: ['Computer', 'Tablet', 'Mobile'],
        chart: {
            height: 150,
            type: 'donut',
            foreColor: '#adb0bb',
            fontFamily: `inherit`,
            toolbar: {
                show: false
            }
        },
        colors: [root.graphPrimary, root.graphSecondary, root.graphTertiary],
        plotOptions: {
            pie: {
                donut: {
                    size: '84%',
                    background: 'transparent',
                    borderRadius: [3],
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7
                        },
                        value: {
                            show: false
                        },
                        total: {
                            show: true,
                            fontSize: '12px',
                            fontWeight: '600',
                            color: '#001919',
                            label: 'COST'
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false
        },
        legend: {
            show: false
        }
    };
});
const seriescolumnchart2 = [55, 55, 55];

const chartOptions3 = computed(() => {
    return {
        labels: ['Computer', 'Tablet', 'Mobile'],
        chart: {
            height: 150,
            type: 'donut',
            foreColor: '#adb0bb',
            fontFamily: `inherit`,
            toolbar: {
                show: false
            }
        },
        colors: [root.graphPrimary, root.graphSecondary, root.graphTertiary],
        plotOptions: {
            pie: {
                donut: {
                    size: '84%',
                    background: 'transparent',
                    borderRadius: [3],
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7
                        },
                        value: {
                            show: false
                        },
                        total: {
                            show: true,
                            fontSize: '12px',
                            fontWeight: '600',
                            color: '#001919',
                            label: 'IMPRESSIONS'
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false
        },
        legend: {
            show: false
        }
    };
});
const seriescolumnchart3 = [55, 55, 55];

</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between">
                <v-card-title class="text-h5"><b>Devices</b></v-card-title>
                <div class="d-flex align-center pb-1 justify-center">
                    <h6 class="text-subtitle-1 text-medium-emphasis d-flex align-center">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-2" size="10"
                            color="graphPrimary"></v-icon>COMPUTER
                    </h6>
                    <h6 class="text-subtitle-1 text-medium-emphasis pl-5 d-flex align-center">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-2" size="10" color="graphSecondary"></v-icon>
                        TABLET
                    </h6>
                    <h6 class="text-subtitle-1 text-medium-emphasis pl-5 d-flex align-center">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-2" size="10" color="graphTertiary"></v-icon>
                        MOBILE
                    </h6>
                </div>
            </div>
            <v-row>
                <v-col cols="4">
                    <apexchart class="mt-6" type="donut" height="150" :options="chartOptions1" :series="seriescolumnchart1">
                    </apexchart>
                </v-col>
                <v-col cols="4">
                    <apexchart class="mt-6" type="donut" height="150" :options="chartOptions2" :series="seriescolumnchart2">
                    </apexchart>
                </v-col>
                <v-col cols="4">
                    <apexchart class="mt-6" type="donut" height="150" :options="chartOptions3" :series="seriescolumnchart3">
                    </apexchart>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
