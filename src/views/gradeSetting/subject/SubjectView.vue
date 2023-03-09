<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const subjects = ref([]);
const getAllSubjects = async () => {
  try {
    const response = await axios.get("https://localhost:7049/api/Subject");
    if (response.status === 200) {
      subjects.value = response.data;
    }
  } catch (err) {
    console.log(err.message);
  }
};

const deleteSubject = async (id) => {
  const response = await axios.delete(`https://localhost:7049/api/Subject/${id}`);
  if (response.status === 200) {
    location.reload();
    console.log("Deleted successfully");
  }
};

onMounted(async () => {
  await getAllSubjects();
});
</script>

<template>
  <div class="mb-2">
    <router-link to="/subject/add" class="btn btn-primary mb-2">
      Add Subject
    </router-link>
  </div>
  <div class="overflow-x-auto shadow-xl">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>S.N</th>
          <th>Subject Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="subject in subjects" :key="subject.id">
          <th>{{ subject.id }}</th>
          <td>{{ subject.name }}</td>
          <td>
            <router-link :to="`/subject/edit/${subject.id}`" class="btn btn-square btn-accent">
              <Icon icon="material-symbols:edit-sharp" width="16" />
            </router-link>
            <button @click="deleteSubject(subject.id)"
              class="btn btn-circle mx-3 btn-secondary bg-red-500 hover:bg-red-600">
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
