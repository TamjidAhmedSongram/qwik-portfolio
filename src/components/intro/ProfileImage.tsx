import { component$ } from '@builder.io/qwik';

export const ProfileImage = component$(() => {
  return (
    <div class="grid place-items-center	">
      <div class="avatar">
        <div class="max-w-[200px] rounded-full">
          <img src="/demoimage.webp" />
        </div>
      </div>
    </div>
  );
});