<template>
  <div>
    <NavBar />
    <section class="bg-blue-50 min-h-screen py-16">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Privacy Policy</h1>
        <p class="mb-4 text-gray-700">
          Your privacy is important to us. This Privacy Policy explains how your information is handled when you visit and interact with this portfolio website.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">1. Information We Collect</h2>
        <ul class="list-disc ml-6 mb-4 text-gray-700">
          <li>
            <strong>Personal Information:</strong> We do not collect any personal information unless you voluntarily provide it by sending an email through the contact form.
          </li>
        </ul>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">2. How We Use Your Information</h2>
        <ul class="list-disc ml-6 mb-4 text-gray-700">
          <li>To respond to your inquiries or messages sent via email.</li>
        </ul>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">3. Third-Party Services</h2>
        <p class="mb-4 text-gray-700">
          We do not share your information with third parties, except as required by law.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">4. Contact</h2>
        <p class="mb-4 text-gray-700">
          If you have any questions about this Privacy Policy, please use the contact form on this website.
        </p>
        <p class="text-gray-500 text-sm mt-8 text-center">
          Last updated: June 2025
        </p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'PrivacyPolicyView',
  components: {
    NavBar,
    Footer
  }
}
</script>