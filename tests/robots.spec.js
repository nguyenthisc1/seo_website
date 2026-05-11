import { expect, test } from '@playwright/test';

test('robots.txt should be a plain text file, not HTML', async ({ request }) => {
    const response = await request.get('/robots.txt');
    const body = await response.text();

    expect(body).not.toContain('<!doctype html>');
    expect(body).not.toContain('<html');

    expect(body).toContain('User-agent: *');
    expect(response.headers()['content-type']).toContain('text/plain');
});
