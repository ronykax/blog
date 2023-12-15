<script lang="ts">
  import { timestamp, getImageURL } from '$lib';
  import { PUBLIC_DOMAIN } from "$env/static/public";
  
  export let data;

  const shareBlog = () => {
    navigator.share({
      title: data.title,
      text: data.description,
      url: `${PUBLIC_DOMAIN}/${data.name}`
    });
  }

  let thumbnail: string;
  const { collectionId, id } = data;

  if (collectionId && id) {
    thumbnail = getImageURL(collectionId, id, data.thumbnail);
  }
</script>
  
<div class="flex justify-center">
  <div class="flex flex-col w-10/12 my-10 md:w-3/4">
    {#if thumbnail}
      <img class="w-full mb-6 shadow aspect-video sm:w-3/4 md:w-1/2" src="{thumbnail}" alt="">
    {/if}
    <h1>{data.title}</h1>
    <div class="flex mt-4">
      <span class="text-white text-opacity-75">{data.created && timestamp(data.created).replace(/\//g, "-")}</span>
      <span class="mx-2.5 text-white text-opacity-50 select-none">•</span>
      <button class="text-white text-opacity-75 underline underline-offset-4 decoration-1 hover:text-opacity-100" on:click={shareBlog}>Share</button>
      <span class="mx-2.5 text-white text-opacity-50 select-none">•</span>
      <a class="text-white text-opacity-75 underline underline-offset-4 decoration-1 hover:text-opacity-100" href="/">Go Back</a>
    </div>
    <ul class="flex justify-center w-full gap-3 my-8 list-disc list-inside">
      <li class="text-white text-opacity-75"></li>
      <li class="text-white text-opacity-75"></li>
      <li class="text-white text-opacity-75"></li>
    </ul>
    <div>
      {@html data.content}
    </div>
  </div>
</div>