---
name: "IT Front Door Explained
description: "Explains the IT Front Door, BYU-Idaho's unified intake process for requesting new software, IT projects, and AI tools. Covers the Software Request Form, how requests are routed to IT Portfolio Managers, the post-submission workflow through IT Project Council, and why IT reviews net-new software. Includes form field details, definitions, and the portfolio manager reference table."
---

# IT Front Door Explained

## Introduction

At the request of the CIO, I developed a streamlined workflow in TeamDynamix (our IT Service Management system) that supports the ticket lifecycle for what the CIO coined as the "Front Door." The goal was to create a single intake point for all IT project, software, and AI solution requests across the university — replacing the scattered channels (emails, hallway conversations, and a hard-to-find Workday form) that previously caused requests to fall through the cracks or sit without a clear owner.

Employees simply click the "Request Software" tile on the IT Help Center homepage (or navigate directly to the form) and submit their request. From there, the system handles routing, prioritization, and follow-up through a structured governance pipeline.

## What This Replaced

Before the Front Door, different request types followed different (and often informal) paths:

- **AI tools and use cases** used to bypass IT review entirely and go straight to "AI Governance" via a Microsoft Forms request form. This caused organizational and routing confusion, since it skipped the traditional process of IT reviewing net-new software requests.
- **Software and project requests** arrived through emails, hallway asks, or a Workday form that was difficult to find — with no consistent routing, ownership, or tracking.

Now, all of these flow through a single form under a simplified, user-friendly label: "Software Request" — which covers everything in the IT project, software, and AI tool realm. Projects are included because sometimes a software procurement is large enough to necessitate project management resources.

## Definitions

- **IT Front Door (or "Front Door"):** The name for the new unified process of submitting requests for new software, IT project management resources, or review of new AI tools and use cases. It's called a "Front Door" because it replaced multiple scattered entry points with a single, consistent intake process.
- **IT Help Center:** An IT self-service portal solution from TeamDynamix (internally called TDClient), branded at BYU-Idaho as the "IT Help Center" with a vanity URL that routes https://ithelp.byui.edu to the TeamDynamix portal. The portal contains the Knowledge Base, Service Catalog (including webforms for self-service ticket creation), and Questions (a simple Q&A forum).
- **TeamDynamix:** The university's IT Service Management system, which supports incident, service, change, problem, and knowledge management.
- **IT Portfolio Manager:** A designated IT point of contact for a specific area of the university. When a request is submitted through the IT Help Center, the assigned Portfolio Manager receives it, evaluates it, and works with the requestor on next steps. Each vice-presidential area has a specific Portfolio Manager who understands that area's needs and priorities.
- **IT Project Council:** A weekly leadership meeting (every Monday morning) where incoming IT requests are evaluated and prioritized. Every request submitted through the Front Door is reviewed here.
- **CES Dashboard Metrics:** The strategic criteria against which all requests are justified. They include Quality (Faith & Testimony, Instructor Rating, Customer Satisfaction, Employment), Reach (Enrollment, Retention, Graduation Rate), and Cost (Total Credits, Cost Per Student).

## Software Request Form (IT Portfolio Request Form)

"IT Portfolio Request Form" is the internal system name for the form in the service catalog. It is displayed publicly as "Request an IT Project, Software, or AI Tool" and lives within the TeamDynamix service desk platform under the BYU-Idaho IT Help Center.

### Purpose

This form serves as the formal intake mechanism for BYU-Idaho employees to submit requests for new IT projects, software, or AI solutions. Once submitted, the request is routed to an assigned IT Portfolio Manager who will follow up to discuss next steps. It's essentially a project/software intake and governance form — ensuring that technology requests are captured, justified against institutional metrics, assigned to the right Portfolio Manager, and tracked through the university's IT service management system (TeamDynamix).

The form enforces institutional alignment by requiring requestors to justify their request against CES Dashboard Metrics, ensuring every request is weighed fairly against the same strategic criteria so nothing gets lost and nothing jumps the line without justification.

### Who It Serves

The form serves BYU-Idaho employees (faculty, staff, and administrators) who need IT resources. It sits under Service Catalog → IT Projects → Portfolio Management, indicating it's part of an institutional IT governance process. The form is organized around university vice-presidential areas, each with an assigned IT Portfolio Manager:

