import { component$ } from '@builder.io/qwik';
import { Headings } from '../reUsable/Headings';
import { SetsOfSkills } from './SetsOfSkills';

export const Skills = component$(() => {
    return (
      <div>
        <Headings heading="Skills" />
        <SetsOfSkills />
     
      </div>
    );
});