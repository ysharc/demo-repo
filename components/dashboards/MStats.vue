<script setup lang="ts">
import { ref } from "vue";
import { statsCardsData } from '@/_mockApis/components/dashboards/MSData';
</script>
<template>
    <v-row class="mt-1">
        <v-col cols="6" xl="4" lg="6" md="4" sm="6" v-for="statscard in statsCardsData" :statscard="statscard"
            :key="statscard.title" class="py-0 mb-3">
            <VCard elevation="10">
                <v-card-text class="pa-5">
                    <div class="d-flex align-center">
                        <v-btn class="elevation-0 v-btn-db" icon dark>
                            <component :is="statscard.icon" color="primary" stroke-width="2" size="20" />
                        </v-btn>
                        <div class="ml-2 mr-1">
                            <h4 class="ms-subh4">
                                {{ statscard.title }}
                            </h4>
                            <h2 class="msh2 mt-1">
                                <b>{{ statscard.number }}</b>
                            </h2>
                        </div>
                    </div>
                </v-card-text>
            </VCard>
        </v-col>
    </v-row>
</template>