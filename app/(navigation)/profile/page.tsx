"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-sm rounded-lg border p-6 text-center">
        <Image
          src={session?.user?.image ?? "/avatar.png"}
          alt={session?.user?.name ?? "User"}
          className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
        />

        <h1 className="text-2xl font-bold">{session?.user?.name}</h1>

        <p className="mt-2 text-muted-foreground">{session?.user?.email}</p>
      </div>
    </main>
  );
}
