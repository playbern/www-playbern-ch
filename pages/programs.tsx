import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Programs } from "../components/programs";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout";
import { InferGetStaticPropsType } from "next";

export default function ProgramsPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const programs = props.data.programConnection.edges;

  return (
    <Layout>
      <Section className="flex-1">
        <Container size="large" width="small">
          <Programs data={programs} />
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.pageQuery();
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type ProgramType = InferGetStaticPropsType<
  typeof getStaticProps
>["data"]["programConnection"]["edges"][number];
