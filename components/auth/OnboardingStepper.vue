<script setup>
import { Steppy } from './vue3-steppy';
import { ref } from "vue";

const select = ref('Select');
const items = ref(['One', 'Two', 'Three', 'Four']);
const step = ref(1);
const loading = ref(false);
const finalize = function () {
    loading.value = true;
};

const tabs = [
    {
        title: 'Basic\xA0Information',
        iconSuccess: null,
        isValid: true
    },
    {
        title: 'Business\xA0Details',
        iconSuccess: null,
        isValid: true
    }
]
const backText = "Previous"
const cancelText = "Cancel"

const brand = ref(true);
const agency = ref(false);
</script>

<template>
    <Steppy v-model:step="step" :loading="loading" :finalize="finalize" :tabs="tabs" :backText="backText"
        :cancelText="cancelText">
        <template #1>
            <!--- Button group --->
            <div class="w-100">
                <h3 class="ms-st-1 ms-lgrey-cyan text-left mb-3">Which type of advertiers are you?</h3>
                <div class="auth-btn-cont">
                    <div class="btn-onboard">
                        <v-btn variant="flat" :ripple="false"
                            :class="brand ? 'btn-secondary btn-outline ms-subh2' : 'btn-secondary ms-subh2'" block
                            @click="brand = true, agency = false">
                            Brand
                        </v-btn>
                    </div>
                    <div class="btn-onboard">
                        <v-btn variant="flat" :ripple="false"
                            :class="agency ? 'btn-secondary btn-outline ms-subh2' : 'btn-secondary ms-subh2'" block
                            @click="brand = false, agency = true">
                            Agency
                        </v-btn>
                    </div>
                </div>
            </div>
            <!--- Selection group --->
            <div class="w-100">
                <h3 class="ms-st-1 ms-lgrey-cyan text-left mb-3">Who are your competitors?</h3>
                <div class="auth-btn-cont">
                    <v-select v-model="select" :items="items" item-title="state" item-value="abbr" placeholder="Select"
                        return-object single-line variant="" density="compact" bgColor="#F7F7F7" color="none"></v-select>
                </div>
            </div>
            <!--- Selection group --->
            <div class="w-100">
                <h3 class="ms-st-1 ms-lgrey-cyan text-left mb-3">In which category does your business fall into?</h3>
                <div class="auth-btn-cont">
                    <v-select v-model="select" :items="items" item-title="state" item-value="abbr" placeholder="Select"
                        return-object single-line variant="" density="compact" bgColor="#F7F7F7" color="none"></v-select>
                </div>
            </div>
            <!--- Radio group --->
            <div class="w-100">
                <h3 class="ms-st-1 ms-lgrey-cyan text-left mb-3">Have you worked with influencers before?</h3>
                <div class="auth-btn-cont">
                    <v-radio-group inline>
                        <v-radio class="ms-st-1" label="Yes" color="secondary" value="1" ></v-radio>
                        <v-radio class="ms-st-1" label="No" color="secondary" value="2"></v-radio>
                    </v-radio-group>
                </div>
            </div>
        </template>
        <template #2>
            <!--- Button group --->
            <div class="w-100">
                <h3 class="ms-st-1 ms-lgrey-cyan text-left mb-3">Which type of advertiers are you?</h3>
                <div class="auth-btn-cont">
                    <div class="btn-onboard">
                        <v-btn variant="flat" :ripple="false"
                            :class="brand ? 'btn-secondary btn-outline ms-subh2' : 'btn-secondary ms-subh2'" block
                            @click="brand = true, agency = false">
                            Brand
                        </v-btn>
                    </div>
                    <div class="btn-onboard">
                        <v-btn variant="flat" :ripple="false"
                            :class="agency ? 'btn-secondary btn-outline ms-subh2' : 'btn-secondary ms-subh2'" block
                            @click="brand = false, agency = true">
                            Agency
                        </v-btn>
                    </div>
                </div>
            </div>
            <!--- Selection group --->
            <div class="w-100">
                <h3 class="ms-st-1 ms-lgrey-cyan text-left mb-3">Who are your competitors?</h3>
                <div class="auth-btn-cont">
                    <v-select v-model="select" :items="items" item-title="state" item-value="abbr" placeholder="Select"
                        return-object single-line variant="" density="compact" bgColor="#F7F7F7" color="none"></v-select>
                </div>
            </div>
            <!--- Selection group --->
            <div class="w-100">
                <h3 class="ms-st-1 ms-lgrey-cyan text-left mb-3">In which category does your business fall into?</h3>
                <div class="auth-btn-cont">
                    <v-select v-model="select" :items="items" item-title="state" item-value="abbr" placeholder="Select"
                        return-object single-line variant="" density="compact" bgColor="#F7F7F7" color="none"></v-select>
                </div>
            </div>
            <!--- Radio group --->
            <div class="w-100">
                <h3 class="ms-st-1 ms-lgrey-cyan text-left mb-3">Have you worked with influencers before?</h3>
                <div class="auth-btn-cont">
                    <v-radio-group inline>
                        <v-radio class="ms-st-1" label="Yes" color="secondary" value="1" ></v-radio>
                        <v-radio class="ms-st-1" label="No" color="secondary" value="2"></v-radio>
                    </v-radio-group>
                </div>
            </div>
        </template>
    </Steppy>
</template>