<script lang="ts">
  import { getImageURL } from '$lib';

  export let data;

  interface Item {
    title: string;
    description: string;
    content: string;
    created: string;
    name: string;
    thumbnail: string;
  }

  let items: Item[] = [];

  if (data && data.items) {
    data.items.map((item, index) => items.push({
      title: item.title,
      description: item.description,
      content: item.content,
      created: item.created,
      name: item.name,
      thumbnail: getImageURL(item.collectionId, item.id, item.thumbnail)
    }));
  }
</script>

<div class="flex justify-center">
  <div class="flex flex-col w-10/12 my-10 md:w-3/4">
    <h1>Rony's Blog</h1>
    <ul class="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each items as item}
        <a href="/{item.name}">
          <div class="flex flex-col bg-white shadow rounded-nm ring-white ring-1 ring-opacity-25 bg-opacity-5 hover:bg-opacity-7">
            <img class="rounded-t-nm aspect-video" src="{item.thumbnail}" alt="">
            <div class="flex flex-col gap-2 p-4 rounded-b-lg">
              <h2>{item.title}</h2>
              <p class="text-white text-opacity-75">{item.description}</p>
            </div>
          </div>
        </a>
      {/each}
    </ul>
  </div>
</div>