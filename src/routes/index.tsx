import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Blogs } from "~/components/blogs/Blogs";
import { Education } from "~/components/educationSection/Education";
import { Experience } from "~/components/experienceSection/Experience";
import { Introduction } from "~/components/intro/Introduction";
import { Skills } from "~/components/skills/Skills";
import { Works } from "~/components/works/Works";

export default component$(() => {
  return (
    <div>
      <Introduction />
      <Experience />
      <Education />
      <Skills />
      <Works />
      <Blogs/>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Tamjid Ahmed",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
