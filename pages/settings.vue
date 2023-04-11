<script lang="ts">
export default {
  data: () => ({
    mainTab: null,
    nestedTab: null,
    hTabs: [
      {
        title: 'Profile Settings',
        value: 'one'
      },
      {
        title: 'Business Details',
        value: 'two'
      },
      {
        title: 'Magsway Link',
        value: 'three'
      },
      {
        title: 'Notifications',
        value: 'four'
      },
      {
        title: 'Billing & Shipping',
        value: 'five'
      },
      {
        title: 'Security',
        value: 'six'
      },
      {
        title: 'Features',
        value: 'seven'
      },
      {
        title: 'Social Integrations',
        value: 'eight'
      }
    ],
    vTabs: [
      {
        title: 'Links',
        value: 'one'
      },
      {
        title: 'Appearance',
        value: 'two'
      },
      {
        title: 'Analytics',
        value: 'three'
      },
      {
        title: 'Settings',
        value: 'four'
      }
    ]
  }),
}
import { ref } from "vue";
import { SquarePlusIcon } from 'vue-tabler-icons';

</script>

<template>
  <!-- <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb> -->
  <LcFullVerticalHeader />
  <v-card variant="outlined" class="py-5">
    <v-tabs v-model="mainTab" bg-color="surface" fixed-tabs>
      <h3 class="msh3 align-self-center px-3 mx-5">Settings</h3>
      <template v-for="(item, i) in hTabs">
        <v-tab :value="item.value" class="ms-st-2 ms-lgrey-cyan" color="primary">{{ $t(item.title)
        }}</v-tab>
      </template>
    </v-tabs>

    <v-card-text>
      <v-window v-model="mainTab">
        <v-window-item value="three">
          <v-row>
            <v-col cols="2">
              <v-card variant="outlined">
                <v-tabs v-model="nestedTab" bg-color="surface" class="vertical">
                  <template v-for="(item, i) in vTabs">
                    <v-tab :value="item.value" class="ms-st-2 ms-lgrey-cyan" color="primary">{{
                      $t(item.title) }}</v-tab>
                  </template>
                </v-tabs>
              </v-card>
            </v-col>
            <v-col cols="10">
              <v-card variant="outlined">
                <v-card-text>
                  <v-window v-model="nestedTab">
                    <v-window-item value="one">
                      <div class="nest-header">
                        <div>
                          <h3 class="msh3 align-self-center">Links</h3>
                        </div>
                        <div class="d-flex flex-row">
                          <div>
                            <v-btn variant="outlined" class="ms-subh2" density="comfortable" block style="color: #01AFB2 !important;">
                              <SquarePlusIcon class="mr-2 btn-icon" />Header
                            </v-btn>
                          </div>
                          <div class="ml-3">
                            <v-btn variant="flat" class="ms-subh2 btn-primary-2" density="comfortable" block style="color: #01AFB2 !important;">
                              <SquarePlusIcon class="mr-2 btn-icon" />Add Link
                            </v-btn>
                          </div>
                        </div>
                      </div>
                      <v-row style="margin-top: 2vh;">
                        <v-col cols="12" sm="7" class="px-5">
                          <img src="/images-ms/settings/top.png" class="d-img-1" />
                          <img src="/images-ms/settings/bottom.png" class="d-img-1" />
                        </v-col>
                        <v-col cols="12" sm="5" class="px-5 b-left d-flex flex-row justify-center">
                          <img src="/images-ms/settings/right.png" class="d-img-2" />
                        </v-col>
                      </v-row>
                    </v-window-item>
                  </v-window>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
</v-card></template>
