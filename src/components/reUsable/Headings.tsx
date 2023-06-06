import { component$ } from '@builder.io/qwik';
interface MyProps {
    heading:string
}
export const Headings = component$((props:MyProps) => {
  return (
    <div>
      <h1 class="text-center my-6">{props.heading}</h1>
    </div>
  );
});