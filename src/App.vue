<template>
  <div
    class="relative flex items-center overflow-hidden justify-center h-screen w-screen bg-gradient-to-t from-soft-blue to-soft-violet"
  >
    <div
      class="h-3/4 w-5/6 md:w-4/6 bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row"
    >
      <div
        class="relative flex-shrink sm:flex-shrink-0 w-full md:w-1/2 md:h-full flex flex-col items-center justify-center"
      >
        <div class="x absolute faq-background h-full w-full"></div>
        <div class="absolute faq-woman h-full w-full">
          <img
            src="./assets/illustration-box-desktop.svg"
            alt=""
            class="absolute w-56 faq-box"
          />
        </div>
        <img
          src="./assets/illustration-woman-online-mobile.svg"
          alt=""
          class="faq-woman-mobile absolute w-56 transform hidden md:hidden"
        />
      </div>
      <div
        class="w-full md:w-1/2 h-full flex flex-col justify-center overflow-hidden"
      >
        <div class="h-5/6 font-kumbh-sans ml-7">
          <h1 class="block text-soft-desaturated-blue font-bold text-4xl mb-7">
            FAQ
          </h1>
          <div class="faq overflow-y-scroll max-h-full">
            <label for="q1" class="faq-label"
              ><input
                type="radio"
                name="questions"
                id="q1"
                class="hidden-radio"
              /><span class="question"
                >How many team members can I invite?</span
              >
              <span class="hidden-answer overflow-y-auto">
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </span></label
            >
            <label for="q2" class="faq-label"
              ><input
                type="radio"
                name="questions"
                id="q2"
                class="hidden-radio"
              /><span class="question"
                >What is the maximum file upload size?</span
              >
              <span class="hidden-answer">
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </span></label
            >
            <label for="q3" class="faq-label"
              ><input
                type="radio"
                name="questions"
                id="q3"
                class="hidden-radio"
              /><span class="question">How do I reset my password?</span
              ><span class="hidden-answer">
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </span></label
            >
            <label for="q4" class="faq-label"
              ><input
                type="radio"
                name="questions"
                id="q4"
                class="hidden-radio"
              /><span class="question">Can I cancel my subscription?</span
              ><span class="hidden-answer">
                Yes! Send us a message and we’ll process your request no
                questions asked.
              </span></label
            >
            <label for="q5" class="faq-label"
              ><input
                type="radio"
                name="questions"
                id="q5"
                class="hidden-radio"
              /><span class="question">Do you provide additional support?</span
              ><span class="hidden-answer">
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours.
              </span></label
            >
          </div>
        </div>
      </div>
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
  .faq-woman-mobile {
    display: none;
  }
  .faq-box {
    top: 40%;
    right: 21.8rem;
    animation: wobble 4s infinite;
    animation-timing-function: ease-in-out;
  }
  @media (max-width: 768px) {
    .faq-background,
    .faq-woman,
    .faq-box {
      display: none;
    }
    .faq-woman-mobile {
      display: block;
    }
  }

  .faq-label {
    @apply border-b-2 border-light-grayish-blue w-10/12 block;
    padding-left: 3px;
  }

  .hidden-radio {
    opacity: 0;
    margin-right: -1rem;
    position: absolute;
  }
  .hidden-answer {
    display: block;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    max-height: 0;
    transition: max-height 0.1s linear;
    overflow-y: scroll;
    @apply text-dark-greyish-blue;
  }
  .faq {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  .hidden-answer::-webkit-scrollbar,
  .faq::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .question {
    @apply block my-2 text-dark-grey-blue;
  }

  .hidden-radio:checked ~ .hidden-answer {
    max-height: 30vh;
  }
  .hidden-radio:checked ~ .question {
    @apply text-soft-desaturated-blue font-bold;
  }
}
</style>
