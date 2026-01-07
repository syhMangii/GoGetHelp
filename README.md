# Freelancer Portfolio Website

A modern, interactive freelancer portfolio website built with Next.js 14, featuring a public progress dashboard that shows your journey to financial freedom without revealing actual revenue numbers.

## Features

✨ **Public Progress Dashboard**
- Shows your revenue progress as a percentage (clients see 67% to goal)
- Displays milestones and journey stats
- Projects completed, active clients, and estimated time to goal
- Your actual revenue numbers remain private (only visible in the code)

🎯 **Service Showcase**
- Fast UI with Framework (Next.js, Nuxt.js, Laravel)
- Full Website Development
- Miscellaneous Tasks (data entry, gift packing, etc.)
- Custom Labor Requests
- Price ranges displayed for each service

💫 **Modern Design**
- Gradient backgrounds with animated blur effects
- Smooth animations and transitions
- Responsive layout for all devices
- Interactive service cards
- Modal-based contact form

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Customization

#### Update Your Revenue Goals
Edit the `goalData` object in `app/page.js`:

```javascript
const goalData = {
  currentRevenue: 6700, // Your actual current revenue (private)
  targetRevenue: 10000, // Your target revenue (private)
  percentage: 67,       // Public percentage shown to clients
  projectsCompleted: 12,
  activeClients: 5,
  estimatedDaysToGoal: 45
};
```

#### Update Services & Pricing
Modify the `services` array in `app/page.js` to match your offerings:

```javascript
{
  id: 'your-service',
  title: 'Your Service Title',
  icon: <YourIcon className="w-8 h-8" />,
  description: 'Your service description',
  features: ['Feature 1', 'Feature 2', ...],
  priceRange: '$X - $Y',
  delivery: 'X days'
}
```

#### Update Personal Information
- Change "Your Name" in the footer
- Update the hero title "Build. Ship. Scale."
- Customize the tagline
- Modify contact form submission logic (currently shows alert)

### Production Build

```bash
npm run build
npm start
```

### Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): Connect your GitHub repo
- **Netlify**: Use their Next.js integration
- **Railway/Render**: Deploy with Docker
- **Self-hosted**: Use `npm run build` and serve with your preferred method

## How It Works

### Public vs Private Data
- **Public**: Progress percentage (67%), project count, active clients, milestones
- **Private**: Actual dollar amounts (stored in code, never sent to client browser)
- Clients see your progress and momentum without knowing your exact financial numbers

### Contact Form
Currently, the form shows an alert. To make it functional:
1. Set up an email service (SendGrid, Resend, EmailJS)
2. Create an API route in `app/api/contact/route.js`
3. Update the form submission handler

### Adding Analytics
Add Google Analytics or Plausible by updating `app/layout.js` with tracking scripts.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter (via Google Fonts)
- **Animations**: CSS animations + Tailwind

## License

MIT - Feel free to use this for your own portfolio!

---

Built with ❤️ for freelancers who want to share their journey while maintaining privacy.
