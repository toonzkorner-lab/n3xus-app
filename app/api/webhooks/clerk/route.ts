import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const payloadString = await req.text();
    const svixHeaders = {
      'svix-id': req.headers.get('svix-id') || '',
      'svix-timestamp': req.headers.get('svix-timestamp') || '',
      'svix-signature': req.headers.get('svix-signature') || '',
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

    let evt: WebhookEvent;

    try {
      evt = wh.verify(payloadString, svixHeaders) as WebhookEvent;
    } catch (err: any) {
      console.error('Webhook verification failed:', err.message);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    console.log(`✅ Clerk Webhook received: ${evt.type}`);

    // TODO: Add user sync logic here later if needed

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}