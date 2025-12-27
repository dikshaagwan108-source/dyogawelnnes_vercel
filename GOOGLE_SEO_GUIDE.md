# D'YOGA Website - Google Search Visibility Guide

## 📋 Overview
This guide will help you get your D'YOGA website to appear in Google search results when people search for terms like "corporate yoga Pune", "employee wellness", or "D'YOGA".

---

## ✅ What I've Already Done For You

1. **Created sitemap.xml** - Helps Google discover all your pages
2. **Created robots.txt** - Tells Google it can crawl your site
3. **Added SEO Meta Tags** - Improved your page titles, descriptions, and keywords
4. **Added Structured Data** - Helps Google understand your business details
5. **Added Open Graph Tags** - Makes your site look good when shared on social media

---

## 🚀 Steps You Need to Complete

### **STEP 1: Update Your Domain in Files**

Before deploying, replace `https://dyogawellness.com/` with your actual domain in these files:
- `public/sitemap.xml` (line 4, 9, 14, 19, 24)
- `public/robots.txt` (line 3)
- `index.html` (lines with canonical URL and Open Graph URLs)

### **STEP 2: Deploy Your Updated Website**

Deploy the updated code to your hosting (Vercel/Firebase/etc.):

```bash
# If using Vercel
npm run build
vercel --prod

# If using Firebase
npm run build
firebase deploy
```

### **STEP 3: Set Up Google Search Console** (MOST IMPORTANT!)

1. **Go to**: [https://search.google.com/search-console](https://search.google.com/search-console)

2. **Sign in** with your Google account (diksha.agwan@dyogawellness.com)

3. **Add Your Property**:
   - Click "Add Property"
   - Choose "URL prefix"
   - Enter your full website URL (e.g., `https://yourdomain.com`)

4. **Verify Ownership** (Choose ONE method):
   
   **Method A - HTML File Upload** (Easiest):
   - Download the verification file Google gives you
   - Upload it to your `public` folder
   - Redeploy your site
   - Click "Verify" in Search Console

   **Method B - HTML Meta Tag**:
   - Copy the meta tag Google provides
   - Add it to `index.html` in the `<head>` section
   - Redeploy your site
   - Click "Verify" in Search Console

5. **Submit Your Sitemap**:
   - In Search Console, go to "Sitemaps" (left sidebar)
   - Enter: `sitemap.xml`
   - Click "Submit"

### **STEP 4: Request Indexing**

1. In Google Search Console, go to "URL Inspection" (top search bar)
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for important pages:
   - Your homepage
   - Contact page
   - Blog section

### **STEP 5: Create Google Business Profile** (For Local SEO)

1. **Go to**: [https://www.google.com/business](https://www.google.com/business)
2. **Create a Business Profile** for D'YOGA Wellness
3. **Add Details**:
   - Business name: D'YOGA Wellness
   - Category: Yoga Studio / Wellness Program
   - Location: Wakad, Pune
   - Phone: +91-7558709730
   - Website: Your domain
   - Hours: Your business hours
4. **Add Photos**: Logo, office photos, yoga session photos
5. **Verify** your business (Google will send a postcard or call)

---

## ⏱️ Timeline: When Will My Site Appear on Google?

- **Initial Indexing**: 1-7 days after submitting to Search Console
- **Ranking for Keywords**: 2-4 weeks (depends on competition)
- **Full SEO Results**: 3-6 months for optimal ranking

---

## 🎯 Keywords Your Site is Optimized For

Your website is now optimized to appear when people search for:
- "corporate yoga Pune"
- "employee wellness programs"
- "workplace yoga instructor"
- "corporate wellness Pune"
- "office yoga Wakad"
- "D'YOGA"
- "Diksha Agwan yoga"
- "team building yoga"
- "stress management corporate"

---

## 📈 How to Check If Your Site is Indexed

1. **Google Search**: Type `site:yourdomain.com` in Google
   - If you see your site, it's indexed!
   - If not, wait a few days after submitting to Search Console

2. **Google Search Console**: Check "Coverage" report
   - Shows which pages are indexed
   - Shows any errors

---

## 🔧 Additional SEO Tips

### **1. Create Quality Content**
- Add blog posts about corporate wellness
- Write about yoga benefits for employees
- Share success stories/testimonials

### **2. Get Backlinks**
- List your business on:
  - Justdial
  - Sulekha
  - IndiaMART
  - LinkedIn Company Page
- Ask clients to link to your site
- Guest post on wellness blogs

### **3. Social Media**
- Share your website on LinkedIn, Facebook, Instagram
- Use hashtags: #CorporateYoga #EmployeeWellness #PuneYoga
- Each share helps Google find your site

### **4. Local Directories**
- Add your business to:
  - Google Business Profile (most important!)
  - Bing Places
  - Apple Maps
  - Facebook Business

### **5. Regular Updates**
- Update your blog section monthly
- Add new testimonials
- Keep content fresh

---

## 📞 Need Help?

If you encounter any issues:
1. Check Google Search Console for errors
2. Verify your sitemap is accessible: `yourdomain.com/sitemap.xml`
3. Verify robots.txt is accessible: `yourdomain.com/robots.txt`
4. Wait at least 7 days before worrying - indexing takes time!

---

## ✨ Quick Checklist

- [ ] Replace domain URLs in sitemap.xml, robots.txt, and index.html
- [ ] Deploy updated website
- [ ] Set up Google Search Console
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Request indexing for main pages
- [ ] Create Google Business Profile
- [ ] Share website on social media
- [ ] Add to local directories
- [ ] Wait 7-14 days and check `site:yourdomain.com` on Google

---

**Good luck! Your website is now SEO-ready and will start appearing on Google soon! 🚀**
