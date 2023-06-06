import { component$ } from '@builder.io/qwik';

export const Profile = component$(() => {
    const occupation= "Front-End Developer"
    return (
      <div class="my-10">
        <h1 class=" text-center">Profile</h1>
        <h2 class=" text-center">
          I'm a creative {occupation}
        </h2>
      </div>
    );
});