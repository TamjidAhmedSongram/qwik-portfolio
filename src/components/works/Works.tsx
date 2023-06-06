import { component$ } from '@builder.io/qwik';
import { Headings } from '../reUsable/Headings';
import WorksCards from './WorksCards';

export const Works = component$(() => {
    return (
      <div class="my-8 container">
        <Headings heading="Projects" />
        <p class="text-right pr-[5%] mb-2">
          <a class="link link-neutral ">See More</a>
        </p>
        <WorksCards />
      </div>
    );
});