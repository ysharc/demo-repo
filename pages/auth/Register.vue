<script setup lang="ts">
definePageMeta({
    layout: "blank",
});
</script>
<template>
    <div class="pa-3">
        <v-row class="h-100vh auth">
            <v-col cols="12" md="6" class="d-none d-md-flex align-center justify-center authentication position-relative">
                <div class="">
                    <img src="/images-ms/logos/logo-auth.png" class="position-relative d-flex auth-logo"
                        alt="login-background" />
                </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex align-center justify-center bg-surface">
                <div class="auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0">
                    <div class="position-relative d-flex justify-center align-center mt-3">
                        <h6 class="ms-st-1 ms-lgrey-cyan">
                            Already have an account?
                        </h6>
                        <v-btn variant="plain" to="/auth/login" class="ms-subh2 btn-primary-2 pl-2 ml-3">Sign In</v-btn>
                    </div>
                </div>
                <div class="mt-xl-0 mt-10 pt-xl-0 pt-10 mw-50">
                    <h2 class="msh1 ms-grey-cyan mb-2">Sign Up</h2>
                    <div class="ms-st-1 ms-lgrey-cyan mb-6">Welcome to MagSway!</div>
                    <AuthRegisterForm />
                </div>
            </v-col>
        </v-row>
    </div>
</template>
