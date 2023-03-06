<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const id = route.params.id;
const grade = ref({
  id: "",
  name: "",
  section: "",
});

const getGrade = async () => {
  const response = await axios.get(`https://localhost:7049/api/Grade/${id}`);
  if (response.status === 200) {
    // console.log(response);
    grade.value = response.data;
    console.log(grade.value);
  }
};

const editGrade = async () => {
  const response = await axios.put(
    `https://localhost:7049/api/Grade/${id}`,
    grade.value
  );
  if (response.status === 200) {
    console.log("grade updated successfully");
  }
};

const onSubmit = async () => {
  await editGrade();
};
//console.log(id);

onMounted(async () => {
  await getGrade();
});
</script>

<template>
  <h2 class="text-xl fotn-sans m-2">Edit Grade</h2>
  <form action="" @submit.prevent="onSubmit">
    <input
      type="text"
      placeholder="Enter grade name"
      class="border py-2 px-3 text-grey-darkest mx-2"
      v-model="grade.name"
    />
    <input
      type="text"
      placeholder="Enter section"
      class="border py-2 px-3 text-grey-darkest mx-2"
      v-model="grade.section"
    />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Submit
    </button>
  </form>
</template>
