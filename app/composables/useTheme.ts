export function useTheme() {
  const root = document.querySelector(':root')!
  
  let currentTheme = 'placeholderTheme'

  function setTheme(name: string) {
    root.classList.remove(currentTheme);
    root.classList.add(name);
    currentTheme = name;
  }

  return {
    setTheme
  }
}