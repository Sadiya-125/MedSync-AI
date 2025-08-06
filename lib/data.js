import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "RA",
    name: "Riya A.",
    role: "Patient",
    quote:
      "Booking a Video Consultation saved me a lot of Hassle. I got advice from a Certified Doctor while sitting at Home in Hyderabad.",
  },
  {
    initials: "AM",
    name: "Anita M.",
    role: "Patient",
    quote:
      "The Wallet System is Super Useful. I added Credits once and could easily book Consultations for my Parents in Delhi without any Issues.",
  },
  {
    initials: "VS",
    name: "Dr. Vinod S.",
    role: "Dermatologist",
    quote:
      "Earlier I could only treat Local Patients, but now I Consult People from all over India - from Mumbai to Guwahati - Thanks to this Platform.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each Consultation requires <strong class='text-emerald-400'>2 Credits</strong> Regardless of Duration",
  "Credits <strong class='text-emerald-400'>Never Expire</strong> - Use them Whenever you Need",
  "Monthly Subscriptions give you <strong class='text-emerald-400'>Fresh Credits every Month</strong>",
  "Cancel or Change your Subscription <strong class='text-emerald-400'>Anytime</strong> without Penalties",
];
