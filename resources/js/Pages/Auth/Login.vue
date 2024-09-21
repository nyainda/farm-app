<template>
  <div :class="{ 'dark': darkMode }"
       class="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-blue-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4 md:px-8 lg:px-16 py-6 lg:py-12">
      <div class="bg-white dark:bg-gray-800 rounded-xl mt-5 shadow-2xl overflow-hidden max-w-4xl mx-auto transition-colors duration-300">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Left side - Image and branding (hidden on small and medium screens) -->
          <div class="relative bg-cover bg-center h-full hidden md:block"
               style="background-image: url('https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
              <div class="flex items-center mb-4">
                <img :src="logo" alt="Logo" class="h-12 w-auto" />
                <span class="text-2xl font-bold text-green-700 dark:text-green-500 ml-2">Agro-Insight</span>
              </div>
              <p class="text-xl text-center mt-4">Cultivate success with smart farm management</p>
            </div>
          </div>

          <!-- Right side - Login form -->
          <div class="p-8">
            <div class="flex justify-between items-center mb-8">
              <div class="flex items-center">
                <img :src="logo" alt="Logo" class="h-12 w-auto" />
                <span class="text-2xl font-bold text-green-700 dark:text-green-500 ml-2">Agro-Insight</span>
              </div>
              <button @click="toggleDarkMode" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
                <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
            </div>

            <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Sign in to your account</h2>

            <form class="space-y-6" @submit.prevent="login">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
                <input type="email" v-model="email" id="email" required
                       class="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 dark:text-white transition-colors duration-300"
                       placeholder="you@example.com">
                <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email[0] }}</p>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <div class="mt-1 relative">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    id="password"
                    required
                    class="block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 dark:text-white transition-colors duration-300"
                  >
                  <button
                    @click="toggleShowPassword"
                    type="button"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg
                      v-if="!showPassword"
                      class="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    <svg
                      v-else
                      class="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  </button>
                </div>
                <p v-if="errors.password" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.password[0] }}</p>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember" v-model="remember" type="checkbox"
                         class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded">
                  <label for="remember" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="/forgot-password" class="text-sm font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300">Forgot your password?</a>
              </div>

              <div>
                <button type="submit"
                        :disabled="isLoading"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <span v-if="!isLoading">Sign in</span>
                  <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4c-2.056 0-4.047-.794-5.545-2.29l-.707-.707z"></path>
                  </svg>
                </button>
              </div>
            </form>

            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div class="mt-6">
                <a :href="googleLoginUrl" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Sign in with Google</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </a>
              </div>
            </div>

        <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
      Don't have an account yet?
      <Link 
        :href="route('register')" 
        class="font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300"
      >
        Sign up
      </Link>
    </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import axios from 'axios';

export default {
  components: {
    Link,
  },
  setup() {
    const darkMode = ref(false);
    const isLoading = ref(false);
    const email = ref('');
    const password = ref('');
    const remember = ref(false);
    const showPassword = ref(false);
    const errors = ref({});
    const logo = computed(() => '.../Layout/ApplicationLogo.vue'); // Replace with actual logo path
    const googleLoginUrl = computed(() => '/login/google'); // Replace with actual Google login route

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
    };

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const login = async () => {
      isLoading.value = true;
      errors.value = {};
      try {
        const response = await axios.post('/login', {
          email: email.value,
          password: password.value,
          remember: remember.value,
        });
        
        // Handle successful login (e.g., redirect to dashboard)
        window.location.href = '/dashboard';
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          errors.value = error.response.data.errors;
        } else {
          errors.value = { general: ['An unexpected error occurred. Please try again.'] };
        }
      } finally {
        isLoading.value = false;
      }
    };

    return {
      darkMode,
      isLoading,
      email,
      password,
      remember,
      showPassword,
      errors,
      logo,
      googleLoginUrl,
      toggleDarkMode,
      toggleShowPassword,
      login,
    };
  },
};
</script>