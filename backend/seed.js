import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { User } from "./models/user.model.js";
import { Company } from "./models/company.model.js";
import { Job } from "./models/job.model.js";

dotenv.config({});

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for seeding...");

        // Clear existing data
        await User.deleteMany({});
        await Company.deleteMany({});
        await Job.deleteMany({});

        const hashedPassword = await bcrypt.hash("password123", 10);

        // 1. Create Recruiter User
        const recruiter = await User.create({
            fullname: "Global Recruiter Admin",
            email: "recruiter@example.com",
            phoneNumber: 9876543210,
            password: hashedPassword,
            role: "recruiter",
            profile: {
                bio: "Lead Technical Talent Acquisition Specialist",
                skills: ["Recruiting", "Hiring", "Tech Talent", "Sourcing"]
            }
        });

        // 2. Create 15 Top Tech Companies
        const companyList = [
            { name: "Google", location: "Bangalore", website: "https://google.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", description: "Organizing the world's information to make it accessible." },
            { name: "Microsoft", location: "Hyderabad", website: "https://microsoft.com", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", description: "Empowering every person and organization to achieve more." },
            { name: "Amazon", location: "Delhi NCR", website: "https://amazon.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", description: "Earth's most customer-centric enterprise." },
            { name: "Meta", location: "Mumbai", website: "https://meta.com", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", description: "Building technology that brings people together." },
            { name: "Apple", location: "Bangalore", website: "https://apple.com", logo: "", description: "Designing groundbreaking consumer tech and software." },
            { name: "Uber", location: "Hyderabad", website: "https://uber.com", logo: "", description: "Igniting opportunity by setting the world in motion." },
            { name: "Flipkart", location: "Bangalore", website: "https://flipkart.com", logo: "", description: "India's leading e-commerce marketplace." },
            { name: "Zomato", location: "Delhi NCR", website: "https://zomato.com", logo: "", description: "Better food for more people." },
            { name: "Swiggy", location: "Bangalore", website: "https://swiggy.com", logo: "", description: "Delivering unparalleled convenience." },
            { name: "Adobe", location: "Noida", website: "https://adobe.com", logo: "", description: "Changing the world through digital experiences." },
            { name: "Salesforce", location: "Hyderabad", website: "https://salesforce.com", logo: "", description: "The global leader in CRM." },
            { name: "TCS", location: "Mumbai", website: "https://tcs.com", logo: "", description: "IT services, consulting, and business solutions." },
            { name: "Infosys", location: "Pune", website: "https://infosys.com", logo: "", description: "Next-generation digital services and consulting." },
            { name: "TechCorp Labs", location: "Pune", website: "https://techcorp.example.com", logo: "", description: "Next-gen enterprise software solutions." },
            { name: "Paytm", location: "Delhi NCR", website: "https://paytm.com", logo: "", description: "Digital payments and financial technology." }
        ];

        const companies = await Company.insertMany(
            companyList.map(c => ({ ...c, userId: recruiter._id }))
        );

        // 3. Generate 100 Realistic Jobs
        const jobTitles = [
            "Frontend Developer", "Backend Developer", "FullStack Developer", 
            "DevOps Engineer", "Data Scientist", "AI/ML Engineer", 
            "UI/UX Designer", "iOS Developer", "Android Developer", 
            "Cloud Architect", "QA Automation Engineer", "Site Reliability Engineer"
        ];

        const locations = ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"];
        const jobTypes = ["Full Time", "Part Time", "Remote", "Contract"];

        const requirementPools = {
            "Frontend Developer": ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "HTML5/CSS3"],
            "Backend Developer": ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "Redis", "Docker"],
            "FullStack Developer": ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "AWS"],
            "DevOps Engineer": ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux", "Jenkins"],
            "Data Scientist": ["Python", "Pandas", "NumPy", "Scikit-Learn", "SQL", "Tableau", "Machine Learning"],
            "AI/ML Engineer": ["PyTorch", "TensorFlow", "Python", "Deep Learning", "NLP", "Computer Vision", "LLMs"],
            "UI/UX Designer": ["Figma", "Adobe XD", "Wireframing", "User Research", "Prototyping", "Design Systems"],
            "iOS Developer": ["Swift", "SwiftUI", "iOS SDK", "Xcode", "CoreData", "RESTful APIs"],
            "Android Developer": ["Kotlin", "Android SDK", "Jetpack Compose", "Coroutines", "Retrofit"],
            "Cloud Architect": ["AWS", "Azure", "GCP", "Microservices", "System Design", "Security"],
            "QA Automation Engineer": ["Selenium", "Playwright", "Cypress", "JavaScript", "Java", "TestNG"],
            "Site Reliability Engineer": ["Go", "Python", "Prometheus", "Grafana", "Linux", "Kubernetes"]
        };

        const jobs = [];

        for (let i = 1; i <= 100; i++) {
            const title = jobTitles[i % jobTitles.length];
            const company = companies[i % companies.length];
            const location = locations[i % locations.length];
            const jobType = jobTypes[i % jobTypes.length];
            const salary = Math.floor(Math.random() * 35) + 6; // 6 to 40 LPA
            const exp = Math.floor(Math.random() * 6) + 1; // 1 to 6 years
            const positions = Math.floor(Math.random() * 5) + 1;

            jobs.push({
                title: `${title}`,
                description: `We are seeking an ambitious ${title} to join ${company.name} in ${location}. You will work on cutting-edge features, build scalable systems, and collaborate with high-impact teams.`,
                requirements: requirementPools[title] || ["JavaScript", "Problem Solving", "Teamwork"],
                salary: salary,
                experienceLevel: exp,
                location: location,
                jobType: jobType,
                position: positions,
                company: company._id,
                created_by: recruiter._id
            });
        }

        await Job.insertMany(jobs);
        console.log("Successfully seeded 100 jobs across 15 companies!");

        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();
