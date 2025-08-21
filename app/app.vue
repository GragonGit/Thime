<template>
<main>
  <NuxtPage :thime="thime" />
  <section id="thime-control">
    <div id="control-grip">
      <Icon name="material-symbols:circle" />
      <Icon name="material-symbols:circle" />
      <Icon name="material-symbols:circle" />
    </div>
    <button class="control-button" @click="thime.setSpeed(thime.lastSpeed.value / 2)">
      <Icon name="material-symbols:speed-0-5x-rounded" />
    </button>
    <button class="control-button" @click="onPausePlayButtonClick()">
      <Icon id="pause-play-button"
        :name="thime.isPaused.value ? 'material-symbols:play-arrow' : 'material-symbols:pause-rounded'" />
    </button>
    <button class="control-button" @click="thime.setSpeed(thime.lastSpeed.value * 2)">
      <Icon name="material-symbols:speed-2x-rounded" />
    </button>
  </section>
</main>
</template>

<script setup lang="ts">
import { useThime } from '~/composables/useThime';
const thime = useThime();


function onPausePlayButtonClick() {
  thime.setSpeed(thime.isPaused.value ? thime.lastSpeed.value : 0)
}
</script>

<style lang="sass" scoped>
#thime-control
  display: grid
  grid-template-columns: [grid-start] 1fr 1fr 1fr [grid-end]
  align-items: center
  justify-items: center
  gap: 1rem

  position: fixed
  left: 50%
  bottom: 0
  transform: translateX(-50%) translateY(4rem)

  padding: 1rem
  border-radius: 1rem 1rem 0 0

  background-color: transparent

  transition: transform 100ms linear, background-color 100ms linear

  &:hover, &:focus-within
    transform: translateX(-50%) translateY(0)
    background-color: black

    &>#control-grip>.iconify
      color: white

    &>.control-button
      transform: translateY(0)

.control-button
  display: grid
  aspect-ratio: 1
  align-content: center
  transform: translateY(1rem)

  background: transparent
  border: white 0.25rem solid
  border-radius: 100vw

  transition: scale 200ms linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%)

  &:hover, &:focus-visible
    scale: 1.1

  &:active
    scale: 0.9

#pause-play-button
  font-size: 2.5rem
    
#control-grip
  display: flex
  gap: 0.1rem
  grid-column: grid
  background-color: inherit

  &>.iconify
    color: black
    font-size: 0.5rem
</style>