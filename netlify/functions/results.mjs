import { getStore } from '@netlify/blobs';

const store = getStore('northstar-assessment-results');

export default async (request) => {
  const body = request.method === 'POST' ? await request.json() : null;

  if (request.method === 'POST' && body?.type === 'login') {
    if (!process.env.ADMIN_PASSWORD || body.password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Invalid password' }, { status: 401 });
    }
    return Response.json({ authenticated: true });
  }

  if (request.method === 'POST' && body?.type === 'submission' && body.result) {
    await store.setJSON(body.result.id, body.result);
    return Response.json({ saved: true });
  }

  if (request.method === 'POST' && body?.type === 'delete') {
    if (request.headers.get('x-admin-password') !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (!body.id || typeof body.id !== 'string') {
      return Response.json({ error: 'A result ID is required' }, { status: 400 });
    }
    await store.delete(body.id);
    return Response.json({ deleted: true });
  }

  if (request.method === 'GET') {
    if (request.headers.get('x-admin-password') !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const listed = await store.list();
    const results = await Promise.all(listed.blobs.map(({ key }) => store.get(key, { type: 'json' })));
    return Response.json(results.filter(Boolean).sort((left, right) => left.submittedAt.localeCompare(right.submittedAt)));
  }

  return Response.json({ error: 'Unsupported request' }, { status: 400 });
};