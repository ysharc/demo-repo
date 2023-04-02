<script setup lang="ts">
import { ref } from "vue";
import { influTeamData } from '@/_mockApis/components/dashboards/MSData';

function href() {
  return undefined;
}
</script>
<template>
  <VCard elevation="10" class="overflow-hidden">
    <v-card-text class="pa-5">
      <div class="d-flex justify-space-between px-2">
        <div>
          <h4 class="text-h5 mb-1"><b>Influencer Teams</b></h4>
        </div>
        <div>
          <v-btn variant="text" color="secondary" class="text-h7">
            View All <v-icon size="30">mdi-menu-down</v-icon>
          </v-btn>
        </div>
      </div>

      <div class="px-0">
        <v-list>
          <v-list-item v-for="(item, i) in influTeamData" :key="i" @click="href">
            <v-list-item-title>
              <div class="d-flex align-center justify-space-between py-3">
                <div class="">
                  <h4 class="text-h6 mt-n1 mb-1">{{ item.title }}</h4>
                  <div class="truncate-text text-subtitle-2 textSecondary" style="color: #8A8F9C !important;">{{
                    item.desc }}</div>
                </div>
                <div class="d-flex align-center">
                  <div class="d-flex align-center">
                    <v-avatar size="40" style="position: relative; z-index: 10;">
                      <img width="40" src="/images-ms/dashboard/recentInflu-1.png" alt="user" />
                    </v-avatar>
                    <v-avatar size="40" class="ml-4" style="position: absolute; z-index: 5;">
                      <img width="40" src="/images-ms/dashboard/recentInflu-2.png" alt="user" />
                    </v-avatar>
                    <v-avatar size="40" class="" style="position: relative; z-index: 0;">
                      <img width="40" src="/images-ms/dashboard/recentInflu-3.png" alt="user" />
                    </v-avatar>
                  </div>
                  <v-icon size="30" color="grey200">mdi-menu-right</v-icon>
                </div>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </VCard>
</template>
