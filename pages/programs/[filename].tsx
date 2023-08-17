import { Program } from "../../components/programs/program";
import { client } from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../../components/layout";
import { InferGetStaticPropsType } from "next";

// Use the props returned by get static props
export default function ProgramPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  if (data && data.program) {
    return (
      <Layout rawData={data} data={data.global}>
        <Program {...data.program} />
      </Layout>
    );
  }
  return (
    <Layout>
      <div>No data</div>;
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.programQuery({
    relativePath: `${params.filename}.mdx`,
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  const programListData = await client.queries.programConnection();
  return {
    paths: programListData.data.programConnection.edges.map((program) => ({
      params: { filename: program.node._sys.filename },
    })),
    fallback: "blocking",
  };
};

export type ProgramType = InferGetStaticPropsType<
  typeof getStaticProps
>["data"]["program"];
