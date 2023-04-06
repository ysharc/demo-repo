<script setup>
import { SearchIcon } from 'vue-tabler-icons';
import { searchSugg } from '@/_mockApis/headerData';
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- search1 -->
    <!-- ------------------------------------------------>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <div class="d-flex align-center justify-space-between py-4 px-6" style="width: 15vw;">
                <v-text-field placeholder="Search" class="ms-st-1" color="secondary" density="compact" variant="filled" hide-details>
                    <SearchIcon class="mr-2" size="20" />
                </v-text-field>
            </div>
        </template>
    </v-menu>
</template>
