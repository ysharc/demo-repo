<script setup lang="ts">
import { ref } from "vue";

import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import UiTittleSubtitleCard from "@/components/shared/UiTittleSubtitleCard.vue";
import TheSalesOverview from "@/components/dashboards/analytical/TheSalesOverview.vue";
import TotalSales from "@/components/dashboards/analytical/TotalSales.vue";
import BlogCard from "@/components/dashboards/analytical/BlogCard.vue";
import NewsletterCampaign from "@/components/dashboards/analytical/NewsletterCampaign.vue";
import TheBandwidthUsage from "@/components/dashboards/analytical/TheBandwidthUsage.vue";
import TheDownloadCount from "@/components/dashboards/analytical/TheDownloadCount.vue";
import TheWeatherCard from '@/components/dashboards/analytical/TheWeatherCardVue.vue';
import TheProfileCard from '@/components/dashboards/analytical/TheProfileCard.vue';
import TheMyContacts from '@/components/dashboards/analytical/TheMyContacts.vue';
import TheActivityTimeline from '@/components/dashboards/analytical/TheActivityTimeline.vue';
import TheStatsCards from "@/components/dashboards/MStats.vue";
import MSRecentInfluencers from "@/components/dashboards/MSRecentInfluencers.vue";
import MSInfluencerTeams from "@/components/dashboards/MSInfluencerTeams.vue";
import MSTraffic from "@/components/dashboards/MSTraffic.vue";
import MSTopVisitors from "@/components/dashboards/MSTopVisitors.vue";
import MSReports from "@/components/widgets/MSReports.vue";
import MSPlatforms from "@/components/widgets/MSPlatforms.vue";
import MSDevices from "@/components/widgets/MSDevices.vue";

import { useCustomizerStore } from '@/stores/customizer';
const customizer = useCustomizerStore();

const page = ref({ title: "Analytical" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Analytical",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
  <!-- <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb> -->
  <LcFullVerticalHeader v-if="!customizer.setHorizontalLayout" />
  <v-row>
    <!---Stats overview--->
    <v-col cols="12" sm="12" lg="8">
      <TheStatsCards />
    </v-col>
    <!---Recent Influencers--->
    <v-col cols="12" sm="12" lg="4">
      <MSRecentInfluencers />
    </v-col>
    <v-col cols="12" sm="12" lg="12">
      <h3 class="text-h4 title mb-1">Showing Analytics for<v-btn variant="text" color="primary" class="text-h5">Coca Cola
          <v-icon size="30">mdi-menu-down</v-icon>
        </v-btn></h3>
    </v-col>
    <!---Analytics--->
    <v-col cols="12" sm="12" lg="8">
      <MSTraffic />
      <div class="mt-7"></div>
      <MSReports />
      <div class="mt-7"></div>
      <MSPlatforms />
    </v-col>
    <!---Profile card /my contacts--->
    <v-col cols="12" sm="12" lg="4">
      <MSDevices />
      <div class="mt-7"></div>
      <MSInfluencerTeams />
      <div class="mt-7"></div>
      <MSTopVisitors />
    </v-col>
  </v-row>
</template>
