<script setup lang="ts">
import { ref } from "vue";
import { Form } from "vee-validate";

/*Social icons*/
import google from "/images/svgs/google-icon.svg";
import facebook from "/images/svgs/facebook-icon.svg";
import OTPInput from "./OTPInput.vue";

const router = useRouter();
const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
const dialog = ref("");
const password = ref("");
const email = ref("");
const passwordRules = ref([
  (v: string) => !!v || "Password is required",
  (v: string) =>
    (v && v.length >= 8) || "Password must be at least 8 characters",
]);
const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);

function validate() {
  //router.push({ path: "/" });
}
</script>

<template>
  <Form @submit="validate" v-slot="{ errors, isSubmitting }" class="mt-5 mb-6">
    <v-text-field v-model="email" :rules="emailRules" required placeholder="Email / Phone number" prepend-inner-icon="mdi-email-outline"
      variant="" bg-color="#F7F7F7" color="#383D3B"></v-text-field>
      <v-text-field v-model="password" :rules="passwordRules" required placeholder="Password" prepend-inner-icon="mdi-lock-outline"
      :append-inner-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" :type="show1 ? 'text' : 'password'" variant="" bg-color="#F7F7F7" color="#383D3B" @click:append-inner="show1 = !show1"></v-text-field>
    <div class="d-flex flex-wrap align-center my-2">
      <div class="ml-sm-auto">
        <NuxtLink to="" class="text-secondary text-decoration-none text-body-1 opacity-1 font-weight-medium">Forgot Password?</NuxtLink>
      </div>
    </div>
    <v-btn  :loading="isSubmitting" color="secondary" :disabled="!password" block type="submit" flat class="mt-5 btn-secondary">
      Sign In
      <v-dialog v-model="dialog" activator="parent" width="40%">
        <v-card class="text-center px-5 py-5">
          <div class="pa-sm-6 pa-4 w-100 ">
            <h3 class="msh3 ms-grey-cyan">Verify your phone number</h3>
            <p class="ms-st-1 ms-lgrey-cyan mt-2">
              Please enter the OTP code sent to +91 *********5
            </p>
            <!---Form---->
            <div class="mt-sm-13 mt-8">
              <OTPInput :digit-count="4" @update:otp="otpValue = $event"></OTPInput>
              <NuxtLink to="" class="text-secondary ms-st-2 pl-1">Resend code <AuthTimer />
              </NuxtLink>
              <v-row class="d-flex mt-5">
                <v-col cols="6" sm="6" class="pr-2">
                  <v-btn class="btn-secondary"  block flat @click="dialog = false">Cancel</v-btn>
                </v-col>
                <v-col cols="6" sm="6" class="pl-2">
                  <v-btn color="secondary"  block flat>Verify</v-btn>
                </v-col>
              </v-row>
            </div>

          </div>
        </v-card>
      </v-dialog>
    </v-btn>
    <div v-if="errors.apiError" class="mt-2">
      <v-alert color="error">{{ errors.apiError }}</v-alert>
    </div>
  </Form>
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
