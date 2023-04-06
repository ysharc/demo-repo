<script setup lang="ts">
import { ref } from "vue";
/*Social icons*/
import google from "/images/svgs/google-icon.svg";
import facebook from "/images/svgs/facebook-icon.svg";
import { UserIcon } from 'vue-tabler-icons';

const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref("");
const email = ref("");
const dialog = ref("");
const passwordRules = ref([
  (v: string) => !!v || "Password is required",
  (v: string) =>
    (v && v.length >= 8) || "Password must be at least 8 characters",
]);
const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);
const fname = ref("");
const fnameRules = ref([
  (v: string) => !!v || "Name is required",
  (v: string) =>
    (v && v.length <= 10) || "Name must be less than 10 characters",
]);

</script>
<template>
  <v-form ref="form" class="mt-5 mb-6">
    <v-text-field v-model="fname" :rules="fnameRules" required placeholder="Username"
      prepend-inner-icon="mdi-account-outline" variant="" bg-color="#F7F7F7" color="#383D3B"></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" required placeholder="Email / Phone number"
      prepend-inner-icon="mdi-email-outline" variant="" bg-color="#F7F7F7" color="#383D3B"></v-text-field>
    <v-text-field v-model="password" :counter="8" :rules="passwordRules" required placeholder="Password"
      prepend-inner-icon="mdi-lock-outline" :append-inner-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
      :type="show1 ? 'text' : 'password'" variant="" bg-color="#F7F7F7" color="#383D3B"
      @click:append-inner="show1 = !show1"></v-text-field>
    <v-btn  class="mt-2 btn-primary ms-subh2" color="secondary" block submit flat>
      Sign Up
      <v-dialog v-model="dialog" activator="parent" width="40%">
        <v-card class="text-center px-5 py-5">
          <div class="pa-sm-6 pa-4 w-100 ">
            <AuthOnboardingStepper />
          </div>
        </v-card>
      </v-dialog>
    </v-btn>
  </v-form>
  <div class="d-flex align-center text-center mb-6">
    <div class="ms-st-2 ms-lgrey-cyan w-100 px-5 auth-divider position-relative">
      <span class="bg-surface px-5 py-3 position-relative" style="color: #626665 !important;">Or signup with</span>
    </div>
  </div>
  <v-row class="d-flex">
    <v-col cols="6" sm="6" class="pr-2">
      <v-btn variant="flat"  class="btn-secondary" block>
        <img :src="google" height="20" class="mr-2" alt="google" />
      </v-btn>
    </v-col>
    <v-col cols="6" sm="6" class="pl-2">
      <v-btn variant="flat"  class="btn-secondary" block>
        <img :src="facebook" width="25" height="30" class="mr-1" alt="facebook" />
      </v-btn>
    </v-col>
  </v-row>
</template>
