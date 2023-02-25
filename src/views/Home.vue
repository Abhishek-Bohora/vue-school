<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const gradeSubmenu = ref(false);

function toggleGradeSubmenu() {
  gradeSubmenu.value = !gradeSubmenu.value;
}
</script>

<template>
  <div
    class="flex h-screen w-72 flex-col justify-between bg-zinc-900 text-zinc-300"
  >
    <div class="p-4">
      <h1 class="mb-4 text-xl font-bold">Logo</h1>
      <hr class="mb-6" />
      <div class="mb-4">
        <div class="flex w-full items-center justify-between">
          <a
            class="flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-zinc-800 hover:text-white"
          >
            <Icon icon="heroicons-solid:user-circle" width="25" />
            <span class="ml-3 font-bold">Register</span>
          </a>
        </div>
      </div>

      <div class="mb-4 flex flex-col">
        <div class="flex w-full items-center justify-between">
          <a
            class="flex w-full cursor-pointer items-center rounded-lg px-4 py-2 hover:bg-zinc-800 transition duration-300 ease-in-out hover:text-white"
            @click="toggleGradeSubmenu"
          >
            <Icon icon="ic:twotone-settings" width="25" />
            <span class="ml-3 font-bold">Grade Settings</span>
          </a>
          <button
            class="ml-4 h-full cursor-pointer px-4 py-2 transition duration-300 ease-in-out hover:text-white"
            @click="toggleGradeSubmenu"
          >
            <Icon icon="bi:chevron-down" width="18" />
          </button>
        </div>

        <ul
          v-if="gradeSubmenu"
          class="ml-6 mt-2 w-full border-l-2 border-zinc-800 pl-6 text-sm"
        >
          <li class="mb-4 transition duration-300 ease-in-out hover:text-white">
            <a href="#" class="text-lg">Grades</a>
          </li>
          <li class="mb-4 transition duration-300 ease-in-out hover:text-white">
            <a href="#" class="text-lg">Subjects</a>
          </li>
          <li class="transition duration-300 ease-in-out hover:text-white">
            <a href="#" class="flex items-center text-lg">
              Grade | Subject settings
              <!-- <span
                class="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-xs"
                >78</span
              > -->
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
