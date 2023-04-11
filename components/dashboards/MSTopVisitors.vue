<script setup>
import svgMap from "svgmap";
import { onMounted, ref } from "vue";
import * as themeColors from '@/theme/LightTheme';
const root = themeColors.MAIN_THEME.colors

const map = ref(null);

onMounted(() => {
    new svgMap({
        targetElementID: "svgMap",
        mouseWheelZoomEnabled: false,
        hideFlag: true,
        initialZoom: 1,
        colorMax: root.primary,
        colorMin: root.mediumPrimary,
        colorNoData: root.lightprimary,
        data: {
            data: {
                countvisitors: {
                    format: "{0}",
                    thousandSeparator: ",",
                    thresholdMax: 50000,
                    thresholdMin: 1000,
                },
            },
            applyData: "countvisitors",
            values: {
                IN: { countvisitors: 2000 },
                AU: { countvisitors: 1500 },
                CN: { countvisitors: 1400 },
                US: { countvisitors: 15870 },
            },
        },
    });
});
</script>

<style lang="scss">
.svgMap-map-wrapper {
    background: transparent;
}
</style>

<template>
    <VCard elevation="10">
        <v-card-text class="position-relative">
            <div>
                <h3 class="msh5 mb-1"><b>Top Visitors Location</b></h3>
            </div>
            <div id="svgMap" ref="map" class="mt-8"></div>
            <div class="mt-8">
            <h5 class="msh2 mb-2"><b>15,870</b> <v-avatar size="30">
                    <img width="30" src="/images-ms/dashboard/usa.png" alt="user" />
                </v-avatar></h5>
                <h5 class="ms-subh3 ms-grey">Our most customers are in the US</h5>
            </div>
            <v-row class="d-flex align-center justify-space-between mt-1 pt-5">
                <v-col cols="6" class="d-flex align-center px-2">
                    <span class="text-overline">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mx-1" size="1.44vh" color="primary"></v-icon>
                    </span>
                    <h3 class="ms-st-3 ms-grey mr-3">MASSIVE</h3>
                    <span class="text-h5 font-weight-medium mr-1">15.8K</span>
                </v-col>
                <v-col cols="6" class="d-flex align-center px-2">
                    <span class="text-overline">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mx-1" size="1.44vh" color="mediumPrimary"></v-icon>
                    </span>
                    <h3 class="font-weight-medium mr-3" color="grey200">Large</h3>
                    <span class="text-h5 font-weight-medium mr-1">4.9K</span>
                </v-col>
                <v-col cols="6" class="d-flex align-center px-2">
                    <span class="text-overline">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mx-1" size="1.44vh" color="lightprimary"></v-icon>
                    </span>
                    <h3 class="font-weight-medium mr-3" color="grey200">Medium
                    </h3>
                    <span class="text-h5 font-weight-medium mr-1">2.4K</span>
                </v-col>
                <v-col cols="6" class="d-flex align-center px-2">
                    <span class="text-overline">
                        <v-icon icon="mdi mdi-checkbox-blank-circle" class="mx-1" size="1.44vh" color="lightprimary"></v-icon>
                    </span>
                    <h3 class="font-weight-medium mr-3" color="grey200">Small
                    </h3>
                    <span class="text-h5 font-weight-medium mr-1">980</span>
                </v-col>
            </v-row>
        </v-card-text>
    </VCard>
</template>
  