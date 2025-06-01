<template>
  <div>
    <NavBar />
    <section class="bg-blue-50 min-h-screen py-16">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Privacy Policy</h1>
        <p class="mb-4 text-gray-700">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit and interact with this portfolio website.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">1. Information We Collect</h2>
        <ul class="list-disc ml-6 mb-4 text-gray-700">
          <li><strong>Personal Information:</strong> We do not collect personal information unless you voluntarily provide it (e.g., via the contact form).</li>
          <li><strong>Usage Data:</strong> We may collect non-personal information such as browser type, device, and pages visited for analytics purposes.</li>
        </ul>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">2. How We Use Your Information</h2>
        <ul class="list-disc ml-6 mb-4 text-gray-700">
          <li>To respond to your inquiries or messages.</li>
          <li>To improve the website and user experience.</li>
        </ul>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">3. Cookies</h2>
        <p class="mb-4 text-gray-700">
          This website may use cookies for basic functionality and analytics. You can disable cookies in your browser settings.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">4. Third-Party Services</h2>
        <p class="mb-4 text-gray-700">
          We do not share your information with third parties, except as required by law or for basic analytics (such as Google Analytics).
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">5. Data Security</h2>
        <p class="mb-4 text-gray-700">
          We take reasonable measures to protect your information, but please note that no method of transmission over the Internet is 100% secure.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">6. Contact</h2>
        <p class="mb-4 text-gray-700">
          If you have any questions about this Privacy Policy, please use the contact form on this website.
        </p>
        <p class="text-gray-500 text-sm mt-8 text-center">
          Last updated: June 2025
        </p>
      </div>
    </section>
  </div>
  <Footer />
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