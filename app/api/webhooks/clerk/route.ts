import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const payloadString = await req.text();
    const headerPayload = req.headers;

    const svix_id = headerPayload.get("svix-id") ?? "";
    const svix_timestamp = headerPayload.get("svix-timestamp") ?? "";
    const svix_signature = headerPayload.get("svix-signature") ?? "";

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "");

    let evt: WebhookEvent;

    try {
      evt = wh.verify(payloadString, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Error verifying webhook", { status: 400 });
    }

    console.log(`Received Clerk webhook: ${evt.type}`);
    // You can add user creation/sync logic here later

    return new Response("Webhook received successfully", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}