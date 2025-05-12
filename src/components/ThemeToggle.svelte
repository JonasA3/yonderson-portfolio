<script>
  import { onMount } from 'svelte';

  let isDark = false;

  const toggleTheme = () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  // On mount, sync with localStorage
  onMount(() => {
    const stored = localStorage.getItem('theme');
    isDark = stored === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  });
</script>

<button on:click={toggleTheme}>
  {isDark ? '🌙 Dark' : '☀️ Light'}
</button>
