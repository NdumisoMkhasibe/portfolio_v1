# Codex prompt: build my portfolio website

Build my personal portfolio website by closely reproducing the layout, section order, visual hierarchy, and interactions of my friend’s portfolio:

- Reference portfolio: https://myportfolio-pi-neon-19.vercel.app/
- My GitHub profile: https://github.com/ndumisomkhasibe
- Intended GitHub repository: `mkhasibendumiso` (the repository I am setting up for this portfolio).
- My FumanAI repository: https://github.com/NdumisoMkhasibe/fumanai
- Existing public project: https://ivory-barbers.vercel.app/

My friend gave me permission to use their portfolio as the design reference. Recreate its page structure and visual treatment as faithfully as practical, while replacing my friend’s identity, writing, photos, and personal links with mine. The main design changes are my FumanAI colour palette and my own portfolio content.

## Start by inspecting the sources

1. Inspect the current workspace first. Preserve and extend its existing framework, conventions, and useful components. If it is an empty workspace, create a small, maintainable React + TypeScript site using the simplest suitable setup.
2. Open the reference portfolio and inspect the whole page at desktop and mobile widths. Record its section order, container widths, typography, spacing, navigation, cards, backgrounds, responsive behavior, and visible interactions before implementing. Check any menus, filters, tabs, buttons, scrolling effects, hover states, and animations that are part of the design.
3. Inspect my public GitHub profile and relevant repositories. Read repository descriptions and READMEs, and inspect source code when needed to confirm each project’s purpose and technologies. Use the real repository URLs and current project details. Do not infer a project’s features from its name alone.
4. Use the career-relevant CV and certificate documents in my supplied ZIP as source material. Ignore unrelated identity, banking, tax, and driver’s licence documents. Never put government identifiers, tax details, banking information, certificate verification codes, or other sensitive document contents in the website.
5. If a source cannot be reached from your environment, say exactly which one and what you could not verify. Continue with facts in this prompt, and leave unavailable links out instead of inventing them.

## Design requirements

- Match the reference portfolio’s section structure, layout, visual hierarchy, and interactions as closely as possible. Keep its overall design recognizable while making the content and visual theme clearly mine.
- Use FumanAI’s core palette: charcoal `#242423` and warm cream `#F5E2C9`. Use the gold from the FumanAI golden-hands logo as a restrained accent if that asset is available in the workspace; otherwise choose a subtle warm-gold accent that complements the two confirmed colours. Do not invent additional dominant brand colours.
- Maintain readable contrast, especially for text and buttons. The site must adapt cleanly to desktop, tablet, and mobile screens.
- Use my name and professional identity as the portfolio brand. Apply the FumanAI palette only; do not turn the portfolio into a FumanAI product landing page or replace my identity with the FumanAI logo.
- Reuse my own photo or logo only if it is already available in the workspace. Do not use my friend’s personal photo, name, biography, or contact details. If a portrait is needed and none of mine is available, use a clean initials treatment or a neutral placeholder that is easy for me to replace.
- Keep the implementation responsive, accessible, and easy for me to update. Store repeated project, skill, education, and experience content in data structures where that fits the existing codebase.

## My profile and career information

- Name: Ndumiso Innocent Mkhasibe.
- Location: Cape Town, South Africa.
- Current focus: Software Engineering trainee at WeThinkCode_, building practical software systems and AI-powered tools. I am pursuing junior, graduate, and internship opportunities in software development, cloud, and AI.
- Suggested positioning: “Software engineering trainee building practical software and AI-powered tools.” You may refine the wording for the design, but keep it accurate and grounded.
- Contact details from my CV: mkhasibendumiso3@gmail.com and +27 63 500 7022. Use them in the contact area if the reference has one. Do not expose additional personal information from the ZIP.
- GitHub: https://github.com/ndumisomkhasibe.
- LinkedIn: https://www.linkedin.com/in/ndumiso-mkhasibe-20165377/.

### Education

- Software Engineering, WeThinkCode_, Cape Town, 2025–present. Describe this as ongoing study; do not imply that I have already graduated.
- National Diploma in Electrical Engineering, Vaal University of Technology, completed in 2020.

### Work experience

