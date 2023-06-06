import { component$ } from "@builder.io/qwik";

export const EduDetails = component$(() => {
  return (
    <div class="my-4 grid grid-cols-6">
      <div class=" col-span-2 grid place-items-center">
        <h2>School</h2>
      </div>
      <div class=" col-span-4 ">
        <h3>BE Computer Systems Engineering</h3>
        <p>
          <span>Hamdard University</span> • Feb 2019
        </p>
        <p>
          Describe work, special projects, notable achievements, what
          technologies you have been working with, and anything else that would
          be useful for an employer to know.
        </p>
      </div>
    </div>
  );
});
