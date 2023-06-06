import { component$ } from "@builder.io/qwik";

export const Stepper = component$(() => {
  return (
    <div>
      <ul class="steps steps-horizontal w-full">
        <li class="step step-primary">
          <div class="min-w-[200px]">
            <h3>React Developer</h3>
            <p class="text-sm">
              Company name - <span class=" font-semibold">Full Time</span>
            </p>
            <p class="text-sm">Apr 2022 - Jun 2022 · 3 mos </p>
            <p class="text-sm"> Dhaka, Bangladesh </p>
          </div>
        </li>
        <li class="step step-primary">
          <div class="min-w-[200px]">
            <h3>React Developer</h3>
            <p class="text-sm">
              Company name - <span class=" font-semibold">Full Time</span>
            </p>
            <p class="text-sm">Apr 2022 - Jun 2022 · 3 mos </p>
            <p class="text-sm"> Dhaka, Bangladesh </p>
          </div>
        </li>
        <li class="step step-primary">
          <div class="min-w-[200px]">
            <h3>React Developer</h3>
            <p class="text-sm">
              Company name - <span class=" font-semibold">Full Time</span>
            </p>
            <p class="text-sm">Apr 2022 - Jun 2022 · 3 mos </p>
            <p class="text-sm"> Dhaka, Bangladesh </p>
          </div>
        </li>
      </ul>
    </div>
  );
});

