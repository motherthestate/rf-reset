<script>
	import { invalidateAll } from '$app/navigation';
	import { signOut } from './session.remote';
</script>

<h1>Authenticated!</h1>

<button
	onclick={() => {
		signOut().then(() => invalidateAll());
	}}
>
	Sign out
</button>
