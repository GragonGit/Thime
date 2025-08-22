export function useThime(initDate = new Date()) {
  const baseTime = initDate.getTime();
  const basePerf = performance.now();

  const speed = ref(1);
  const manualOffset = ref(0);
  const elapsed = ref(performance.now());
  
  const currentTime = computed(() => baseTime + manualOffset.value + elapsed.value - basePerf);
  const date = computed(() => new Date(currentTime.value));
  const isPaused = computed(() => speed.value === 0);
  const lastSpeed = computed((): number => speed.value === 0 ? lastSpeed.value ?? 1 : speed.value);


  let prevPerf = performance.now();
  let rafId: number;

  function update() {
    const now = performance.now();
    elapsed.value += (now - prevPerf) * speed.value;
    prevPerf = now;

    rafId = requestAnimationFrame(update);
  }

  onMounted(update);
  onUnmounted(() => cancelAnimationFrame(rafId));

  function setSpeed(value: number) {
    speed.value = value;
  }


  return {
    date,
    speed,
    lastSpeed,
    setSpeed,
    isPaused,
  };
}
