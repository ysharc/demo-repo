<script setup lang="ts">
import { ref } from "vue";
import { statsCardsData } from '@/_mockApis/components/dashboards/MSData';
</script>
<template>
    <v-row class="mt-1">
        <v-col cols="12" xl="4" lg="6" md="4" sm="6" v-for="statscard in statsCardsData" :statscard="statscard"
            :key="statscard.title" class="py-0 mb-3">
            <VCard elevation="10">
                <v-card-text class="pa-5">
                    <div class="d-flex align-center">
                        <v-btn class="elevation-0" icon dark style="color: #3584F7; background-color: #F2F6FA; border-radius: 10% !important;">
                            <component :is="statscard.icon" color="primary" stroke-width="2" size="20" />
                        </v-btn>
                        <div class="ml-2 mr-1">
                            <h4 class="text-subtitle-1">
                                {{ statscard.title }}
                            </h4>
                            <h2 class="text-h4 mt-1">
                                {{ statscard.number }}
                            </h2>
                        </div>
                    </div>
                </v-card-text>
            </VCard>
        </v-col>
    </v-row>
</template>