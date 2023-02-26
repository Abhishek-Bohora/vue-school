<script>
export default {};
</script>
<template>
  <!-- JUST AN EXAMPLE OF NESTED COMPONENT CAN GO HERE -->
  <div class="flex items-center mx-auto">
    <form class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Subject
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="eg: Math"
          />
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm"> Just a checkbox </span>
        </label>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Add
          </button>
        </div>
      </div>
    </form>
    <h2
      class="font-sans text-xl bg-gray-600 text-white p-6 rounded-md ml-5 shadow-md"
    >
      Just an Example of Nested component when we click something for ex
      GradeSetting->Subject
    </h2>
  </div>
  <!--  -->
</template>
