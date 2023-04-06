<script setup lang="ts">
import { ref } from "vue";
import { recentInfluData } from '@/_mockApis/components/dashboards/MSData';

function href() {
  return undefined;
}
</script>
<template>
  <VCard elevation="0" class="overflow-hidden">
    <v-card-text class="pa-1">
      <div class="d-flex justify-space-between px-0">
        <div>
          <h2 class="msh3 mb-1">Recent Influencers</h2>
        </div>
        <div>
          <v-btn variant="text" color="secondary" class="ms-subh3">
            View more <v-icon size="30">mdi-menu-down</v-icon>
          </v-btn>
        </div>
      </div>

      <div class="px-0">
        <v-list>
          <v-list-item v-for="(item, i) in recentInfluData" :key="i" @click="href">
            <v-list-item-title>
              <div class="d-flex align-center justify-space-between py-3">
                <div class="d-flex align-center">
                  <div class="mr-3">
                    <v-avatar size="40">
                      <img :src="item.avatar" :alt="item.title" width="40" />
                    </v-avatar>
                  </div>
                  <div class="mx-3">
                    <h4 class="ms-subh2 mt-n1 mb-1">{{ item.title }}</h4>
                    <div class="ms-st-2 ms-grey" style="color: #8A8F9C !important;">{{
                      item.desc }}</div>
                  </div>
                </div>
                <div>
                  <h4 class="ms-subh3 ms-primary mt-n1 mb-1">{{ item.count }}
                    Followers</h4>
                </div>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </VCard>
</template>
