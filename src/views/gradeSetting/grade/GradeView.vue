<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const grades = ref([]);
const getAllGrades = async () => {
  try {
    const response = await axios.get("https://localhost:7049/api/Grade");
    if (response.status === 200) {
      grades.value = response.data;
      // console.log(grades);
    }
  } catch (err) {
    console.log(err.message);
  }
};

onMounted(async () => {
  await getAllGrades();
});
</script>

<template>
  <div class="mb-2">
    <router-link
      to="/grade/add"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Grade
    </router-link>
  </div>
  <div class="flex items-center mx-auto">
    <table class="shadow-lg bg-white border-separate">
      <tr>
        <th class="bg-blue-100 border text-left px-8 py-4">S.N</th>
        <th class="bg-blue-100 border text-left px-8 py-4">Grade Name</th>
        <th class="bg-blue-100 border text-left px-8 py-4">Section</th>
        <th class="bg-blue-100 border text-left px-8 py-4">
          Number of student
        </th>
        <th class="bg-blue-100 border text-left px-8 py-4">Action</th>
      </tr>
      <tr v-for="grade in grades" :key="grade.id">
        <td class="border px-8 py-4">{{ grade.id }}</td>
        <td class="border px-8 py-4">{{ grade.name }}</td>
        <td class="border px-8 py-4">{{ grade.section }}</td>
        <td class="border px-8 py-4"></td>
      </tr>
    </table>
  </div>
</template>
