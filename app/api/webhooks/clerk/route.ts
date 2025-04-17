// app/api/webhooks/clerk/route.ts
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { prisma } from "@/lib/prisma";
import { UserJSON } from "@clerk/nextjs/server";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  const payload = await req.text();
  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id")!;
  const svix_timestamp = headerPayload.get("svix-timestamp")!;
  const svix_signature = headerPayload.get("svix-signature")!;

  const wh = new Webhook(webhookSecret);

  let evt;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { type, data } = evt as any;

  if (type === "user.created") {
    const { id, username, email_addresses, image_url, first_name, last_name } =
      data as UserJSON;

    try {
      await prisma.user.create({
        data: {
          id,
          username: username as string, // Username should always exist
          firstName: first_name ?? "",
          lastName: last_name ?? "",
          email: email_addresses[0].email_address,
          image: image_url ?? "",
          bio: "", // Set the bio to an empty string initially
        },
      });
    } catch (err) {
      console.error("User creation error:", err);
      return new NextResponse("Error creating user", { status: 500 });
    }
  }

  return new NextResponse("OK", { status: 200 });
}
