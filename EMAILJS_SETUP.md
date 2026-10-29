# EmailJS Integration Setup Guide

## Overview
The contact form on Bioaradhya website is integrated with EmailJS to send two emails:
1. **Owner Notification** - Sent to contact@bioaradhya.com
2. **Customer Confirmation** - Auto-reply sent to the customer

## Required Configuration

You need to update the following values in `src/App.tsx` (around line 419):

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_OWNER_TEMPLATE_ID = 'YOUR_OWNER_TEMPLATE_ID';
const EMAILJS_CUSTOMER_TEMPLATE_ID = 'YOUR_CUSTOMER_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

### How to Get These Values

1. **Login to EmailJS Dashboard**: https://dashboard.emailjs.com/

2. **Service ID**:
   - Go to "Email Services" section
   - Find your service (e.g., Gmail, Outlook, etc.)
   - Copy the Service ID (e.g., `service_abc123`)

3. **Template IDs**:
   - Go to "Email Templates" section
   - Find your "Owner Notification" template
   - Copy its Template ID → Replace `YOUR_OWNER_TEMPLATE_ID`
   - Find your "Customer Confirmation" template
   - Copy its Template ID → Replace `YOUR_CUSTOMER_TEMPLATE_ID`

4. **Public Key**:
   - Go to "Account" → "General"
   - Find "Public Key" (15-20 characters)
   - Copy it → Replace `YOUR_PUBLIC_KEY`

## Template Variables

Both templates should use these variables:

- `{{name}}` - Customer's full name
- `{{email}}` - Customer's email address
- `{{phone}}` - Customer's phone number
- `{{topic}}` - Selected topic (General enquiry, My order, Product guidance, or Doctor consultation)
- `{{message}}` - Customer's message
- `{{date}}` - Formatted date and time (e.g., "29 October, 2026 at 02:30 PM")
- `{{year}}` - Current year (for footer copyright)

## Template Subjects

Based on your templates:

**Owner Template**:
- Subject: `New Customer Inquiry — {{name}}`

**Customer Template**:
- Subject: `Thank You for Contacting Bioaradhya, {{name}}`

## Form Features

✅ Real-time loading state ("Sending..." button)
✅ Form validation (all fields required)
✅ Success banner on submission
✅ Error handling with user-friendly messages
✅ Automatic form reset after success
✅ Scroll to top after submission
✅ Disabled button during sending to prevent double submission

## Testing

After updating the configuration:

1. Build the project: `npm run build`
2. Test locally: `npm run dev`
3. Fill out the contact form with test data
4. Submit and check:
   - Owner email arrives at contact@bioaradhya.com
   - Customer receives auto-reply at their provided email
   - Success banner appears on the page

## Troubleshooting

**Emails not sending?**
- Check browser console for errors
- Verify all 4 configuration values are correct
- Ensure templates are active in EmailJS dashboard
- Check EmailJS quota (free plan has limits)

**Wrong email format?**
- Verify template variable names match exactly: `{{name}}`, `{{email}}`, etc.
- Check template preview in EmailJS dashboard

**Form not submitting?**
- Check browser console for JavaScript errors
- Verify all required fields are filled
- Ensure consent checkbox is checked

## Security Note

The Public Key is safe to include in frontend code - it's designed to be public. Your Private Key should NEVER be included in the code.

## Support

For EmailJS documentation: https://www.emailjs.com/docs/
