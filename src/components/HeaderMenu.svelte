<script lang="ts">
  import { Menu } from 'lucide-svelte';
  import { onMount } from 'svelte';

  type NavItem = { id: string; label: string };
  const navItems: NavItem[] = [
    { id: 'hero', label: 'Start' },
    { id: 'profile', label: 'Profile' },
    { id: 'active-skills', label: 'Active Skills' },
    { id: 'experience-with', label: 'Experience with' },
    { id: 'work-experience', label: 'Work Experience' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Connect' },
  ];

  let show = false;

  // Close on click outside
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (!node.contains(event.target as Node)) {
        show = false;
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      },
    };
  }
</script>

<div class="dropdown" use:clickOutside>
  <button
    aria-haspopup="true"
    aria-expanded={show}
    aria-controls="nav-menu"
    class="px-1 py-1 text-md"
    on:click={() => (show = !show)}
  >
    <div class="button-content">
      MENU
      <Menu class="w-5 h-5" />
    </div>
  </button>

  {#if show}
    <nav id="nav-menu" class="menu rounded shadow bg-bg text-fg">
      {#each navItems as item}
        <a href={`#${item.id}`} on:click={() => (show = false)} class="capitalize">
          {item.label}
        </a>
      {/each}
    </nav>
  {/if}
</div>

<style>
  .dropdown {
    @apply relative inline-block;
  }
  .menu {
    @apply absolute flex flex-col gap-4 left-0 mt-2 w-40 rounded bg-bg shadow z-50 px-4 py-2;
  }
  .menu a {
    @apply text-left text-fg hover:text-accent transition-colors;
  }
  .button-content {
    @apply flex items-center gap-2;
  }
</style>
