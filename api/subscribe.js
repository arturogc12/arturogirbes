const mailerLiteApiUrl = 'https://connect.mailerlite.com/api/subscribers';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Método no permitido.' });
  }

  const { email } = request.body ?? {};

  if (!process.env.MAILERLITE_API_TOKEN) {
    return response.status(500).json({ error: 'Falta configurar MAILERLITE_API_TOKEN en Vercel.' });
  }

  if (typeof email !== 'string' || !email.trim()) {
    return response.status(400).json({ error: 'Introduce un email válido.' });
  }

  const groupIds = (process.env.MAILERLITE_GROUP_IDS || process.env.MAILERLITE_GROUP_ID || '')
    .split(',')
    .map((groupId) => groupId.trim())
    .filter(Boolean);

  const subscriber = { email: email.trim() };
  if (groupIds.length > 0) subscriber.groups = groupIds;

  try {
    const mailerLiteResponse = await fetch(mailerLiteApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MAILERLITE_API_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(subscriber),
    });

    if (!mailerLiteResponse.ok) {
      console.error('MailerLite subscription failed:', mailerLiteResponse.status, await mailerLiteResponse.text());
      return response.status(502).json({ error: 'MailerLite no ha podido registrar el email.' });
    }

    return response.status(201).json({ ok: true });
  } catch (error) {
    console.error('MailerLite request failed:', error);
    return response.status(502).json({ error: 'No se pudo conectar con MailerLite.' });
  }
}