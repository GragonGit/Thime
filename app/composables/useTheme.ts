export function useTheme() {
  const root = document?.documentElement ?? null;

  let currentTheme = 'placeholderTheme';

  function setTheme(name: string = '') {
    if (!root) return;
    if (name === '') name = useRoute().path.slice(1) + 'Theme';

    root.classList.remove(currentTheme);
    root.classList.add(name);
    currentTheme = name;
  }

  return {
    setTheme
  }
}