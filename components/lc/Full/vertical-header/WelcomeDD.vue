<script setup lang="ts">
import { ChevronRightIcon } from 'vue-tabler-icons';
const props = defineProps({
    title: String,
    breadcrumbs: Array as any,
    icon: String
});
</script>

<template>
    <div class="mt-3">
        <div class="d-flex justify-space-between">
            <div class="d-flex py-0 align-center">
                <div>
                    <h3 class="msh1">Good Morning, Alex!</h3>
                    <h6 class="ms-st-1 ms-grey">Welcome to MagSway.</h6>
                </div>
            </div>
        </div>
    </div>
</template>