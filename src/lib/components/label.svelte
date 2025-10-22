<script lang="ts">
  import type { RemoteFormIssue } from '@sveltejs/kit';

  let {
    label,
    children,
    issues = []
  }: { label: string; children: () => any; issues?: RemoteFormIssue[] | undefined } = $props();
</script>

<label
  class="relative text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
>
  <p class="text-xxs pointer-events-none absolute top-0 left-0 px-3.5 pt-3.5">{label}</p>

  <div class="[&_input]:pt-8.5">
    {@render children()}
  </div>

  {#each issues as issue}
    <p class="text-center text-xs mt-2 font-medium text-neutral-500">{issue.message}</p>
  {/each}
</label>
