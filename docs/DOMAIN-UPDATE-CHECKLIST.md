# ✅ Domain Updated to harshwardhansathe.vercel.app

## Files Updated

All references to your domain have been updated to `harshwardhansathe.vercel.app`:

### Core Configuration Files:
1. ✅ `src/lib/constants.ts` - Site URL constant
2. ✅ `src/app/layout.tsx` - Metadata base URL
3. ✅ `src/app/sitemap.ts` - Dynamic sitemap base URL
4. ✅ `.env` - Environment variables (local)
5. ✅ `.env.example` - Example environment variables

### SEO & Public Files:
6. ✅ `public/robots.txt` - Sitemap URL
7. ✅ `public/sitemap.xml` - All page URLs
8. ✅ `src/components/sections/About/About.tsx` - Schema.org metadata

### Email Templates:
9. ✅ `src/app/api/send-email/route.ts` - Auto-reply email template

---

## Environment Variables to Update in Vercel

After deployment, update these in Vercel Dashboard:

### 1. NEXT_PUBLIC_SITE_URL
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://harshwardhansathe.vercel.app
Environment: Production, Preview, Development
```

### 2. NEXT_PUBLIC_APP_URL
```
Name: NEXT_PUBLIC_APP_URL
Value: https://harshwardhansathe.vercel.app
Environment: Production, Preview, Development
```

### 3. SMTP_FROM (Optional - for professional emails)
```
Name: SMTP_FROM
Value: noreply@harshwardhansathe.vercel.app
Environment: Production, Preview, Development
```

---

## DNS Configuration for harshwardhansathe.vercel.app

### Step 1: Add Domain in Vercel

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Domains**
3. Add domain: `harshwardhansathe.vercel.app`
4. Also add: `www.harshwardhansathe.vercel.app`

### Step 2: Configure DNS Records

Go to your domain registrar (where you bought harshwardhansathe.vercel.app):

#### A Record (Root Domain):
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600
```

#### CNAME Record (WWW):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 3: Wait for DNS Propagation

- Typical time: 10 minutes to 2 hours
- Check status: https://dnschecker.org
- Enter: `harshwardhansathe.vercel.app`

### Step 4: Verify in Vercel

1. Go to Settings → Domains
2. Wait for green checkmark (Valid Configuration)
3. SSL certificate will be auto-provisioned

---

## After Domain is Active

### 1. Update Environment Variables

In Vercel Dashboard:
- Settings → Environment Variables
- Update `NEXT_PUBLIC_SITE_URL` to `https://harshwardhansathe.vercel.app`
- Update `NEXT_PUBLIC_APP_URL` to `https://harshwardhansathe.vercel.app`

### 2. Redeploy

- Go to Deployments tab
- Click "Redeploy" on latest deployment
- Wait 2-3 minutes

### 3. Test Your Domain

Visit these URLs to verify:
- ✅ https://harshwardhansathe.vercel.app (should load portfolio)
- ✅ https://www.harshwardhansathe.vercel.app (should redirect or load)
- ✅ http://harshwardhansathe.vercel.app (should redirect to HTTPS)
- ✅ https://harshwardhansathe.vercel.app/sitemap.xml (should show sitemap)
- ✅ https://harshwardhansathe.vercel.app/robots.txt (should show robots.txt)

### 4. Submit to Search Engines

**Google Search Console:**
1. Add property: `https://harshwardhansathe.vercel.app`
2. Verify ownership
3. Submit sitemap: `https://harshwardhansathe.vercel.app/sitemap.xml`

**Bing Webmaster Tools:**
1. Add site: `https://harshwardhansathe.vercel.app`
2. Verify ownership
3. Submit sitemap

### 5. Update Your Profiles

- ✅ GitHub profile → Website
- ✅ LinkedIn → Contact Info → Website
- ✅ Resume → Portfolio URL
- ✅ Email signature

---

## Email Configuration (Optional)

### Set Up Email Forwarding

Many registrars offer free email forwarding:

**Forward these to your Gmail:**
- `contact@harshwardhansathe.vercel.app` → harshwardhansathe1@gmail.com
- `hello@harshwardhansathe.vercel.app` → harshwardhansathe1@gmail.com
- `noreply@harshwardhansathe.vercel.app` → harshwardhansathe1@gmail.com

This makes your contact form emails look more professional!

---

## What Changed in Email Templates

The auto-reply email now includes:
- Portfolio link: `https://harshwardhansathe.vercel.app`
- Professional "View Portfolio" button
- Consistent branding with your domain

---

## Testing Checklist

After domain is active and redeployed:

- [ ] Visit https://harshwardhansathe.vercel.app
- [ ] Check HTTPS is working (padlock icon)
- [ ] Test contact form submission
- [ ] Verify auto-reply email has correct domain
- [ ] Check sitemap.xml loads
- [ ] Check robots.txt loads
- [ ] Test on mobile device
- [ ] Verify visitor counter works
- [ ] Check all navigation links work
- [ ] Test in different browsers

---

## Troubleshooting

### Domain Not Loading?

1. Check DNS propagation: https://dnschecker.org
2. Wait 24-48 hours for full propagation
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try incognito/private mode

### SSL Certificate Not Working?

1. Wait 5-10 minutes after DNS validation
2. Check Vercel domain status (should be green)
3. Force HTTPS in browser
4. Contact Vercel support if still failing after 1 hour

### Old Domain Still Showing?

1. Clear browser cache
2. Update environment variables in Vercel
3. Redeploy the project
4. Wait for deployment to complete

---

## Summary

✅ **Domain**: harshwardhansathe.vercel.app
✅ **Updated**: 9 files across the codebase
✅ **Email**: Auto-reply template updated
✅ **SEO**: Sitemap and robots.txt updated
✅ **Metadata**: Schema.org and Open Graph updated

**Next Steps:**
1. Configure DNS records at your registrar
2. Add domain in Vercel
3. Update environment variables
4. Redeploy
5. Test everything

Your portfolio will be live at https://harshwardhansathe.vercel.app! 🚀
