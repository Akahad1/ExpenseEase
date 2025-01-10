# ExpenseEase

ExpenseEase is a user-friendly expense tracking application designed to simplify financial management. It provides features like adding expenses, setting category limits, and tracking your spending habits.

---

## Features

- **Expense Tracking:** Record expenses with categories, amounts, and purposes.
- **Category Limits:** Set spending limits for categories to stay within your budget.
- **Validation:** Prevent adding expenses that exceed category limits.
- **Responsive Design:** Optimized for both desktop and mobile devices.

---

## Technologies Used

- **Frontend:** React, TypeScript, Redux Toolkit, Tailwind CSS
- **API Integration:** RTK Query for making API calls
- **Toast Notifications:** Sonner for providing user feedback

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

---

## Getting Started

Follow these steps to set up and run the ExpenseEase frontend:

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/ExpenseEase.git](https://github.com/Akahad1/ExpenseEase.git)
cd ExpenseEase
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the required environment variables:

```env
NEXT_PUBLIC_API_BASE_URL=http://your-api-url.com
```

Replace `http://your-api-url.com` with the actual API endpoint.

### 4. Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

---

## Known Issues or Limitations

- **Data Persistence:** Page reloads fetch fresh data. Consider implementing state persistence for a smoother experience.
- **Error Handling:** Error messages are basic. Enhancing them for better user understanding is recommended.
- **Testing:** Automated tests are not yet implemented.

---

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.



For any questions or feedback, please reach out to:

- **Email:** email@example.com
- **GitHub:** [(https://github.com/Akahad1))
