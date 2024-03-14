<script lang="ts">
  export let form;
</script>

{#if form && form.body?.login && form.body?.mails}
	{#each Object.entries(form.body.mails) as mail}
		<div>
			<h2>{mail[1].name}</h2>
			<p>{mail[1].message}</p>
		</div>
	{/each}
{:else}
	<div class="h-screen flex items-center justify-center bg-dark">
    <div>
		<form method="POST">
			<input
        autofocus
				name="password"
				type="password"
				placeholder="Access Code"
				class="border py-1 px-2 border-emerald-700 focus-visible:border-emerald-500 bg-dark text-emerald-500 placeholder:text-emerald-700 text-xs outline-0"
			/>
      {#if form && form.body?.failed}
        <p class="text-red-500 text-xs mt-2">{form.body.failed}</p>
      {/if}
		</form>
    </div>
	</div>
{/if}
