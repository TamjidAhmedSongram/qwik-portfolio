import { component$ } from "@builder.io/qwik";

export const Details = component$(() => {
  const data = {
    name: "Tamjid Ahmed",
    age: 27,
    location: "Shahid Ajij Sarak , Nadda , Vatara , Dhaka",
  };
  return (
    <div class="p-4">
      <h1 class="text-lg font-bold">Details</h1>
      <div>
        <h4 class="font-bold">Name:</h4>
        <p>{data.name}</p>
      </div>
      <div>
        <h4 class="font-bold">Age:</h4>
        <p>{data.age} years</p>
      </div>
      <div>
        <h4 class="font-bold">Address:</h4>
        <p>{data.location}</p>
      </div>
    </div>
  );
});
