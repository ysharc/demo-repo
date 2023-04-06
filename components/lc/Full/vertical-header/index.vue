<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
import { useEcomStore } from '@/stores/apps/eCommerce';
// Icon Imports
import { SquarePlusIcon } from 'vue-tabler-icons';
const customizer = useCustomizerStore();
const showSearch = ref(false);
const drawer = ref(false);
const appsdrawer = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
function searchbox() {
    showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
    // yes, console.log() is a side effect
    priority.value = newPriority;
});
// count items
const store = useEcomStore();
const getCart = computed(() => {
    return store.cart;
});
</script>

<template>
    <v-app-bar elevation="0" :priority="priority" height="80" color="surface" id="top">
        <v-btn class="hidden-md-and-down custom-hover-primary" icon color="primary" variant="text"
                @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)">
                <Menu2Icon size="25" />
            </v-btn>
            <v-btn class="hidden-lg-and-up" icon variant="text" @click.stop="customizer.SET_SIDEBAR_DRAWER"
                size="small">
                <Menu2Icon size="25" />
            </v-btn>

        <LcFullVerticalHeaderWelcomeDD />

        <v-spacer />

        <div class="py-4 px-6 text-center">
            <v-btn variant="flat" class="ms-subh2 btn-primary-2" block style="color: #01AFB2 !important;"><SquarePlusIcon class="mr-2" size="20" />Create Campaign</v-btn>
        </div>
        <!-- Search bar -->
        <LcFullVerticalHeaderSearchbar />
        <!-- Notification -->
        <LcFullVerticalHeaderNotificationDD />
        <!-- User Profile -->
        <div class="ml-3">
            <LcFullVerticalHeaderProfileDD />
        </div>
    </v-app-bar>
</template>
