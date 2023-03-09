<script setup>
import Navbar from "../components/layout/Navbar.vue";
import Sidebar from "../components/layout/Sidebar.vue";
</script>

<template>
  <div class="flex h-screen">
    <Sidebar />
    <!-- navbar and content -->
    <div class="flex-1">
      <Navbar />
      <div class="flex flex-col mx-auto justify-center w-11/12 mt-6">
        <router-view />
      </div>
    </div>
    <!--  -->
  </div>
</template>
