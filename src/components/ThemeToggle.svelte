<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, Moon, Monitor } from 'lucide-svelte';
  import { t } from '../Content/translations';

  let lang: 'en' | 'sv' = (localStorage.getItem('lang') as 'en' | 'sv') || 'en';

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
    if (typeof window !== 'undefined') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const saved = localStorage.getItem('theme');
        if (saved === 'system') {
          applyTheme('system');
        }
      });
    }
  };

  onMount(() => {
    const stored = localStorage.getItem('theme') || 'system';
    current = options.includes(stored as ThemeMode) ? (stored as ThemeMode) : 'system';
    applyTheme(current);
    watchSystemTheme();
  });

  // Custom action to detect clicks outside
  //DEV NOTE: This is a workaround for a Svelte/TS syntax bug not DRY but works
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (!node.contains(event.target as Node)) {
        show = false;
      }
    };
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        show = false;
      }
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('keydown', handleKeydown, true);

    return {
      destroy(): void {
        document.removeEventListener('click', handleClick, true);
        document.removeEventListener('keydown', handleKeydown, true);
      },
    };
  }
</script>

<div class="dropdown" use:clickOutside>
  <button
    aria-haspopup="true"
    aria-expanded={show}
    aria-controls="theme-menu"
    class="px-1 py-1 text-md"
    on:click={() => (show = !show)}
  >
    <div class="button-content">
      {t[lang].labels.theme.toUpperCase()}:
      {#if current === 'light'}
        {t[lang].labels.lightMode.toUpperCase()}
        <Sun class="w-5 h-5" />
      {:else if current === 'dark'}
        {t[lang].labels.darkMode.toUpperCase()}
        <Moon class="w-5 h-5" />
      {:else}
        {t[lang].labels.systemMode.toUpperCase()}
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
            <Sun class="w-5 h-5" /> {t[lang].labels.lightMode}
          {/if}
          {#if opt === 'dark'}
            <Moon class="w-5 h-5" /> {t[lang].labels.darkMode}
          {/if}
          {#if opt === 'system'}
            <Monitor class="w-5 h-5" /> {t[lang].labels.systemMode}
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
    @apply absolute flex flex-col gap-5 left-[15px] mt-2 w-32 rounded bg-bg shadow z-50;
  }
  .menu button {
    @apply flex justify-start gap-2 w-full text-left text-fg;
  }
  .button-content {
    @apply flex items-center gap-2;
  }
</style>
