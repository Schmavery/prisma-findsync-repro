import { PrismaClient } from "../prisma/prisma-client";

export async function getServerSideProps() {
  const db = new PrismaClient();
  return { props: { test: "Repro" } };
}

export default function Page({ test }) {
  return <div>Hello {test}</div>;
}
