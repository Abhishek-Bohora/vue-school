<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "../../../router";
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
  router.push({ path: "/grade" });
};
//console.log(id);

onMounted(async () => {
  await getGrade();
});
</script>

<template>
  <h2 class="text-xl fotn-sans m-2 font-semibold">Edit Grade</h2>
  <form action="" @submit.prevent="onSubmit">
    <input type="text" placeholder="Enter grade name" class="border py-3 px-3 text-grey-darkest mx-2 rounded-md"
      v-model="grade.name" />
    <input type="text" placeholder="Enter section" class="border py-3 px-3 text-grey-darkest mx-2 rounded-md"
      v-model="grade.section" />
    <button class="btn btn-primary">Update</button>
  </form>
</template>
