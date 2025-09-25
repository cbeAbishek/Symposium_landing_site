# Department Events Data Structure Guide 🎉

This repository maintains **event details for all departments** in a structured format (JSON-like).  
Each department should follow the same format to ensure consistency.

---

## 📌 Structure Example (CSE - Reference)

```js
{
  title: "CSE - Events",
  logo: "/app/cse-events/dummy.jpg",
  routerName: "cse-events",
  description:
    "Discover new possibilities and explore endless opportunities. Scroll down to learn more!",
  events: [
    {
      title: "Paper Presentation",
      description:
        "Present groundbreaking ideas, research, and case studies. Engage in dynamic discussions and showcase innovation!",
      guidelines: {
        team: "Solo/Team (5)",
        presentation: "8 min + 2 min Q&A",
        slides: "10-12 max",
        plagiarism: "No plagiarism",
        judging: "innovation, research, presentation, relevance, Q&A",
        eligibility: "Open to UG/PG",
        rewards: "Prizes & certificates",
      },
      image: "ev1.src",
      logo: "club",
      routerName: "paper-presentation",
    },
    ...
  ]
}
