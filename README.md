# VisaCRM — Visa Application Detail Page

A frontend case study implementing the **Application Detail** page of a modular CRM platform for travel agencies. Built with React, TypeScript, Redux Toolkit, HeroUI, and Tailwind CSS.

---

## Table of Contents

- [Overview](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#overview)
- [Getting Started](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#getting-started)
- [Tech Stack & Tooling Decisions](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#tech-stack--tooling-decisions)
- [Features Implemented](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#features-implemented)
- [Project Structure](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#project-structure)
- [Developer Notes](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#developer-decisions)
- [Architecture Decisions](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#architecture-decisions)
- [AI Tool Usage](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#ai-tool-usage)

## Overview

This project implements the **Visa Application Detail** page of a CRM platform used by travel agency staff. The page allows staff to:

- Track an application's progress across a 5-stage pipeline
- Move an application to the next pipeline stage
- Approve or reject an application from the stage controls
- Manage required documents (view, upload, request revisions, approved, rejected)
- Add internal notes
- View a log of automated communications sent to the traveler

The implementation is based on a provided **Figma design** and **mock JSON** dataset, extended with interactive edge-case handling, upload simulation, and approval/rejection flows that were not part of the original design brief.

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/yasinakbulut25/visa-crm.git
cd visa-crm

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# or equivalently
npm start
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack & Tooling Decisions

- **Frontend Framework:** React + TypeScript
- **State Management:** Redux Toolkit (for global, predictable state handling across multiple components)
- **UI Library:** [Heroui](https://heroui.com) (chosen for modern, reusable components and differentiation from MUI/Ant Design)
- **Styling:** TailwindCSS with custom theme based on Figma colors
- **Date Handling:** Moment.js
- **Build Tool:** Vite 7 (chosen because Vite 8 is still new and plugin support is limited)


## Features Implemented

### Q1 — Core Page Sections

| Section | Description | Status |
| --- | --- | --- |
| **Stage Progress Bar** | 5-stage pipeline (Document Collection → Appointment Booking → Submission → Processing → Decision) with completed / current / pending visual states | ✅ |
| **Traveler Sidebar** | Traveler name, initials avatar, appointment countdown timer, passport number, traveler ID, application type, contact info, related applications with status chips | ✅ |
| **Document Management** | Full document list with per-document status badges (Uploaded, Missing, Revision Requested) and contextual action buttons per status | ✅ |
| **Internal Notes** | Staff-only notes section with author name, relative timestamp, and add-note functionality | ✅ |
| **Communication Log** | Automated email/SMS log with channel icons, message subject, and send timestamps | ✅ |

### Q2 — Edge Cases & Interactive Logic

### Stage Progress Bar

- Shows 5-stage pipeline: `Document Collection → Appointment Booking → Submission → Processing → Decision`
- Completed stages: Green check icon
- Current stage: Highlighted with bold text and thicker border
- Pending stages: Gray / white circles
- Approved / Rejected stages: Custom colors and icons
- Implemented using Redux `selectStages` selector and mapped to `Stage` components


### Move to Next Stage

- Button triggers a **confirmation modal**
- On confirm:
    - Moves application to next stage **without page reload**
    - Shows toast message for success
- If final stage:
    - Button disabled, text shows `Final Stage`


### Stage Actions (Approve / Reject)

- Triggered via three-dot dropdown button
- Approve:
    - All stages set to `completed`
- Reject:
    - Current stage set to `rejected`
- Actions occur **without page reload** and display toast feedback


### Document Management

- List of required documents with status: `Uploaded`, `Missing`, `Revision Requested` , `approved` , `rejected`
- **Upload document workflow:**
    - **Fake upload** function simulates network call with random success/error
    - Shows **loading** indicator during upload
    - **Select Document: d**ocument preview is displayed (image, name, size)
    - **On success:** Workflow modal close and toast shown
    - **On error:** error displayed clearly and retry possible
    - **Random Simulate:** 50% failure rate on each fetch, refresh the page to see different states
    - All uploads handled **without page reload**
- View Note / View Document actions trigger modals with relevant content
- More actions dropdown per document (approve/reject) **works in-place**


### Internal Notes

- Users can add internal notes
- New notes appear at **top of list**, without page reload
- Notes show author (hardcoded `"You"`) and timestamp


### Communication Log

- Displays automated messages sent via Email/SMS
- Shows type indicator icon (Mail/Message)


### Summary Table

| Feature | Behavior | Status |
| --- | --- | --- |
| **Move to Next Stage** | Clicking the button opens a confirmation modal showing the current → next stage transition by name | ✅ |
| **Stage progress update** | After confirmation, the progress bar updates in-place without a full page reload | ✅ |
| **Stage move toast** | A success toast notification appears after a confirmed stage transition | ✅ |
| **Final stage handling** | When the application reaches the Decision stage, the button becomes disabled and its label changes to "Final Stage" | ✅ |
| **Stage Approve / Reject** | Three-dot more menu in the top-right header exposes Approve and Reject actions | ✅ |
| **Approve behavior** | All stages are marked as completed simultaneously; success toast shown; no page reload | ✅ |
| **Reject behavior** | Current stage is marked as rejected with no forward progress; success toast shown; no page reload | ✅ |
| **Document Upload (simulated)** | Clicking Upload opens a modal with a fake async upload. 50% failure rate on each fetch, refresh the page to see different states | ✅ |
| **Upload file preview** | Before confirming, a preview of the selected file is shown (image thumbnail or filename + size) | ✅ |
| **Upload loading state** | Loading shown during 1–2s simulated fetch delay | ✅ |
| **Upload success** | Modal closes automatically, success toast shown, document status updates to `uploaded` without page reload | ✅ |
| **Document error state** | Contextual error message  | ✅ |
| **Retry upload** | Retry button visible when the upload is failed that re-triggers the fetch | ✅ |
| **View Doc modal** | "View Doc" opens a modal that previews the document | ✅ |
| **View Note modal** | "View Note" opens a modal showing the full revision note for that document | ✅ |
| **Document Approve / Reject** | Each document's three-dot more menu includes Approve and Reject actions that update status without page reload | ✅ |
| **Add Internal Note** | Typing and submitting adds the note to the top of the list with current timestamp and author "You" | ✅ |
| **Empty note prevention** | Submit button disabled when field is empty | ✅ |
| **Communication Logs** | Displays automated messages sent via Email/SMS | ✅ |

---

## Project Structure

The project uses a **reusable, feature-oriented component structure** (detailed rationale in [Architecture Decisions](https://github.com/yasinakbulut25/visa-crm?tab=readme-ov-file#architecture-decisions) below).

```
src
├── 📁 components
│   ├── 📁 button
│   │   └── 📄 ActionButton.tsx
│   ├── 📁 documents
│   │   ├── 📁 actions
│   │   │   ├── 📁 moreActions
│   │   │   │   └── 📄 MoreActions.tsx
│   │   │   ├── 📁 uploadDocument
│   │   │   │   ├── 📄 DropZone.tsx
│   │   │   │   ├── 📄 FilePreview.tsx
│   │   │   │   ├── 📄 UploadDocumentAction.tsx
│   │   │   │   └── 📄 UploadLoading.tsx
│   │   │   ├── 📁 viewDocument
│   │   │   │   └── 📄 ViewDocumentAction.tsx
│   │   │   └── 📁 viewNote
│   │   │       └── 📄 ViewNoteAction.tsx
│   │   │   └── 📁 requestAgain
│   │   │       └── 📄 RequestAgainAction.tsx
│   │   ├── 📄 DocumentActions.tsx
│   │   ├── 📄 DocumentCard.tsx
│   │   ├── 📄 DocumentsWrapper.tsx
│   │   └── 📄 StatusBadge.tsx
│   ├── 📁 header
│   │   ├── 📄 Header.tsx
│   │   ├── 📄 NextStageButton.tsx
│   │   └── 📄 StageActions.tsx
│   ├── 📁 input
│   │   └── 📄 Input.tsx
│   ├── 📁 modal
│   │   └── 📄 AppModal.tsx
│   ├── 📁 profileSidebar
│   │   ├── 📁 applications
│   │   │   ├── 📄 RelatedApplications.tsx
│   │   │   └── 📄 StatusBadge.tsx
│   │   ├── 📁 contact
│   │   │   └── 📄 Contact.tsx
│   │   ├── 📁 userInfos
│   │   │   ├── 📄 AppointmentDate.tsx
│   │   │   └── 📄 UserInfos.tsx
│   │   └── 📄 ProfileSidebar.tsx
│   ├── 📁 progress
│   │   ├── 📄 ProgressTracker.tsx
│   │   └── 📄 Stage.tsx
│   └── 📁 rightSidebar
│       ├── 📁 communications
│       │   └── 📄 CommunicationLogs.tsx
│       ├── 📁 notes
│       │   ├── 📄 AddNote.tsx
│       │   └── 📄 InternalNotes.tsx
│       └── 📄 RightSidebar.tsx
├── 📁 data
│   └── 📄 mock.ts
├── 📁 icons
│   ├── 📄 Anchor.tsx
│   ├── 📄 ArrowLeft.tsx
│   ├── 📄 ArrowRight.tsx
│   ├── 📄 Check.tsx
│   ├── 📄 Edit.tsx
│   ├── 📄 FileText.tsx
│   ├── 📄 Mail.tsx
│   ├── 📄 Message.tsx
│   ├── 📄 More.tsx
│   ├── 📄 Phone.tsx
│   ├── 📄 Search.tsx
│   ├── 📄 Send.tsx
│   ├── 📄 Upload.tsx
│   ├── 📄 XIcon.tsx
│   └── 📄 index.ts
├── 📁 store
│   ├── 📁 selectors
│   │   └── 📄 applicationSelectors.ts
│   ├── 📁 slices
│   │   ├── 📁 reducers
│   │   │   ├── 📄 addInternalNoteReducer.ts
│   │   │   ├── 📄 moveToNextStageReducer.ts
│   │   │   ├── 📄 stageDecisionReducer.ts
│   │   │   └── 📄 updateDocumentReducer.ts
│   │   └── 📄 applicationSlice.ts
│   └── 📄 index.ts
├── 📁 styles
│   └── 🎨 index.css
├── 📁 types
│   └── 📄 application.ts
├── 📁 utils
│   ├── 📄 fakeUpload.ts
│   └── 📄 index.ts
├── 📄 App.tsx
├── 📄 MainLayout.tsx
├── 📄 main.tsx
└── 📄 vite-env.d.ts
```

## Developer Decisions

These notes document personal technical decisions made during development, including rationale for choices that go beyond the explicit brief requirements.

### Vite 7 (not Vite 8)

Vite 8 was very new, and some plugins (especially HeroUI + Tailwind) weren’t fully compatible yet. Using Vite 7 reduces risk and provides a stable dev experience. Performance is essentially the same, and upgrading later is straightforward.

### State Management: Redux Toolkit

The app has multiple state domains (stage pipeline, documents, internal notes) that need to communicate. `useState` wouldn’t scale. Redux gives a single source of truth, traceable actions, DevTools support, and slice-based organization that can grow as the CRM expands.

### UI Library: HeroUI

I chose HeroUI for familiarity (faster implementation) and differentiation (avoiding default MUI/Ant Design). It’s Tailwind-native, so custom styles and utility classes integrate seamlessly.

### Component-Based Icon System

All icons live in `src/icons` as React components with props for size, color, and className. This keeps usage consistent and easily maintainable.

### Colors from Figma → Tailwind Theme

Colors were extracted directly from the Figma file and defined as custom design token values in  `@theme`  in css file. This means all color values are defined once and used as semantic Tailwind class names everywhere (e.g., `text-text-default`, `border-border-default`). If the design changes, only the config needs updating. 

### Moment.js for Date Handling

Dates appear in multiple formats: full date, relative time, countdowns. Moment.js simplifies this and keeps date logic centralized, making it easy to swap libraries later if needed.

### Responsive Design

The Figma design targets a desktop-first, three-column layout. Minor responsive decisions were made at the developer's discretion:

- The three-column layout (sidebar / main content / right panel) collapses to a single-column stack on mobile viewports.
- The left and right sidebars have their open/close state managed in React state. On large screens (lg), they can be toggled and appear as absolute-positioned panels, allowing them to slide in/out without breaking the layout.
- The search input in the header is hidden on smaller screens to keep the layout clean and avoid crowding the header area.
- The stage progress bar container can overflow.

### Mock Data Typo Corrections

Two field name inconsistencies were found in the provided mock JSON and corrected for TypeScript type safety:

- `created_at` → `createdAt` (on `internalNotes[1]`) — inconsistent with the rest of the notes array
- `uploaded_date` → `uploadedDate` (on `documents[6]`) — inconsistent with all other document entries

Both fields now follow the camelCase convention used throughout the codebase and the TypeScript interface definitions in `src/types/application.ts`.

## Architecture Decisions

### 1. How did you structure your component tree, and why?

The component tree is organized using a **feature-based and reusable component** approach:

- `progress/` → Stage progress bar and individual stage components
- `documents/` → Document list, cards, actions, modals
- `profileSidebar/` → Traveler information, contact, related applications
- `rightSidebar/` → Internal notes and communication logs
- `header/` → Page header and stage actions

**Rationale:**

- **Modularity:** Each feature is self-contained and testable independently.
- **Reusability:** Components like `ActionButton`, `AppModal`, and `StatusBadge` can be reused across different parts of the app.
- **Maintainability:** Adding new features or updating existing ones affects minimal components.
- **Scalability:** As the application grows, this structure prevents confusion and keeps the code organized.

The `store/` folder mirrors this thinking. Instead of one monolithic `applicationSlice` reducer, the slice logic is split into dedicated reducer files (`moveToNextStageReducer`, `stageDecisionReducer`, `updateDocumentReducer`, `addInternalNoteReducer`) and imported as builder callbacks. This keeps each business rule isolated, independently readable, and testable without pulling in the entire slice. Selectors live in their own `selectors/` folder (`applicationSelectors.ts`) rather than being inlined into components, which means selector logic is reusable across multiple components and easy to memoize with `createSelector` if performance requires it later.

The result is a tree where **the cost of change is local**: adding a new document action means adding a file under `documents/actions/`, wiring it into `DocumentActions.tsx`, and touching nothing else. Refactoring the sidebar layout means touching `ProfileSidebar.tsx` without risk to document or note logic.

### 2. How would you support role-based access control (Viewer vs Manager) without rewriting the existing components?

I would introduce a `usePermissions()` hook that reads the current user's role from a top-level auth context (or a dedicated Redux `authSlice`) and returns a typed permissions object:

```tsx
// hooks/usePermissions.ts
type Role = 'viewer' | 'manager';

export const usePermissions = () => {
  const role = useAppSelector(selectCurrentRole);
  return {
    canMoveStage:      role === 'manager',
    canApproveReject:  role === 'manager',
    canUploadDocument: role === 'manager',
    canAddNote:        role === 'manager',
    canViewDocuments:  true,
    canViewNotes:      true,
  } satisfies Record<string, boolean>;
};
```

Second, the permission check lives **inside the leaf component that owns the action**, not in any parent. `NextStageButton` calls `usePermissions().canMoveStage` and returns `null` (or a disabled state) if false. `AddNote` checks `canAddNote`. `MoreActions` hides the approve/reject items if `canApproveReject` is false.

Because the existing component tree already isolates actions into small, single-purpose files (`NextStageButton.tsx`, `AddNote.tsx`, `MoreActions.tsx`, `UploadDocumentAction.tsx`), adding a permission check to each is a **one-line addition per file**, not a rewrite. Parent components like `DocumentsWrapper` or `RightSidebar` remain completely unchanged, they don't need to know about roles.

```tsx
// NextStageButton.tsx — before
const NextStageButton = () => { ... };

// NextStageButton.tsx — after (one addition, no rewrite)
const NextStageButton = () => {
  const { canMoveStage } = usePermissions();
  if (!canMoveStage) return null;
  ...
};
```

### 3. What would you change to support real-time updates?

Currently, the application uses **Redux** for state management, and components subscribe to the store via `useSelector`, so any state updates trigger automatic re-rendering.

To support **real-time updates** (e.g., another staff member adds a note while viewing the page), I would:

1. Integrate **WebSocket, Pusher, or SSE** to receive backend events.
2. Listen for events and dispatch corresponding Redux actions:

```tsx
socket.on('noteAdded', (note) => {
dispatch(addInternalNoteReducer(note));
});
```

1. Stage updates, document uploads, or note additions are handled via Redux to ensure consistent state.
2. Provide visual feedback (toast messages or inline notifications) to inform users of changes.

**Advantages:**

- Users see updates without refreshing the page
- Conflicts and race conditions can be managed centrally
- Ensures high accuracy and improved UX for enterprise workflows

## AI Tool Usage

This project was built with AI assistance (Claude). The following is a transparent account of what was generated versus what was engineered.

**Generated by AI:** Component boilerplate structure, Tailwind class combinations, SVG icon path data, date utility function signatures, README formatting and section structure.

I used AI (Claude) to speed up parts of the project, but all major decisions were made by me.

**AI helped with:** setting up component boilerplate, Tailwind class suggestions, SVG icon paths, function signatures for date utilities, and formatting sections of the README.

**I handled and decided:** Redux slice structure (split by feature, not component), `fetchDocuments` async with random failure simulation, choosing `useSelector` at the leaf level instead of prop-drilling, stage order as the single source of truth for stage flow, approve/reject behavior logic for stages and documents, icon component system, and the overall component hierarchy in App.

**Refactors from AI output:** The initial `DocumentManagement` component had loading/error/success states all nested in a long `if/else`. I refactored it to use early returns so each state is clear and testable. The `MoveToNextStageButton` was originally inline in the page, but I extracted it once the modal, confirmation, toast, and Redux logic became too big for the layout file.
