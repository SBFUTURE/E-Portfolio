<template>
  <div>
    <NavBar />
    <section class="bg-blue-50 min-h-screen py-16">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Terms of Service</h1>
        <p class="mb-4 text-gray-700">
          Welcome to my portfolio website. By accessing or using this website, you agree to the following terms and conditions.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">1. Use of Content</h2>
        <ul class="list-disc ml-6 mb-4 text-gray-700">
          <li>All content on this website is for personal, non-commercial use only.</li>
          <li>You may not copy, reproduce, or distribute any content without permission.</li>
        </ul>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">2. User Conduct</h2>
        <ul class="list-disc ml-6 mb-4 text-gray-700">
          <li>Do not use this website for any unlawful or harmful activities.</li>
          <li>Do not attempt to gain unauthorized access to any part of the website.</li>
        </ul>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">3. Disclaimer</h2>
        <p class="mb-4 text-gray-700">
          The information on this website is provided "as is" without warranties of any kind. I am not responsible for any errors or omissions, or for any damages resulting from the use of this website.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">4. External Links</h2>
        <p class="mb-4 text-gray-700">
          This website may contain links to external sites. I am not responsible for the content or privacy practices of those sites.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">5. Changes to Terms</h2>
        <p class="mb-4 text-gray-700">
          I reserve the right to update these Terms of Service at any time. Changes will be posted on this page.
        </p>
        <h2 class="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2">6. Contact</h2>
        <p class="mb-4 text-gray-700">
          If you have any questions about these Terms of Service, please use the contact form on this website.
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
  name: 'TermsOfServiceView',
  components: {
    NavBar,
    Footer
  }
}
</script>