- **Academics** (VP: Greg Roach) → Kent Barrus
- **Online Learning** (VP: Kendell Peck) → Kent Barrus
- **Student Life** (VP: Amy Renee) → Jared Boyter
- **Executive Strategy & Planning** (VP: Rob Garrett) → Jared Boyter
- **University Resources** (VP: Brett Cook) → Kurt Miller
- **Information Technology** (VP: Brett Cook) → Randy Beard

*Note: The form's Portfolio Manager dropdown only offers three selectable options — Kent Barrus, Kurt Miller, and Jared Boyter. Randy Beard (Information Technology) does not appear in the dropdown, which may indicate that IT-internal requests follow a different path.*

### Questions and Fields Present

The form contains the following fields:

1. **Title** (Required, text input) — A short name for the request, limited to 5 words or less. Placeholder text: "Short Name For Your Request."
2. **Which IT Portfolio are you represented by?** (Required, dropdown) — Selects the assigned IT Portfolio Manager. Options are Kent Barrus, Kurt Miller, or Jared Boyter. An embedded reference table maps university areas/VPs to their portfolio managers with contact info (phone and email).
3. **Please select the type of your request** (Required, dropdown) — Four options: "Request for new software," "Request for project management resources," "Need help selecting or implementing an AI solution," and "Something else."
4. **Please include justification aligned with the CES Dashboard Metrics** (Required, text area) — Respondents must provide justification across three metric categories: Quality, Reach, and Cost. The field comes pre-populated with these categories as a template.
5. **What are the high-level requirements of your request?** (Optional, rich text editor) — A rich text field for describing product features, tool suggestions, data use, integrations with other systems, etc. Supports formatting, tables, images, and links.
6. **How do you anticipate using your requested technology solution?** (Required, text area) — For describing the usage context — e.g., lab setting, installed on a computer, web browser, etc.
7. **Please indicate which department is submitting the request.** (Required, lookup field) — A searchable lookup field that opens a department search window, allowing the user to find and select their department from the university's directory.
8. **Who will be the primary stakeholders?** (Required, text input) — Identifies decision-makers and people who need to be informed of progress.
9. **How do you plan on paying for your request?** (Required, text input) — Describes the funding source — e.g., department funds, needs review request, etc.
10. **Desired Completion Date** (Required, date/time picker) — Format: mm/dd/yyyy hh:mm.
11. **Attachment(s)** (Optional, file upload) — Allows uploading additional files or documents. Maximum total file size is 200 MB.

## Intended User Experience

When visiting the IT Help Center homepage, an employee sees a "Request Software" tile prominently displayed. Clicking it takes them directly to the Software Request Form. The form is gated by SSO/Authentication, meaning employees must log in with their university credentials before accessing it. The system gathers user information automatically from their authenticated session.

## Post-Submission Workflow

Once the form is submitted, the following process takes place:

1. **Ticket is created** → The request is logged as a ticket in the IT Help Center system.
2. **Automation kicks in** → The system evaluates which IT Portfolio fits the requestor's area and assigns the ticket to the corresponding Portfolio Manager.
3. **Request enters the queue** → The ticket is routed to the Request Queue on the IT Portfolio Management dashboard.
4. **IT Project Council reviews it** → The following Monday morning, the request is discussed in the weekly IT Project Council meeting.
5. **Portfolio Manager follows up** → After the council meeting, the assigned Portfolio Manager reaches out to the requestor with next steps.

## Why IT Reviews Software

We review all net-new software for a number of reasons, including:

- **Security Assessment** — e.g., does the vendor have a SOC Type 2 report, FERPA compliance, etc.
- **Budget Resources** — how is this software going to be funded: from the IT budget, an individual department's budget, etc.
- **Maintenance Evaluation** — does the new software require IT to support ongoing maintenance of the solution.
- **Developer Assistance** — will it require a software engineer to assist with system integrations.
- **IT Project Coordination** — if the software is a large procurement, an IT Project Manager may need to be assigned to assist with vendor evaluation, university purchasing coordination, contract negotiation, RFP/RFI, implementation support, etc.
- **Data Privacy Reviews** — does the solution adequately protect university data.

## Key Takeaways

The Front Door exists to solve three core problems: routing, prioritization, and strategic alignment. It automatically assigns requests to the correct Portfolio Manager based on university area, feeds every request into the weekly IT Project Council for leadership review, and ties all requests to CES Dashboard Metrics so they are weighed against the same institutional criteria. The result is a trackable, equitable process that replaces the ad hoc channels that previously let requests slip through the cracks.