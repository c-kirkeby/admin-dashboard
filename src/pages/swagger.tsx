import { GetStaticProps, InferGetStaticPropsType } from "next";
import { swagger } from "src/lib/config";
import { createSwaggerSpec } from "next-swagger-doc";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDoc = ({ spec }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <SwaggerUI spec={spec} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const spec: Record<string, any> = createSwaggerSpec(swagger);
  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
