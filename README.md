# MedSync AI - Telemedicine Platform

A comprehensive telemedicine platform that connects patients with verified doctors through video consultations, appointment scheduling, and AI-powered health insights.

## 🚀 Features

### For Patients

- **Doctor Discovery**: Browse and filter doctors by specialty, ratings, and availability
- **Appointment Booking**: Schedule video consultations with real-time slot availability
- **Video Consultations**: High-quality video calls with integrated medical tools
- **Medical Records**: Secure storage and sharing of medical history
- **Credit System**: Flexible payment options with credit-based pricing
- **AI Health Insights**: Personalized health recommendations and symptom analysis

### For Doctors

- **Profile Management**: Create and manage professional profiles with verification
- **Appointment Management**: View and manage patient appointments
- **Video Consultation Tools**: Integrated platform for remote consultations
- **Patient Records**: Access to patient medical history and consultation notes
- **Payout System**: Automated earnings tracking and withdrawal
- **Verification Process**: Multi-step doctor verification for trust and safety

### Admin Features

- **User Management**: Comprehensive dashboard for managing users and doctors
- **Verification Review**: Review and approve doctor verification requests
- **Payout Management**: Process and track doctor payouts
- **Analytics**: Platform usage statistics and revenue tracking
- **Content Management**: Manage specialties, pricing, and platform content

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Modern, accessible component library
- **React Hook Form** - Form validation and management
- **Zod** - TypeScript-first schema validation
- **Framer Motion** - Animation library

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database toolkit
- **PostgreSQL** - Primary database
- **Clerk** - Authentication and user management
- **Vonage Video API** - Video call infrastructure

### Real-time Features

- **WebRTC** - Peer-to-peer video communication
- **Vonage Client SDK** - Video call integration
- **Socket.io** - Real-time bidirectional communication

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Vercel** - Deployment platform

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Clerk account (for authentication)
- Vonage Video API account (for video calls)

### Local Development

1. **Clone the repository**

```bash
git clone https://github.com/Sadiya-125/MedSync-AI.git
cd MedSync-AI
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Variables**
   Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/medsync_ai"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Video Calls
VONAGE_API_KEY="your-vonage-api-key"
VONAGE_API_SECRET="your-vonage-api-secret"
VONAGE_SESSION_ID="your-vonage-session-id"

# App Settings
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Database Setup**

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed database (optional)
npx prisma db seed
```

5. **Start development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
medsync-ai/
├── app/
│   ├── (auth)/           # Authentication routes
│   ├── (main)/           # Main application routes
│   │   ├── admin/        # Admin dashboard
│   │   ├── doctor/       # Doctor portal
│   │   ├── doctors/      # Patient doctor discovery
│   │   ├── onboarding/   # User onboarding
│   │   ├── pricing/      # Pricing plans
│   │   └── video-call/   # Video consultation
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Landing page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── appointment-card.jsx
│   ├── header.jsx
│   └── ...
├── lib/
│   ├── data.js           # Static data and constants
│   ├── schema.js         # Database schemas
│   ├── utils.js          # Utility functions
│   └── prisma.js         # Prisma client
├── actions/              # Server actions
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migrations
├── public/               # Static assets
└── middleware.js         # Route protection
```

## 🔧 Configuration

### Database Schema

The application uses Prisma with the following main models:

- **User**: Patient and doctor profiles
- **Doctor**: Doctor-specific information and verification
- **Appointment**: Consultation bookings
- **Credit**: Payment and credit system
- **Payout**: Doctor earnings and withdrawals

### Authentication

- **Clerk** handles user authentication with role-based access
- **Middleware** protects routes based on user roles (patient, doctor, admin)

### Video Integration

- **Vonage Video API** provides:
  - Secure video calls
  - Screen sharing capabilities
  - Recording functionality
  - Chat during calls

## 📱 Mobile Support

The application is fully responsive and optimized for:

- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tablets (iPad, Android tablets)

## 🔒 Security Features

- **HTTPS** enforced in production
- **Input validation** with Zod schemas
- **SQL injection prevention** via Prisma
- **XSS protection** with React
- **Rate limiting** on API routes
- **Secure authentication** with Clerk
