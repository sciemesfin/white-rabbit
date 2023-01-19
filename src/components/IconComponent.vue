<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :stroke-width="size?size:'1.5'"
    stroke="currentColor"
    :class="`w-${w?w:'8'} h-${h?h:'8'}`"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      :d="paths[path]"
    />
  </svg>
</template>

<script lang="ts" setup>
const paths:any={
  favorite:'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
  sort:'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
  back:'M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3',
  search:'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
}
defineProps<{
  path: string;
  w?:string;
  h?: string;
  size?:string
}>();
</script>
