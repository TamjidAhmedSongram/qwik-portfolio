import { component$ } from "@builder.io/qwik";

export const AboutMe = component$(() => {
  const data = {
    aboutMe:
      "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus. ",
  };
  return (
    <div class="p-4">
      <h1 class="text-lg font-bold">About Me</h1>
      <p>{data.aboutMe}</p>
    </div>
  );
});
