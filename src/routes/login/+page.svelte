<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Label from '$lib/components/label.svelte';
	import type { PageProps } from '../login/$types';
	import { login } from './data.remote';

	let { data }: PageProps = $props();

	let submitted = $state(false);

	const globalIssues = $derived(
		login.fields
			.allIssues()
			?.filter((issue) => login.fields.issues()?.some((i) => i.message === issue.message)) ?? []
	);

	let formEl = $state<HTMLFormElement | null>(null);

	// proposed fix: does not reset form errors, just values sadly
	// onNavigate(() => {
	// 	formEl?.reset();
	// });
</script>

<div>
	<h1 class="text-lg font-semibold">Sign in</h1>

	<p class="my-3 leading-relaxed text-neutral-600">Enter your email and password to sign in.</p>

	<form
		bind:this={formEl}
		{...login.enhance(async ({ submit, form }) => {
			submitted = true;
			const result = await submit();
		})}
	>
		<fieldset disabled={!!login.pending} class="my-6 flex w-full flex-col items-stretch gap-3">
			<Label label="Email" issues={login.fields.email.issues()}>
				<input
					placeholder="email@example.com"
					aria-label="Email"
					autocomplete="email"
					{...login.fields.email.as('text')}
				/>
			</Label>

			<Label label="Password" issues={login.fields.password.issues()}>
				<input
					autocomplete="current-password"
					placeholder="password"
					aria-label="Password"
					{...login.fields.password.as('password')}
				/>
			</Label>

			<!-- Global messages -->
			{#each globalIssues as issue}
				<p class="component-chip scheme-light my-3">
					{issue.message}
				</p>
			{/each}

			<div class="mt-3 flex">
				<button type="submit" class="flex-1">
					<span class="">Continue</span>
				</button>
			</div>
		</fieldset>
	</form>
</div>
