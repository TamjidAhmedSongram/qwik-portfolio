import { component$ } from "@builder.io/qwik";
import { AboutMe } from "./AboutMe";
import { Details } from "./Details";
import { Profile } from "./Profile";
import { ProfileImage } from "./ProfileImage";

export const Introduction = component$(() => {
  return (
    <div class="max-w-6xl mx-auto">
      <Profile />
      <div class="grid grid-cols-[1fr_1fr_1fr] ">
        <AboutMe />
        <ProfileImage />
        <Details />
      </div>
    </div>
  );
});
