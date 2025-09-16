// prisma/seed.ts
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.course.deleteMany(); // clear existing

  const courses = [
    {
      slug: "executive-presence",
      title: "Executive Presence & Influence",
      subtitle: "Communicate with clarity, confidence, and credibility.",
      priceCents: 12900,
      tags: ["leadership", "communication"],
      level: "Intermediate",
      description:
        "Build a compelling executive presence: signal credibility, navigate senior rooms, and drive outcomes through influence rather than authority.",
      chunks: [
        {
          content:
            "Executive presence = credibility + clarity + calm under pressure.",
        },
        {
          content:
            "Influence models: Cialdini, stakeholder mapping, coalition-building.",
        },
      ],
    },
    {
      slug: "high-performance-teams",
      title: "Leading High-Performance Teams",
      subtitle: "Psychological safety, accountability, and velocity.",
      priceCents: 14900,
      tags: ["teams", "culture"],
      level: "Intermediate",
      description:
        "Create conditions for peak performance: clear goals, autonomy, feedback loops, and a learning culture that compounds.",
      chunks: [
        {
          content:
            "Psychological safety + clear standards drive team performance.",
        },
        { content: "Cadence rituals: weekly priorities, retros, 1:1s." },
      ],
    },
    {
      slug: "strategy-execution",
      title: "Strategy to Execution",
      subtitle: "From roadmap to measurable impact.",
      priceCents: 15900,
      tags: ["strategy", "execution"],
      level: "Advanced",
      description:
        "Convert strategy into action: clarify bets, define leading indicators, de-risk with fast feedback.",
      chunks: [
        {
          content:
            "Strategy narrative: context, thesis, bets, risks, measures.",
        },
        {
          content:
            "Execution system: OKRs, quarterly reviews, weekly operating cadence.",
        },
      ],
    },
  ];

  for (const c of courses) {
    await prisma.course.create({
      data: {
        slug: c.slug,
        title: c.title,
        subtitle: c.subtitle,
        priceCents: c.priceCents,
        tags: c.tags,
        level: c.level,
        description: c.description,
        chunks: { create: c.chunks },
      },
    });
  }

  console.log("✅ Seeded demo courses");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
