<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, Moon, Monitor } from 'lucide-svelte';

  // Possible modes
  type ThemeMode = 'light' | 'dark' | 'system';
  let options: ThemeMode[] = ['light', 'dark', 'system'];
  // Default mode
  let defaultMode: ThemeMode = 'system';
  // Current mode
  // This will be set to 'system' if the user has not set a preference
  let current: ThemeMode = 'system'; // default fallback
  let show = false;

  const applyTheme = (mode: ThemeMode) => {
    if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', mode);
    }
  };

  const setTheme = (mode: ThemeMode) => {
    current = mode;
    localStorage.setItem('theme', mode);
    applyTheme(mode);
  };

  // Watch for OS theme changes if using 'system'
  const watchSystemTheme = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const saved = localStorage.getItem('theme');
      if (saved === 'system') {
        applyTheme('system');
      }
    });
  };

  onMount(() => {
    const stored = localStorage.getItem('theme') || 'system';
    current = options.includes(stored as ThemeMode) ? (stored as ThemeMode) : 'system';
    applyTheme(current);
    watchSystemTheme();
  });

  // Custom action to detect clicks outside
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (!node.contains(event.target as Node)) {
        show = false;
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy(): void {
        document.removeEventListener('click', handleClick, true);
      },
    };
  }
</script>

<div class="dropdown" use:clickOutside>
  <button
    aria-haspopup="true"
    aria-expanded={show}
    aria-controls="theme-menu"
    class="px-3 py-1 text-md"
    on:click={() => (show = !show)}
  >
    <div class="button-content">
      THEME
      {#if current === 'light'}
        LIGHT
        <Sun class="w-5 h-5" />
      {:else if current === 'dark'}
        DARK
        <Moon class="w-5 h-5" />
      {:else}
        SYSTEM
        <Monitor class="w-5 h-5" />
      {/if}
    </div>
  </button>

  {#if show}
    <div class="menu rounded shadow bg-bg text-fg">
      {#each options as opt}
        <button
          on:click={() => {
            setTheme(opt);
            show = false;
          }}
          class="capitalize"
          aria-pressed={current === opt}
        >
          {#if opt === 'light'}
            <Sun class="w-5 h-5" /> Light
          {/if}
          {#if opt === 'dark'}
            <Moon class="w-5 h-5" /> Dark
          {/if}
          {#if opt === 'system'}
            <Monitor class="w-5 h-5" /> System
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .dropdown {
    @apply relative inline-block;
  }
  .menu {
    @apply absolute left-[15px] mt-2 w-32 rounded bg-bg shadow z-50;
  }
  .menu button {
    @apply flex justify-start gap-2 w-full text-left text-fg px-4 py-2;
  }
  .button-content {
    @apply flex items-center gap-1;
  }
</style>
