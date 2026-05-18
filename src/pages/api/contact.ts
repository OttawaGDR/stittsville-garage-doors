import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'stittsvillegd@gmail.com';
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'Stittsville Garage Doors <onboarding@resend.dev>';

const BEST_TIME_LABEL: Record<string, string> = {
  morning: 'Morning (7 AM – 12 PM)',
  afternoon: 'Afternoon (12 PM – 5 PM)',
  evening: 'Evening (5 PM – 10 PM)',
  asap: 'As soon as possible',
};

function wantsJson(request: Request): boolean {
  return (request.headers.get('accept') ?? '').includes('application/json');
}

function jsonResponse(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const company = String(form.get('company') ?? '').trim();

  if (company) {
    if (wantsJson(request)) return jsonResponse({ ok: true }, 200);
    return redirect('/contact/?sent=1', 302);
  }

  const name = String(form.get('name') ?? '').trim();
  const phone = String(form.get('phone') ?? '').trim();
  const address = String(form.get('address') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();
  const bestTime = String(form.get('best-time') ?? '').trim();

  if (!name || !phone || !address || !message) {
    if (wantsJson(request)) return jsonResponse({ error: 'Missing required fields' }, 400);
    return redirect('/contact/?error=missing', 302);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    if (wantsJson(request)) return jsonResponse({ error: 'Email service is not configured' }, 503);
    return redirect('/contact/?error=config', 302);
  }

  const subject = `Quote request: ${name} — ${address}`;
  const text = [
    'New quote / callback request from stittsvillegaragedoors.ca',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Address: ${address}`,
    `Best time to call: ${BEST_TIME_LABEL[bestTime] ?? (bestTime || 'Not specified')}`,
    '',
    'What is wrong:',
    message,
    '',
    `Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}`,
  ].join('\n');

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      if (wantsJson(request)) return jsonResponse({ error: 'Failed to send email' }, 502);
      return redirect('/contact/?error=send', 302);
    }

    if (wantsJson(request)) return jsonResponse({ ok: true }, 200);
    return redirect('/contact/?sent=1', 302);
  } catch (err) {
    console.error('Contact handler error:', err);
    if (wantsJson(request)) return jsonResponse({ error: 'Unexpected error' }, 500);
    return redirect('/contact/?error=send', 302);
  }
};
