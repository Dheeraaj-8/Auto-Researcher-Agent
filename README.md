# AI Researcher Agent - Debugging Guide

## Common Issues and Solutions

### 1. No Papers Showing Up

**Symptoms:** Research starts but no papers are found or displayed.

**Possible Causes:**
- Missing or invalid API keys
- Network connectivity issues
- API rate limiting
- CORS issues in development

**Solutions:**
1. **Check Environment Variables:**
   - Create `.env.local` file in your project root
   - Add your OpenAI API key: `OPENAI_API_KEY=your_key_here`
   - Optionally add Semantic Scholar API key: `SEMANTIC_SCHOLAR_API_KEY=your_key_here`

2. **Verify API Keys:**
   - Test your OpenAI API key at https://platform.openai.com/playground
   - Ensure you have sufficient credits/quota

3. **Check Network:**
   - Ensure your development server can make external API calls
   - Check if you're behind a corporate firewall

### 2. API Route Issues

**Symptoms:** 404 errors or API routes not found.

**Solutions:**
1. **Verify File Structure:**
   \`\`\`
   app/
   ├── api/
   │   ├── search-papers/
   │   │   └── route.ts
   │   ├── analyze-papers/
   │   │   └── route.ts
   │   └── chat/
   │       └── route.ts
   └── page.tsx
   \`\`\`

2. **Check Next.js Version:**
   - Ensure you're using Next.js 13+ with App Router
   - API routes should be in `app/api/` not `pages/api/`

### 3. CORS Issues

**Symptoms:** Network errors in browser console.

**Solutions:**
1. **Development Server:**
   - Restart your development server: `npm run dev`
   - Clear browser cache and cookies

2. **Production Deployment:**
   - Ensure API routes are deployed correctly
   - Check Vercel/deployment logs for errors

### 4. OpenAI API Errors

**Symptoms:** Analysis fails or returns generic responses.

**Solutions:**
1. **Check API Quota:**
   - Visit https://platform.openai.com/usage
   - Ensure you have remaining credits

2. **Rate Limiting:**
   - The app includes fallback logic for rate limits
   - Wait a few minutes and try again

### 5. Debugging Steps

1. **Use the Debug Tab:**
   - The updated app includes a debug tab
   - Check for detailed error messages and API call logs

2. **Browser Developer Tools:**
   - Open Network tab to see API requests
   - Check Console for JavaScript errors

3. **Server Logs:**
   - Check your terminal/console for server-side errors
   - Look for API key validation messages

## Testing the Fix

1. **Create Environment File:**
   \`\`\`bash
   cp .env.local.example .env.local
   # Edit .env.local with your actual API keys
   \`\`\`

2. **Install Dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start Development Server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Test Research:**
   - Go to http://localhost:3000
   - Enter a simple research topic like "machine learning"
   - Check the Debug tab for detailed information

## Getting API Keys

### OpenAI API Key (Required)
1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. Add billing information if needed
4. Copy the key to your `.env.local` file

### Semantic Scholar API Key (Optional)
1. Go to https://www.semanticscholar.org/product/api
2. Sign up for an API key
3. This improves rate limits but the app works without it

## Still Having Issues?

If you're still experiencing problems:

1. Check the Debug tab in the application
2. Look at browser developer tools (F12)
3. Check your terminal for server errors
4. Verify your API keys are valid and have quota
5. Try a simple research topic first

The app includes comprehensive error handling and fallback mechanisms, so it should work even with limited API access.
