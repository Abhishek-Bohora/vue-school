<script setup>
import { ref } from "vue";
import axios from "axios";

const subject = ref({
  name: "",
});

const addSubject = async () => {
  try {
    const response = await axios.post(
      "https://localhost:7049/api/Subject",
      subject.value
    );
    if (response.status === 200) {
      console.log("successfully added subject");
    }
  } catch (err) {
    console.log(err.message);
  }
};

const onSubmit = async () => {
  await addSubject();
  subject.value.name = "";
};
</script>

<template>
  <h2 class="text-xl fotn-sans m-2 font-semibold">Add Subject</h2>
  <form action="" @submit.prevent="onSubmit">
    <input type="text" placeholder="Enter Subject name" class="border py-3 px-3 text-grey-darkest mx-2 rounded-md"
      v-model="subject.name" />
    <button class="btn btn-primary">Add</button>
  </form>
</template>
