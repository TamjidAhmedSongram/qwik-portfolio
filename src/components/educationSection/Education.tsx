import { component$ } from '@builder.io/qwik';
import { EduDetails } from './EduDetails';
import { Headings } from "../reUsable/Headings";


export const Education = component$(() => {
    return (
      <div class="max-w-6xl mx-auto ">
        <Headings heading="Education" />
        <EduDetails />
        <EduDetails />
        <EduDetails />
      </div>
    );
});