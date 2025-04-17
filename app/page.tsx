import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  console.log(user);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
