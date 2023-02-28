<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

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
    <router-link to="/grade/add" class="btn btn-primary mb-2">
      Add Grade
    </router-link>
  </div>
  <div class="overflow-x-auto shadow-xl">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>S.N</th>
          <th>Grade Name</th>
          <th>Section</th>
          <th>Number of students</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="grade in grades" :key="grade.id">
          <th>{{ grade.id }}</th>
          <td>{{ grade.name }}</td>
          <td>{{ grade.section }}</td>
          <td></td>
          <td>
            <button class="btn btn-square btn-accent">
              <Icon icon="material-symbols:edit-sharp" width="16" />
            </button>
            <button
              class="btn btn-circle mx-3 btn-secondary bg-red-500 hover:bg-red-600"
            >
              <Icon icon="fluent:delete-28-filled" width="16" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="btn-group mx-auto mt-3">
    <button class="btn">1</button>
    <button class="btn btn-active">2</button>
    <button class="btn">3</button>
    <button class="btn">4</button>
  </div>
</template>
