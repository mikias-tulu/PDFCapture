# 📄 PDFCapture Web

PDFCapture Web is a simple, modern interface for users to convert URLs into downloadable PDFs. It connects to the PDFCapture API, enabling users to securely submit links, manage downloads, and view conversion history — all in one place.

---
## 🚀 Features

### 🌟 Key Features

- **URL-to-PDF Conversion Form** – Submit a link and receive a PDF.  
- **User Dashboard** – View conversion history and download links.  
- **Authentication** – Secure login/signup (JWT or session-based).  
- **API Key Management** – Generate and manage API keys.  
- **Auto-Expire Timer** – Countdown showing when files will be deleted.  
- **Preview Before Download** – Optional PDF preview modal.  
- **Dark/Light Theme Toggle** – Accessible and user-friendly UI.  
- **Conversion Status Notifications** – Real-time loading/success/error toasts.  
- **Rate Limit Feedback** – Notify users when limits are reached.  
- **Mobile Responsive Design** – Usable across all devices.

---

## 🚀 Installation

Make sure you have **Node.js v18+** and **pnpm** or **npm** installed.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pdfcapture-frontend.git
cd pdfcapture-frontend

```

2. Install Dependencies

```
Using pnpm (recommended):

pnpm install

```

Or with npm:

```
npm install

```

🧪 Development

Start the dev server:

```
pnpm dev

```

Or with npm:

```
npm run dev

```

Open http://localhost:3000 to view in your browser.


🔧 Environment Variables

Create a .env.local file and add your config:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api

```

Replace with your actual API server URL (e.g., if using Ngrok or production).

🛠️ Build for Production


```
pnpm build
pnpm start

```

🧼 Lint & Format

```
pnpm lint
pnpm format

```

