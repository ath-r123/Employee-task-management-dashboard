
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile the monthly sales data and prepare a performance report.",
        taskDate: "2026-10-22",
        category: "Reporting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Follow-up",
        taskDescription: "Contact pending clients and collect feedback on recent services.",
        taskDate: "2026-10-22",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Customer Records",
        taskDescription: "Verify and update customer contact information in the database.",
        taskDate: "2026-10-18",
        category: "Administration"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit Expense Report",
        taskDescription: "Submit the expense report with all required receipts.",
        taskDate: "2026-10-19",
        category: "Finance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting Preparation",
        taskDescription: "Prepare the agenda and discussion points for the weekly team meeting.",
        taskDate: "2026-10-23",
        category: "Meeting"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive landing page design for the new product.",
        taskDate: "2026-10-22",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review UI Components",
        taskDescription: "Review existing interface components for consistency and usability.",
        taskDate: "2026-10-23",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Prepare wireframes for the dashboard and profile pages.",
        taskDate: "2026-10-17",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Mobile Layout",
        taskDescription: "Resolve mobile layout issues identified during testing.",
        taskDate: "2026-10-20",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Design Assets",
        taskDescription: "Export icons, illustrations, and other assets for the development team.",
        taskDate: "2026-10-24",
        category: "Design"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Login API",
        taskDescription: "Implement login API endpoints with input validation and error handling.",
        taskDate: "2026-10-22",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Analyze slow database queries and improve their performance.",
        taskDate: "2026-10-24",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Configure Development Server",
        taskDescription: "Set up the development environment and verify server configuration.",
        taskDate: "2026-10-18",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration Testing",
        taskDescription: "Complete integration tests for the payment API and resolve failures.",
        taskDate: "2026-10-20",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement User Roles",
        taskDescription: "Add role-based authorization for admin and employee accounts.",
        taskDate: "2026-10-25",
        category: "Backend"
      }
    ]
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Checkout Flow",
        taskDescription: "Test the complete checkout process, including payment and confirmation.",
        taskDate: "2026-10-22",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Create test cases for registration, login, and password recovery.",
        taskDate: "2026-10-23",
        category: "Quality Assurance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Verify Registration Form",
        taskDescription: "Validate required fields and error messages on the registration form.",
        taskDate: "2026-10-19",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Browser Compatibility",
        taskDescription: "Investigate rendering issues found in the Safari browser.",
        taskDate: "2026-10-20",
        category: "Compatibility"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare QA Summary",
        taskDescription: "Document test results, known issues, and recommended fixes.",
        taskDate: "2026-10-24",
        category: "Reporting"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Marketing Campaign",
        taskDescription: "Plan campaign content and define target audiences for the upcoming launch.",
        taskDate: "2026-10-22",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Analyze Campaign Metrics",
        taskDescription: "Review engagement, conversion rates, and campaign performance.",
        taskDate: "2026-10-23",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Social Media",
        taskDescription: "Publish approved posts and update the social media content calendar.",
        taskDate: "2026-10-18",
        category: "Social Media"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit Campaign Proposal",
        taskDescription: "Revise the campaign proposal based on stakeholder feedback and resubmit it.",
        taskDate: "2026-10-20",
        category: "Planning"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research Competitors",
        taskDescription: "Compare competitor marketing strategies, messaging, and promotions.",
        taskDate: "2026-10-25",
        category: "Research"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Aditya",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
}