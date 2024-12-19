import { getUsers } from "../db/index";
import { SignedIn } from "@clerk/nextjs";

export default async function Home() {

const users = await getUsers();

return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <SignedIn>
    </SignedIn>
    {users.map((user) => (
      <div key={user.id} className="flex items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.id}</p>
        </div>
      </div>
    ))}
  </div>
);
}
