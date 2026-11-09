import {
  Building2,
  Users,
  ShieldCheck,
  Settings2,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import structureImg from "@/assets/service-structure.jpg";
import hrImg from "@/assets/service-hr.jpg";
import ngoImg from "@/assets/service-ngo.jpg";
import opsImg from "@/assets/service-operations.jpg";
import eventsImg from "@/assets/service-events.jpg";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  summary: string;
  detail: string;
  points: string[];
  image: string;
  imageAlt: string;
  note?: string;
}

export const services: Service[] = [
  {
    slug: "organisational-build",
    icon: Building2,
    title: "Organisational Development & Startup Systems",
    short: "Organisational Development",
    summary:
      "Structures, governance and accountability systems for organisations formalising for the first time or going through significant growth.",
    detail:
      "We map how your organisation actually works today, then design the structure it needs next: clear roles and reporting lines, a governance framework your board can use, and reporting routines that keep decisions moving when the founder is not in the room.",
    points: [
      "Organisational structure & role design",
      "Governance & board frameworks",
      "Reporting cultures and accountability systems",
      "Founder-independent operating models",
    ],
    image: structureImg,
    imageAlt: "Hands arranging an organisational chart made of paper cards on a wooden table",
  },
  {
    slug: "hr-systems",
    icon: Users,
    title: "HR Systems & People Management",
    short: "HR Systems",
    summary:
      "HR policy frameworks, contracts, staff handbooks, performance management and KPI frameworks tailored to your size and sector.",
    detail:
      "We draft the people systems your team works within every day — policies, handbooks, contract templates, performance reviews and KPIs — written for your size and sector and prepared with Ugandan employment law in mind.",
    points: [
      "HR policy frameworks & staff handbooks",
      "Employment contract templates",
      "Performance management & KPI frameworks",
      "People management systems",
    ],
    image: hrImg,
    imageAlt: "An HR manager in conversation with a team member in a bright office",
    note: "We recommend final contracts and policies are reviewed by a qualified Ugandan advocate.",
  },
  {
    slug: "ngo-compliance",
    icon: ShieldCheck,
    title: "NGO & CBO Compliance and Registration",
    short: "NGO & CBO Compliance",
    summary:
      "Support for NGOs and community-based organisations with NGO Bureau registration, compliance readiness, EU Quality Label applications and governance structuring.",
    detail:
      "We help you prepare and organise what registration and compliance processes ask for: governance documents, constitutions, board structures and the supporting paperwork — so your application and ongoing reporting are complete and well-documented.",
    points: [
      "NGO Bureau registration support",
      "Compliance readiness & documentation",
      "EU Quality Label application support",
      "Governance structuring",
    ],
    image: ngoImg,
    imageAlt: "Community members meeting under a tree while a facilitator takes notes",
    note: "Registration and approval decisions rest with the relevant authorities; we support preparation and do not guarantee outcomes.",
  },
  {
    slug: "sme-operations",
    icon: Settings2,
    title: "SME & Startup Operations",
    short: "SME Operations",
    summary:
      "The internal systems growing businesses need to run consistently — from finance and requisition procedures to asset management and documentation.",
    detail:
      "We set up the routines that stop a growing business from running on memory: how money is requested and approved, how company property is tracked, how information is filed and how the team communicates.",
    points: [
      "Finance & requisition procedures",
      "Company property & asset management",
      "Communication systems",
      "Documentation management",
    ],
    image: opsImg,
    imageAlt: "A business manager reviewing a form beside shelves of organised binders",
  },
  {
    slug: "event-management",
    icon: CalendarCheck,
    title: "Corporate Event Planning & Management",
    short: "Corporate Events",
    summary:
      "Professional planning and execution of corporate events for NGOs and private-sector organisations, handled end to end.",
    detail:
      "From the first brief to the last guest leaving, we plan and run corporate events — coordinating venues, vendors, logistics and the programme on the day so your team can focus on its guests.",
    points: [
      "Full event planning & coordination",
      "On-the-day execution & management",
      "Vendor & logistics handling",
      "NGO and private-sector events",
    ],
    image: eventsImg,
    imageAlt: "A corporate conference in a hotel ballroom with a speaker on stage",
  },
];
