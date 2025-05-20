<script lang="ts">
  import { Menu, ChevronRight, ChevronLeft } from 'lucide-svelte';
  import { onMount } from 'svelte';

  type MenuState = 'root' | 'cv' | 'portfolio' | 'language';

  let show = false;
  let menuState: MenuState = 'root';
  let focusedIndex = 0;

  const rootItems = [
    { label: 'CV Quick Links', state: 'cv' },
    { label: 'Portfolio', state: 'portfolio' },
    { label: 'Language', state: 'language' },
  ];

  const cvItems = [
    { id: 'hero', label: 'Start' },
    { id: 'profile', label: 'Profile' },
    { id: 'active-skills', label: 'Active Skills' },
    { id: 'experience-with', label: 'Experience with' },
    { id: 'work-experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Connect' },
  ];

  const portfolioItems = [
    { href: '/portfolio', label: 'See All' },
    // Add individual projects here when available
  ];

  const languageItems = [
    { lang: 'en', label: 'English' },
    { lang: 'sv', label: 'Swedish' },
  ];

  // Return to root on Escape or Back button
  function back() {
    menuState = 'root';
    focusedIndex = 0;
  }

  //DEV NOTE: Might use this in the future, right now tab navigation is enough
  // function handleKeydown(e: KeyboardEvent) {
  //   const listLength = currentList().length;
  //   if (e.key === 'ArrowDown') {
  //     focusedIndex = (focusedIndex + 1) % listLength;
  //   }
  //   if (e.key === 'ArrowUp') {
  //     focusedIndex = (focusedIndex - 1 + listLength) % listLength;
  //   }
  //   if (e.key === 'Escape') {
  //     if (menuState !== 'root') {
  //       back();
  //       e.preventDefault();
  //     } else {
  //       show = false;
  //     }
  //   }
  // }

  function currentList() {
    if (menuState === 'cv') return cvItems;
    if (menuState === 'portfolio') return portfolioItems;
    if (menuState === 'language') return languageItems;
    return rootItems;
  }

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

  let isMobile = false;
  // Check if the screen is mobile size
  onMount(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => (isMobile = media.matches);
    update();
    media.addEventListener('change', update);
  });
</script>

<!-- The TS error is a Svelte/TS syntax bug and cannot be commented away -->
<div class="dropdown" role="menu" use:clickOutside>
  <button
    aria-haspopup="true"
    aria-expanded={show}
    class="px-1 py-1 text-md"
    on:click={() => {
      show = !show;
      focusedIndex = 0;
      menuState = 'root';
    }}
  >
    <span class="flex items-center gap-2">
      MENU
      <Menu class="w-5 h-5" />
    </span>
  </button>

  {#if show}
    <nav class="menu motion-safe:transition-all motion-safe:duration-300">
      {#key menuState}
        <!-- Back button -->
        {#if menuState !== 'root'}
          <button on:click={back} class="flex items-center gap-2 text-sm mb-2">
            <ChevronLeft class="w-4 h-4" /> Back
          </button>
        {/if}

        <!-- Render current menu level -->
        {#if menuState === 'root'}
          {#each rootItems as item, i}
            <button
              on:click={() => {
                menuState = item.state as MenuState;
                focusedIndex = i;
              }}
              on:keydown={(e) => {
                if (e.key === 'Enter') {
                  menuState = item.state as MenuState;
                  focusedIndex = i;
                }
              }}
              on:focus={() => (focusedIndex = i)}
              class="menu-btn"
            >
              {item.label}
              <ChevronRight class="w-4 h-4 ml-auto" />
            </button>
          {/each}
        {:else if menuState === 'cv'}
          {#each cvItems as item, i}
            <a
              href={isMobile ? `#${item.id}-mobile` : `#${item.id}`}
              on:click={() => (show = false)}
              on:focus={() => (focusedIndex = i)}
              class="menu-btn"
            >
              {item.label}
            </a>
          {/each}
        {:else if menuState === 'portfolio'}
          {#each portfolioItems as item, i}
            <a
              href={item.href}
              on:click={() => (show = false)}
              id={`menu-item-${menuState}-${i}`}
              role="menuitem"
              class="menu-btn"
            >
              {item.label}
            </a>
          {/each}
        {:else if menuState === 'language'}
          {#each languageItems as item, i}
            <button
              on:click={() => {
                console.log('Set language:', item.lang);
                show = false;
              }}
              class="menu-btn"
            >
              {item.label}
            </button>
          {/each}
        {/if}
      {/key}
    </nav>
  {/if}
</div>

<style>
  .dropdown {
    @apply relative inline-block;
  }

  .menu {
    @apply absolute left-0 mt-2 w-52 rounded bg-bg text-fg shadow z-50 flex flex-col gap-2 px-4 py-2 outline-none;
  }

  .menu-btn {
    @apply flex justify-between items-center text-left w-full text-sm text-fg hover:text-accent transition-colors px-1 py-1;
  }

  .menu-btn.selected {
    @apply bg-accent text-bg;
  }

  .menu-btn:hover {
    @apply bg-accent text-bg;
  }
  .menu-btn:active {
    @apply bg-accent text-bg;
  }
</style>
