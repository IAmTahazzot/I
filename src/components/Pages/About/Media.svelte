<script lang="ts">
  let media: {
    src: string,
  }[] = [
    { src: '/media/activity-1.mp4' },
    { src: '/media/activity-2.mp4' },
    { src: '/media/activity-3.mp4' },
    { src: '/media/activity-4.mp4' },
  ]
</script>

<div class='h-auto xl:h-[80vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
  {#each media as { src }, i}
    <div class='h-[80vh] md:h-auto rounded-lg overflow-hidden bg-neutral-100'>
      <video src={src} class='w-full h-full object-cover' loop muted autoplay playsinline data-sveltekit-preload-data></video>
    </div>
  {/each}
</div>