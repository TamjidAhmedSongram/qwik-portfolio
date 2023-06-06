import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/Header";
import { Footer } from "~/components/footer/Footer";
export default component$(() => {
  return (
    <div class="min-h-screen grid grid-rows-[auto_1fr_auto] " data-theme="light">
      <Header />
      <main class="container mx-auto">
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </div>
  );
});
