# Microphone Permissions Fix for Chatbot

## The Problem
The chatbot iframe requires microphone access, but browsers require the parent page to explicitly grant this permission via the `Permissions-Policy` HTTP header. This header **cannot** be set via HTML meta tags - it must be an actual HTTP response header.

## What I've Done

### 1. Dev Server Configuration
- Modified `src/plugins/iframe-permissions-plugin.js` to configure the webpack dev server to add the required headers during local development
- This will add the `Permissions-Policy` header to all responses from `npm run start`

### 2. Iframe Permission Injection
- The plugin also intercepts iframe creation and automatically adds the `allow` attribute with microphone permissions
- Uses multiple detection methods (createElement interception, MutationObserver, periodic checks)

### 3. Production Deployment Files
- **Netlify**: `static/_headers` file will automatically add headers
- **Vercel**: `vercel.json` file will automatically add headers  
- **GitHub Pages**: Unfortunately, GitHub Pages doesn't support custom HTTP headers

## How to Test

### Local Development
1. **Stop the dev server** if running
2. **Clear the cache**:
   ```bash
   rm -rf .docusaurus build
   ```
3. **Start the dev server**:
   ```bash
   npm run start
   ```
4. **Open browser console** - you should see logs like:
   - "Intercepted iframe creation"
   - "Updated iframe permissions"
5. **Test microphone** - the chatbot should now be able to request access

### Check if Headers are Present
Open browser DevTools → Network tab → Click on the main document → Response Headers → Look for:
```
Permissions-Policy: microphone=*, camera=*, autoplay=*, display-capture=*, geolocation=*
```

## Production Deployment

### ✅ Recommended: Use Netlify or Vercel
These platforms support custom headers and will automatically use the config files I've created:
- Netlify uses `static/_headers`
- Vercel uses `vercel.json`

### ❌ GitHub Pages Problem
GitHub Pages **does not support custom HTTP headers**. If you're deploying to GitHub Pages, the microphone permissions **will not work** in production, even though they work in development.

**Solutions for GitHub Pages:**
1. **Switch to Netlify** (recommended) - Free tier available, supports custom headers
2. **Switch to Vercel** (recommended) - Free tier available, supports custom headers
3. **Use Cloudflare Pages** - Free tier available, supports custom headers via `_headers` file
4. **Contact the chatbot provider** to see if they can fix their iframe to request permissions differently

## Deployment Instructions

### Option A: Deploy to Netlify
1. Create account at netlify.com
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `build`
5. Netlify will automatically use the `static/_headers` file

### Option B: Deploy to Vercel
1. Create account at vercel.com
2. Import your GitHub repository
3. Framework: Docusaurus
4. Vercel will automatically use the `vercel.json` file

### Option C: Deploy to Cloudflare Pages
1. Create account at cloudflare.com
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Output directory: `build`
5. Cloudflare will use the `static/_headers` file

## Files Modified
- `src/plugins/iframe-permissions-plugin.js` - Main plugin for permissions
- `src/theme/Layout/index.js` - Chatbot script loader
- `docusaurus.config.js` - Added plugin configuration
- `static/_headers` - Netlify/Cloudflare headers
- `static/sw-permissions.js` - Service worker (experimental)
- `vercel.json` - Vercel headers

## Testing Checklist
- [ ] Dev server adds Permissions-Policy header (check in Network tab)
- [ ] Console shows "Intercepted iframe creation" messages
- [ ] Console shows "Updated iframe permissions" messages  
- [ ] Iframe has `allow` attribute with microphone permissions (inspect element)
- [ ] Microphone permission prompt appears when requested
- [ ] No "permissions-policy-violation" errors in console

## If It Still Doesn't Work
1. Check the browser console for the exact error message
2. Inspect the chatbot iframe element and verify the `allow` attribute is present
3. Check if the chatbot iframe src is from a different domain (CORS issues)
4. Try in a different browser (Chrome, Firefox, Safari)
5. Contact the chatbot provider (testing.datagol.ai) about iframe microphone permissions

