import { Hero } from "../components/blocks/hero";
import { Layout } from "../components/layout";

export default function FourOhFour() {
  return (
    <Layout>
      <Hero
        data={{
          color: "default",
          headline: "404 – Seite nicht gefunden",
          text: "Huch! Anscheinend gibt es hier nichts, wie peinlich.",
          actions: [
            {
              label: "Nach Hause gehen",
              type: "button",
              icon: true,
              link: "/",
            },
          ],
        }}
      />
    </Layout>
  );
}
