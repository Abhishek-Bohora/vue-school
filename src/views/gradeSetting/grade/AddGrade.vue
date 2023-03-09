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
  grade.value.name = "";
  grade.value.section = "";
};
</script>

<template>
  <h2 class="text-xl fotn-sans m-2 font-semibold">Add Grade</h2>
  <form action="" @submit.prevent="onSubmit">
    <input type="text" placeholder="Enter grade name" class="border py-3 px-3 text-grey-darkest mx-2 rounded-md"
      v-model="grade.name" />
    <input type="text" placeholder="Enter section" class="border py-3 px-3 text-grey-darkest mx-2 rounded-md"
      v-model="grade.section" />
    <button class="btn btn-primary">Add</button>
  </form>
</template>
