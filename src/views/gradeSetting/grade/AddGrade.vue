<script setup>
import { ref } from "vue";
import axios from "axios";

const grade = ref({
  name: "",
  section: "",
});

const addGrade = async () => {
  try {
    const response = await axios.post(
      "https://localhost:7049/api/Grade",
      grade.value
    );
    if (response.status === 200) {
      console.log("successfully added grade");
    }
  } catch (err) {
    console.log(err.message);
  }
};

const onSubmit = async () => {
  await addGrade();
};
</script>

<template>
  <h2 class="text-xl fotn-sans m-2">Add Grade</h2>
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
