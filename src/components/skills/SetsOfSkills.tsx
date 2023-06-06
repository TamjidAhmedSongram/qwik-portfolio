import { component$ } from '@builder.io/qwik';

export const SetsOfSkills = component$(() => {
  const data = [
    {
      skill: "NextJS",
      image: "/asset/svg/nextjs.svg",
    },
    {
      skill: "NextJS",
      image: "/asset/svg/nextjs.svg",
    },
    {
      skill: "NextJS",
      image: "/asset/svg/nextjs.svg",
    },
    {
      skill: "NextJS",
      image: "/asset/svg/nextjs.svg",
    },
    {
      skill: "NextJS",
      image: "/asset/svg/nextjs.svg",
    },
    {
      skill: "NextJS",
      image: "/asset/svg/nextjs.svg",
    },
    {
      skill: "NextJS",
      image: "/asset/svg/nextjs.svg",
    },
    {
      skill: "NextJS",
      image: "/asset/svg/nextjs.svg",
    },
  ];
    return (
      <div class="grid grid-cols-3 place-items-center ">
        {data.map((skills, i) => {
          return (
            <div key={i} class="flex w-10 m-4 place-items-center gap-2">
              <img src={skills.image} alt="" />
              <span>{skills.skill}</span>
            </div>
          );
        })}
      </div>
    );
});