<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "../../../router";
const route = useRoute();

const id = route.params.id;
const subject = ref({
    id: "",
    name: "",
});

const getSubject = async () => {
    const response = await axios.get(`https://localhost:7049/api/Subject/${id}`);
    if (response.status === 200) {
        // console.log(response);
        subject.value = response.data;
        console.log(subject.value);
    }
};

const editSubject = async () => {
    const response = await axios.put(
        `https://localhost:7049/api/Subject/${id}`,
        subject.value
    );
    if (response.status === 200) {
        console.log("Subject updated successfully");
    }
};

const onSubmit = async () => {
    await editSubject();
    router.push({ path: "/subject" });
};
//console.log(id);

onMounted(async () => {
    await getSubject();
});
</script>

<template>
    <h2 class="text-xl font-sans m-2 font-semibold">Edit Subject</h2>
    <form action="" @submit.prevent="onSubmit">
        <input type="text" placeholder="Enter subject name" class="border py-3 px-3 text-grey-darkest mx-2 rounded-md"
            v-model="subject.name" />
        <button class="btn btn-primary">Update</button>
    </form>
</template>
