<template>
  <div class="font-sans bg-gray-100">
    <!-- Navbar Section -->
    <nav class="bg-white shadow-md py-4 fixed w-full z-10">
      <div class="container mx-auto flex justify-between items-center px-4">
        <div class="text-2xl font-bold text-green-600">Agro-insight</div>
        <div class="space-x-6 hidden md:flex">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="hover:text-green-500 transition duration-300">{{ link.text }}</a>
        </div>
        <div class="space-x-4">
          <a href="/login" class="hover:text-green-500 transition duration-300">Login</a>
          
          <a :href="route('register')" class="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">Register</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-bg text-white py-40 relative">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-6xl font-bold mb-4 leading-tight">Welcome to Agro-insight</h1>
        <p class="text-2xl mb-8 max-w-2xl mx-auto">Empowering farmers with intelligent solutions for a sustainable future.</p>
        <a href="#features" class="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 text-lg inline-block">Discover Our Solutions</a>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">Our Cutting-Edge Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="bg-green-50 p-8 rounded-xl shadow-lg transition duration-300 hover:shadow-xl">
            <i :class="['fas', feature.icon, 'text-5xl text-green-500 mb-6']"></i>
            <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-green-100">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="About Agro-insight" class="rounded-lg shadow-xl">
          </div>
          <div class="w-full md:w-1/2 md:pl-12">
            <h2 class="text-4xl font-bold mb-6">About Agro-insight</h2>
            <p class="text-lg mb-6">At Agro-insight, we're passionate about revolutionizing agriculture through technology. Our team of experts combines deep farming knowledge with cutting-edge AI and IoT solutions to help farmers around the world increase yields, reduce costs, and practice sustainable agriculture.</p>
            <a href="#contact" class="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-green-50 p-6 rounded-xl shadow-lg">
            <img :src="testimonial.image" :alt="testimonial.name" class="w-20 h-20 rounded-full mx-auto mb-4 object-cover">
            <p class="italic mb-4">"{{ testimonial.quote }}"</p>
            <p class="font-bold text-green-600">- {{ testimonial.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-green-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div class="max-w-2xl mx-auto">
          <form @submit.prevent="submitForm" class="bg-white p-8 rounded-xl shadow-lg">
            <div class="mb-4">
              <label for="name" class="block mb-2 font-semibold">Name</label>
              <input v-model="form.name" type="text" id="name" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
            </div>
            <div class="mb-4">
              <label for="email" class="block mb-2 font-semibold">Email</label>
              <input v-model="form.email" type="email" id="email" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
            </div>
            <div class="mb-4">
              <label for="message" class="block mb-2 font-semibold">Message</label>
              <textarea v-model="form.message" id="message" rows="4" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>
            <button type="submit" class="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>


    <!-- Footer Section -->
    <footer class="bg-green-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">Agro-insight</h3>
            <p>Empowering farmers with intelligent solutions.</p>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li v-for="link in quickLinks" :key="link.href">
                <a :href="link.href" class="hover:text-green-300 transition duration-300">{{ link.text }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-4">Legal</h4>
            <ul>
              <li v-for="link in legalLinks" :key="link.href">
                <a :href="link.href" class="hover:text-green-300 transition duration-300">{{ link.text }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a v-for="social in socialLinks" :key="social.icon" :href="social.href" class="text-2xl hover:text-green-300 transition duration-300">
                <i :class="['fab', social.icon]"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center">
          &copy; {{ new Date().getFullYear() }} Agro-insight. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AgroInsightLanding',
  data() {
    return {
      navLinks: [
        { href: '#', text: 'Home' },
        { href: '#features', text: 'Features' },
        { href: '#about', text: 'About' },
        { href: '#testimonials', text: 'Testimonials' },
        { href: '#contact', text: 'Contact' },
      ],
      features: [
        { icon: 'fa-tractor', title: 'Smart Farming', description: 'Leverage AI and IoT to optimize your farm operations and increase productivity.' },
        { icon: 'fa-leaf', title: 'Crop Management', description: 'Monitor and manage your crops with precision using our advanced analytics.' },
        { icon: 'fa-cloud-sun-rain', title: 'Weather Insights', description: 'Get accurate weather predictions and plan your farming activities accordingly.' },
      ],
      testimonials: [
        { name: 'Farmer John', quote: 'Agro-insight has transformed the way I manage my farm. The insights provided are invaluable!', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { name: 'Sarah Green', quote: 'The weather predictions are spot-on, allowing me to plan my activities with confidence.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { name: 'Mike Thompson', quote: 'The customer support team is always there when I need them. Truly a game-changer!', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
      ],
      form: {
        name: '',
        email: '',
        message: '',
      },
      quickLinks: [
        { href: '#', text: 'Home' },
        { href: '#features', text: 'Features' },
        { href: '#about', text: 'About' },
        { href: '#testimonials', text: 'Testimonials' },
        { href: '#contact', text: 'Contact' },
      ],
      legalLinks: [
        { href: '#', text: 'Privacy Policy' },
        { href: '#', text: 'Terms of Service' },
      ],
      socialLinks: [
        { href: '#', icon: 'fa-facebook' },
        { href: '#', icon: 'fa-twitter' },
        { href: '#', icon: 'fa-linkedin' },
        { href: '#', icon: 'fa-instagram' },
      ],
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form);
      // Reset form after submission
      this.form = { name: '', email: '', message: '' };
    },
  },
};
</script>

<style scoped>
.hero-bg {
  background-image: url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
}
</style>