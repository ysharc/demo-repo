<template>
    <VCard elevation="10">
        <v-card-text class="position-relative">
            <div>
                <h3 class="text-h5 title mb-1"><b>Top Visitors Location</b></h3>
            </div>
            <div id="svgMap" ref="map" class="mt-8"></div>
            <div class="mt-8">
            <h5 class="text-h4"><b>15,870</b> <v-avatar size="30">
                    <img width="30" src="/images-ms/dashboard/usa.png" alt="user" />
                </v-avatar></h5>
                <h5 class="text-h5 mt-1" style="color: grey;">Our most customers are in the US</h5>
            </div>
            <v-row class="d-flex align-center justify-space-between mt-1 pt-5">
                <v-col cols="6" class="d-flex align-center px-2">
                    <span class="text-overline">
                        <i class="mdi mdi-brightness-1 text-secondary mx-1"></i>
                    </span>
                    <h3 class="font-weight-medium mr-3" color="grey200">Massive</h3>
                    <span class="text-h5 font-weight-medium mr-1">15.8K</span>
                </v-col>
                <v-col cols="6" class="d-flex align-center px-2">
                    <span class="text-overline">
                        <i class="mdi mdi-brightness-1 text-primary mx-1"></i>
                    </span>
                    <h3 class="font-weight-medium mr-3" color="grey200">Large</h3>
                    <span class="text-h5 font-weight-medium mr-1">4.9K</span>
                </v-col>
                <v-col cols="6" class="d-flex align-center px-2">
                    <span class="text-overline">
                        <i class="mdi mdi-brightness-1 mx-1"></i>
                    </span>
                    <h3 class="font-weight-medium mr-3" color="grey200">Medium
                    </h3>
                    <span class="text-h5 font-weight-medium mr-1">2.4K</span>
                </v-col>
                <v-col cols="6" class="d-flex align-center px-2">
                    <span class="text-overline">
                        <i class="mdi mdi-brightness-1 mx-1"></i>
                    </span>
                    <h3 class="font-weight-medium mr-3" color="grey200">Small
                    </h3>
                    <span class="text-h5 font-weight-medium mr-1">980</span>
                </v-col>
            </v-row>
        </v-card-text>
    </VCard>
</template>
<script setup>
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";
import { onMounted, ref } from "vue";
import * as themeColors from '@/theme/LightTheme';
const root = themeColors.BLUE_THEME.colors

const map = ref(null);

onMounted(() => {
    new svgMap({
        targetElementID: "svgMap",
        mouseWheelZoomEnabled: false,
        hideFlag: true,
        initialZoom: 1,

        data: {
            data: {
                countresidents: {
                    format: "{0}",
                    thousandSeparator: ",",
                    thresholdMax: 50000,
                    thresholdMin: 1000,
                },

                // change: {
                //   name: "Change to year before",
                //   format: "{0} %",
                // },
            },
            applyData: "countresidents",
            values: {
                IN: { countresidents: 2000, color: root.mediumPrimary },
                AU: { countresidents: 1500, color: root.mediumPrimary },
                CN: { countresidents: 1400, color: root.mediumPrimary },
                US: { countresidents: 15870, color: root.primary },
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
  