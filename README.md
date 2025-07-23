# SurveyNex - User Registration Waitlist

A modern, production-ready waiting page application built with Next.js 14, featuring user registration with dual storage (MongoDB + Excel), stunning animations, and a clean black/white design. For the internship assignment

## Features

### 🎯 Core Functionality
- **User Registration Form** with comprehensive validation
- **Dual Storage System** - Save to both MongoDB and Excel files
- **Real-time Form Validation** using Zod and React Hook Form
- **Production-ready API** with proper error handling

### 🎨 Design & UX
- **Clean Black & White Theme** with modern aesthetics
- **Fluid Animations** powered by Framer Motion
- **Responsive Design** optimized for all devices
- **Interactive Effects** and micro-interactions
- **Accessible UI** with proper form labels and ARIA support

### 📊 Data Collection
The form collects the following user information:
- Full Name (with validation)
- Age (13-120 range validation)
- Email Address (with format validation and uniqueness check)
- Location (Country, State, County/Province)
- Industry/Domain (dropdown selection)

### 🛠 Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB with Mongoose ODM
- **File Export**: Excel generation with xlsx
- **Validation**: Zod schema validation
- **Forms**: React Hook Form with resolver integration

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- MongoDB (local installation or MongoDB Atlas)

### 1. Clone and Install Dependencies
```bash
git clone <repository-url>
cd surveynex
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/surveynex
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup
Make sure MongoDB is running:
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas cloud connection string
```

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── api/register/
│   │   └── route.ts          # Registration API endpoint
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── RegistrationForm.tsx  # Main registration form
│   └── SuccessMessage.tsx    # Success state component
├── lib/
│   ├── mongodb.ts            # Database connection utility
│   ├── validation.ts         # Zod validation schemas
│   └── excel.ts              # Excel file generation utility
└── models/
    └── User.ts               # MongoDB user model
```

## API Endpoints

### POST /api/register
Registers a new user with validation and dual storage.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "country": "United States",
  "state": "California",
  "county": "Los Angeles",
  "industry": "Technology"
}
```

**Response (Success):**
```json
{
  "message": "Registration successful",
  "user": {
    "id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "createdAt": "2025-01-23T..."
  }
}
```

### GET /api/register
Retrieves all registered users (for admin purposes).

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables for Production
Ensure these are set in your production environment:
- `MONGODB_URI`: Your MongoDB connection string
- `NEXT_PUBLIC_APP_URL`: Your production domain

### Recommended Deployment Platforms
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS/Azure/GCP**

## Data Storage

### MongoDB
User data is stored in a MongoDB collection with the following schema:
- Full validation and indexing on email field
- Timestamps for created/updated dates
- Proper error handling for duplicate emails

### Excel Files
Data is also exported to Excel files located in `/exports/registrations.xlsx`:
- Automatic file creation and updates
- Formatted columns with proper widths
- Includes registration timestamps

## Security Features

- **Input Validation**: Comprehensive Zod schemas
- **SQL Injection Protection**: Using Mongoose ODM
- **XSS Prevention**: React's built-in protection
- **CORS Configuration**: Proper API security
- **Environment Variables**: Sensitive data protection

## Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for consistent styling
- Modular component architecture

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation
- Review the code examples

---

**SurveyNex** - The future of intelligent survey creation and analysis.
