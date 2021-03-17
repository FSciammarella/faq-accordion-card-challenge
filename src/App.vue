<template>
  <div
    class="flex items-center justify-center h-screen w-screen bg-gradient-to-t from-soft-blue to-soft-violet"
  >
    <div class="h-3/4 w-4/6 bg-white rounded-3xl shadow-2xl">
      <div class="relative w-1/2 h-full">
        <div class="absolute faq-background h-full w-full"></div>
        <div class="absolute faq-woman h-full w-full">
          <img
            src="./assets/illustration-box-desktop.svg"
            alt=""
            class="absolute w-56 faq-box"
          />
        </div>
      </div>
      <div class="w-1/2 h-full"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="postcss">
@layer components {
  .faq-background {
    background-image: url('./assets/bg-pattern-desktop.svg');
    background-size: 34rem auto;
    background-repeat: no-repeat;
    background-position: center right;
  }
  .faq-woman {
    background-color: transparent;
    background-size: 34rem auto;
    background-image: url('./assets/illustration-woman-online-desktop.svg');
    background-repeat: no-repeat;
    background-position: center right;
  }
  .faq-box {
    /* animation-iteration-count: infinite; */

    top: 40%;
    right: 21.8rem;
    animation: wobble 4s infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes wobble {
    0% {
      top: 35%;
    }
    50% {
      top: 43%;
    }
    100% {
      top: 35%;
    }
  }
}
</style>
