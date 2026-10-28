import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  company: z.string().trim().max(100).optional().or(z.literal('')),
  projectType: z.string().min(1),
  budget: z.string().optional().or(z.literal('')),
  timeline: z.string().optional().or(z.literal('')),
  description: z.string().trim().min(15).max(3000),
  honeypot: z.string().optional(), // Spam honeypot trap
});

// Simple in-memory rate limiter per IP: max 5 requests per 10 minutes
const ipRateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipRateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    ipRateLimit.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) {
    return false;
  }

  entry.count += 1;
  return true;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '1mb' }));

  // API Health Check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  });

  // Contact Inquiries API
  app.post('/api/contact', async (req: Request, res: Response) => {
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

    if (!checkRateLimit(clientIp)) {
      res.status(429).json({
        success: false,
        error: 'Too many requests. Please wait a few minutes before submitting again or email directly.',
      });
      return;
    }

    const parseResult = contactSchema.safeParse(req.body);

    if (!parseResult.success) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: parseResult.error.flatten().fieldErrors,
      });
      return;
    }

    const data = parseResult.data;

    // Honeypot check for spam bots
    if (data.honeypot && data.honeypot.trim().length > 0) {
      // Silently discard spam submission
      res.json({
        success: true,
        message: 'Your inquiry has been received.',
      });
      return;
    }

    // Process valid inquiry
    const inquiryRecord = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      receivedAt: new Date().toISOString(),
      name: data.name,
      email: data.email,
      company: data.company || 'N/A',
      projectType: data.projectType,
      budget: data.budget || 'Flexible',
      timeline: data.timeline || 'Flexible',
      descriptionLength: data.description.length,
    };

    console.log('[NEW INQUIRY RECEIVED]:', JSON.stringify(inquiryRecord, null, 2));

    // Return confirmed delivery status
    res.json({
      success: true,
      inquiryId: inquiryRecord.id,
      message: 'Thank you for your project inquiry! I will review your requirements and respond within 24 hours.',
    });
  });

  // Sitemap XML route for SEO
  app.get('/sitemap.xml', (_req: Request, res: Response) => {
    const baseUrl = process.env.APP_URL || 'https://muhammadazeem.dev';
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/work/aether-observability</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/work/apiforge-runtime</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/work/quantum-headless-commerce</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/work/pulse-distributed-cache</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Robots.txt route for SEO
  app.get('/robots.txt', (_req: Request, res: Response) => {
    const baseUrl = process.env.APP_URL || 'https://muhammadazeem.dev';
    res.header('Content-Type', 'text/plain');
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  // Integrate Vite for SPA development or serve static in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
