import { ref, computed, onMounted, onUnmounted } from 'vue';

export function useThime(initDate = new Date()) {
  const baseTime = initDate.getTime();
  const basePerf = performance.now();

  const speed = ref(1);
  const manualOffset = ref(0);
  const elapsed = ref(performance.now());

  const currentTime = computed(() =>  baseTime + manualOffset.value + elapsed.value - basePerf);
  const date = computed(() => new Date(currentTime.value));


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


  return {
    date,
    speed,
  };
}