- Electrical Technician, Lambouka Trading, Ladysmith, March 2022–December 2024. Work included serving as an on-site technical lead, inspecting electricity meters for tampering or illegal connections, and disconnecting or reconnecting supply in line with municipal regulations.
- Electrical Technician, GPT Concrete Products South Africa, January 2020–November 2021. Work included preventive maintenance on three-phase systems and industrial machinery, corrective repairs, and collaboration with mechanical and production teams to reduce downtime.
- Present this experience concisely and connect the practical troubleshooting, ownership, and teamwork to my move into software engineering. Do not imply that either role was a software job.

### Skills

Use the reference’s equivalent section and confirm the final list against my GitHub projects. Known skills include Java, Python, TypeScript, object-oriented programming, data structures and algorithms, REST APIs, databases, debugging, Git, Linux, command-line tools, and generative AI/prompt engineering. Mention specific frameworks or cloud services only when my project source or documentation supports them.

### Projects to investigate and showcase

Choose the most relevant projects that fit the reference site’s project layout. Give each a short, accurate description, a small stack list, and working links only when confirmed.

- **FumanAI** — an AI-assisted job application and career-organizing platform. It supports job application material generation and career tools such as a job tracker and AI assistant. My work includes TypeScript and cloud integration using AWS Cognito, Lambda, API Gateway, DynamoDB, and Amazon Bedrock. Inspect the repository before describing the implementation or claiming that a feature is complete.
- **MapSafe** — a web mapping concept for community safety ratings, aimed at residents, visitors, and e-hailing users. The known backend uses Node.js, TypeScript, Express, PostgreSQL, and Prisma. Describe the safety-rating and location-validation idea accurately; verify current implementation status from the repository before calling features complete.
- **Robot World** — a team software project built with Java 21. It provides an HTTP API for creating and controlling robots in a world with obstacles. Known tools include Maven, JUnit 5, Docker, and GitLab CI. Capacity and action details should be checked against the repository before inclusion. Make clear this was collaborative work.
- **IVORY Barbers** — a barbershop website created as a practical full-stack assessment and deployed at https://ivory-barbers.vercel.app/. It presents services and supports a barber-booking flow. Verify the live repository and current functionality before adding more claims.
- **AfriHack / Royal Square Financial** — a team hackathon project from September 2026, with a demo organized around overview, goals, reminders, and claims. Include it only if it fits the reference’s project or experience sections, and describe it as a team hackathon project.

Do not invent usage numbers, awards, rankings, users, business outcomes, or completed features. Do not present team projects as solo work. If a project link is unavailable, show the project without a link or omit it.

### Certifications and learning

Use a concise credentials section if the reference includes one. Prioritize credentials supported by my documents and profile:

- AWS Certified AI Practitioner (AIF-C01), earned July 2026.
- Microsoft Azure Fundamentals (AZ-900).
- Google AI Essentials.
- WeThinkCode_ Generative AI for Developers and Generative AI for Professionals.
- Harvard/edX CS50’s Introduction to Programming with Python (CS50P), if its certificate is present in the workspace or profile.

Do not label me as AWS Certified Developer. Do not publish certificate verification codes. If certificate dates or names differ between a CV and a certificate, use the certificate itself as the source of truth.

## Implementation and quality checks

- Reproduce the reference’s key layout and behavior first, then apply my content and palette. Avoid adding sections or decorative elements that are absent from the reference unless they are necessary to present my content clearly.
- Keep the project ready to deploy from the `mkhasibendumiso` GitHub repository to Vercel. Aim for the Vercel project name `mkhasibendumiso` if it is available, since that name can shape the default `vercel.app` URL. Do not deploy or push code as part of this task.
- Make navigation and all visible controls work. Do not leave dead buttons, placeholder links, broken images, or console errors.
- Use semantic HTML, keyboard-accessible controls, visible focus states, descriptive link labels, and sensible image alternative text.
- Check the finished site at approximately 375 px, 768 px, and 1440 px widths. Compare it with the reference at matching widths and make a final visual pass for spacing, wrapping, section heights, and responsive navigation.
- Run the project’s available lint, type-check, and build commands. Fix issues caused by your changes.
- Finish with a brief report of the sections implemented, the verified project links used, the checks run, and any source details you could not confirm.
- Do not deploy, push to GitHub, or expose secrets. Leave the finished site ready for me to connect to Vercel and tell me the commands to run locally and build for deployment.
