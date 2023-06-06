import { component$ } from "@builder.io/qwik";
import { ExpHead } from "./ExpHead";
import { Stepper } from "./Stepper";

export const Experience = component$(() => {
    return (
      <div class="max-w-6xl mx-auto ">
        <ExpHead/>
        <Stepper/>
      </div>
    );
});
