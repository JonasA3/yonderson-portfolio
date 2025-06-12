export const classes = {
  layout: {
    sectionWrapper: "py-8 px-4 sm:px-8 md:px-16 lg:px-24",
    contentContainer: "max-w-4xl mx-auto w-full",
  },
  text: {
    paragraph: "text-body text-lg  hyphens-auto text-justify max-w-prose mx-auto",
    heading: "text-3xl font-bold tracking-tight mb-4",
    subheading: "text-xl font-semibold text-neutral-600 dark:text-neutral-300",
    smallText: "text-sm text-neutral-500 dark:text-neutral-400",
  },
  buttons: {
    primary: "bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition",
    ghost: "bg-transparent text-primary border border-primary px-4 py-2 rounded hover:bg-primary/10",
  },
  menu: {
    link: "block px-4 py-2 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded",
    dropdown: "absolute z-10 bg-white dark:bg-neutral-900 shadow-lg rounded-md mt-2",
  },
  misc: {
    visuallyHidden: "sr-only",
    focusRing: "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
  },
};
