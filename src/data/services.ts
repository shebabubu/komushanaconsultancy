import {
  Building2,
  Users,
  ShieldCheck,
  Settings2,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  points: string[];
}

export const services: Service[] = [
  {
    slug: "organisational-build",
    icon: Building2,
    title: "Organisational Build & Startup Systems",
    summary:
      "Designing organisational structures, governance frameworks, reporting cultures, and accountability systems for organisations formalising for the first time or going through significant growth.",
    points: [
      "Organisational structure & role design",
      "Governance & board frameworks",
      "Reporting cultures and accountability systems",
      "Founder-independent operating models",
    ],
  },
  {
    slug: "hr-systems",
    icon: Users,
    title: "HR Systems & People Management",
    summary:
      "Building HR policy frameworks, employment contracts, staff handbooks, performance management systems, and KPI frameworks tailored to your size, sector, and Ugandan legal requirements.",
    points: [
      "HR policy frameworks & staff handbooks",
      "Employment contracts (Uganda-compliant)",
      "Performance management & KPI frameworks",
      "People management systems",
    ],
  },
  {
    slug: "ngo-compliance",
    icon: ShieldCheck,
    title: "NGO & CBO Compliance and Registration",
    summary:
      "Supporting non-governmental and community-based organisations with NGO Bureau registration, legal compliance, EU Quality Label acquisition, and governance structuring.",
    points: [
      "NGO Bureau registration support",
      "Legal & regulatory compliance",
      "EU Quality Label acquisition & application",
      "Governance structuring",
    ],
  },
  {
    slug: "sme-operations",
    icon: Settings2,
    title: "SME & Startup Operations",
    summary:
      "Setting up the internal systems growing businesses need to function consistently — from HR and finance procedures to asset management and documentation.",
    points: [
      "HR policies & performance frameworks",
      "Company property & asset management",
      "Finance & requisition procedures",
      "Communication & documentation systems",
    ],
  },
  {
    slug: "event-management",
    icon: CalendarCheck,
    title: "Corporate Event Planning & Management",
    summary:
      "Professional planning and execution of corporate events for both NGOs and private sector organisations — handled end to end.",
    points: [
      "Full event planning & coordination",
      "On-the-day execution & management",
      "Vendor & logistics handling",
      "NGO and private-sector events",
    ],
  },
];
