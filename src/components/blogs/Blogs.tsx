import { component$ } from "@builder.io/qwik";
import { Headings } from "../reUsable/Headings";
import BlogCards from "./BlogsCard";

export const Blogs = component$(() => {
  return (
    <div class="my-8 container">
      <Headings heading="Blogs" />
      <p class="text-right pr-[5%] mb-2">
        <a class="link link-neutral ">See More</a>
      </p>
      <BlogCards />
    </div>
  );
});
