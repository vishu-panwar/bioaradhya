# Email Templates for Bioaradhya Contact Form

This folder contains professional email templates for the contact form using EmailJS.

## Templates Included

### 1. `owner-notification.html`
- **Purpose**: Email sent to business owner when someone submits contact form
- **To**: Owner/Admin email
- **Contains**: Customer details, message, topic, timestamp

### 2. `customer-confirmation.html`  
- **Purpose**: Confirmation email sent to customer after form submission
- **To**: Customer email
- **Contains**: Thank you message, next steps, contact info, social links

## EmailJS Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Note down your **Service ID**

### Step 3: Create Email Templates

#### For Owner Notification:
1. Go to **Email Templates** → **Create New Template**
2. Name it: `owner_notification`
3. Copy content from `owner-notification.html`
4. Set up template variables:
   - `{{name}}` - Customer's name
   - `{{email}}` - Customer's email
   - `{{phone}}` - Customer's phone
   - `{{topic}}` - Enquiry topic
   - `{{message}}` - Customer's message
   - `{{date}}` - Submission date
   - `{{time}}` - Submission time
5. Set **To Email**: Your business email
6. Set **From Name**: Bioaradhya Website
7. Set **Subject**: `🔔 New Contact Form Submission - {{topic}}`
8. Note down **Template ID**

#### For Customer Confirmation:
1. Create another template
2. Name it: `customer_confirmation`
3. Copy content from `customer-confirmation.html`
4. Set up template variables:
   - `{{name}}` - Customer's name
   - `{{email}}` - Customer's email  
   - `{{topic}}` - Enquiry topic
   - `{{message}}` - Customer's message
5. Set **To Email**: `{{email}}` (dynamic)
6. Set **From Name**: Bioaradhya Care Team
7. Set **Reply To**: Your business email
8. Set **Subject**: `Thank You for Contacting Bioaradhya - We've Received Your Message`
9. Note down **Template ID**

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy it

### Step 5: Install EmailJS in Your Project

```bash
npm install @emailjs/browser
```

### Step 6: Add EmailJS to Contact Form

Update your `App.tsx` contact form submission:

```typescript
import emailjs from '@emailjs/browser';

// At the top of your component
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your public key

// Update the submitForm function
const submitForm = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const form = e.currentTarget;
  const formData = new FormData(form);
  
  const templateParams = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    topic: formData.get('topic'),
    message: formData.get('message'),
    date: new Date().toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    time: new Date().toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  };

  try {
    setFormStatus('sending');
    
    // Send notification to owner
    await emailjs.send(
      'YOUR_SERVICE_ID',           // Replace with your Service ID
      'YOUR_OWNER_TEMPLATE_ID',    // Replace with owner template ID
      templateParams
    );
    
    // Send confirmation to customer
    await emailjs.send(
      'YOUR_SERVICE_ID',              // Replace with your Service ID
      'YOUR_CUSTOMER_TEMPLATE_ID',    // Replace with customer template ID
      templateParams
    );
    
    setFormStatus('success');
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setFormStatus('idle'), 5000);
    
  } catch (error) {
    console.error('Email send failed:', error);
    setFormStatus('error');
    setTimeout(() => setFormStatus('idle'), 5000);
  }
};
```

### Step 7: Add Form State Management

Add these states to your component:

```typescript
const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
```

Update your submit button:

```typescript
<Button tone="primary" type="submit" disabled={formStatus === 'sending'}>
  {formStatus === 'sending' ? 'Sending...' : 'Send message'} <Icon name="arrow" />
</Button>

{formStatus === 'success' && (
  <div className="success-banner">
    <span>✓</span>
    <div>
      <strong>Message sent successfully!</strong>
      <p>We'll get back to you within 24-48 hours.</p>
    </div>
  </div>
)}

{formStatus === 'error' && (
  <div className="error-banner">
    <span>✗</span>
    <div>
      <strong>Failed to send message</strong>
      <p>Please try again or contact us directly.</p>
    </div>
  </div>
)}
```

## Template Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `{{name}}` | Customer's full name | "Rahul Sharma" |
| `{{email}}` | Customer's email | "rahul@example.com" |
| `{{phone}}` | Customer's phone | "+91 98765 43210" |
| `{{topic}}` | Enquiry topic | "Product inquiry" |
| `{{message}}` | Customer's message | "I would like to know..." |
| `{{date}}` | Submission date | "29 October 2026" |
| `{{time}}` | Submission time | "02:30 PM" |

## Testing

1. Fill out contact form with test data
2. Check owner email inbox for notification
3. Check customer email inbox for confirmation
4. Verify all variables are properly populated
5. Check spam folder if emails not received

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Basic email delivery

For higher volume, upgrade to paid plan.

## Troubleshooting

**Emails not sending?**
- Check Service ID, Template IDs, and Public Key are correct
- Verify email service is connected in EmailJS dashboard
- Check browser console for errors
- Ensure form fields match template variables

**Emails going to spam?**
- Add your domain to SPF records
- Verify sender email in EmailJS
- Ask recipients to whitelist your email

**Template not formatting correctly?**
- EmailJS supports inline CSS only
- Test templates in EmailJS dashboard first
- Some email clients block certain CSS properties

## Support

For issues or questions:
- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Created for Bioaradhya Private Limited**  
Modern homeopathy rooted in thoughtful care
