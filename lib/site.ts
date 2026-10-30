export const site = {
  name: "7ink.co",
  url: "https://7ink.co",
  address: "[Street address], Karu, Abuja",
  hours: "[Days & hours]",
  phone: "[Her number]",
  instagram: "[@handle]",
  instagramUrl: "#",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
};

export const nav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Hope" },
  { href: "/aftercare", label: "Aftercare" },
];

export type Work = { style: string; place: string };

export const works: Work[] = [
  { style: "Fine line", place: "Wrist" },
  { style: "Blackwork", place: "Upper arm" },
  { style: "Lettering", place: "Collarbone" },
  { style: "Cover-ups", place: "Shoulder" },
  { style: "Custom pieces", place: "Forearm" },
  { style: "Fine line", place: "Ankle" },
  { style: "Blackwork", place: "Calf" },
  { style: "Custom pieces", place: "Back" },
  { style: "Lettering", place: "Ribs" },
];

export const styleNames = ["All", "Fine line", "Blackwork", "Lettering", "Cover-ups", "Custom pieces"];

export const steps = [
  { n: "01", title: "Reach out", body: "Send your idea, placement and rough size through the booking form or WhatsApp." },
  { n: "02", title: "Consult", body: "Talk it through with Hope and agree on the design direction and a date." },
  { n: "03", title: "Design", body: "Hope draws your piece and refines it with you before the session." },
  { n: "04", title: "Get inked", body: "Your session at the studio in Karu, then aftercare to help it heal well." },
];

export const tips = [
  { n: "01", title: "The first few hours", body: "[When to take off the wrap and how to wash the tattoo the first time.]" },
  { n: "02", title: "The first two weeks", body: "[How often to wash and moisturise, what product Hope recommends, and what to expect as it peels.]" },
  { n: "03", title: "What to avoid", body: "[Swimming, sun, scratching, tight clothing, and how long to avoid each.]" },
  { n: "04", title: "Long-term care", body: "[Sunscreen, keeping skin moisturised, and when to come back for a touch-up.]" },
  { n: "05", title: "When to get in touch", body: "[Signs that need Hope’s attention or a doctor’s.]" },
];

export const faqs = [
  { q: "Where is 7ink.co located?", a: "7ink.co is a tattoo studio in Karu, Abuja, at [street address and nearest landmark]. Clients come from across the FCT, including Nyanya, Mararaba, Wuse, Garki and Maitama." },
  { q: "How much does a tattoo cost in Abuja?", a: "Price depends on size, detail and placement. Small tattoos at 7ink.co start from [₦ minimum], and you get a firm quote at your consultation." },
  { q: "What tattoo styles does Hope do?", a: "[Hope’s styles and whether she takes cover-ups.]" },
  { q: "Is getting a tattoo at 7ink.co safe and hygienic?", a: "[How Hope handles single-use needles, sterilisation and the studio setup.]" },
  { q: "Do I need an appointment?", a: "Yes, sessions are by appointment. Send your idea through the booking form or on WhatsApp and Hope will set a date with you." },
];
