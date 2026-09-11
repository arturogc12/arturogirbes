import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT || 3001;
const mailerLiteApiUrl = 'https://connect.mailerlite.com/api/subscribers';

app.use(express.json());

app.post('/api/subscribe', async (request, response) => {
  const { email } = request.body ?? {};

  if (!process.env.MAILERLITE_API_TOKEN) {
    return response.status(500).json({ error: 'Falta configurar MAILERLITE_API_TOKEN.' });
  }

  if (typeof email !== 'string' || !email.trim()) {
    return response.status(400).json({ error: 'Introduce un email válido.' });
  }

  const subscriber = { email: email.trim() };
  const groupIds = (process.env.MAILERLITE_GROUP_IDS || process.env.MAILERLITE_GROUP_ID || '')
    .split(',')
    .map((groupId) => groupId.trim())
    .filter(Boolean);

  if (groupIds.length > 0) {
    subscriber.groups = groupIds;
  }

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
      const details = await mailerLiteResponse.text();
      console.error('MailerLite subscription failed:', mailerLiteResponse.status, details);
      return response.status(502).json({ error: 'MailerLite no ha podido registrar el email.' });
    }

    return response.status(201).json({ ok: true });
  } catch (error) {
    console.error('MailerLite request failed:', error);
    return response.status(502).json({ error: 'No se pudo conectar con MailerLite.' });
  }
});

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.join(currentDirectory, 'dist');
app.use(express.static(distDirectory));
app.get('*', (_request, response) => response.sendFile(path.join(distDirectory, 'index.html')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});