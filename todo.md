Got it! Since you haven’t done this before, I’ll guide you step by step. Here’s the overall plan:  

### **1. Setting Up the Project**  
- [ ] Initialize a Next.js project with SQLite  
- [ ] Configure Prisma as the ORM  

### **2. Database Schema Design (Based on ADR-25)**  
- [ ] Create tables for tracking UTM parameters, page views, user actions, and referrers  
- [ ] Migrate the schema to SQLite  

### **3. Backend APIs for Tracking**  
- [ ] API to log page views with UTM parameters  
- [ ] API to log user actions (e.g., button clicks)  
- [ ] API to associate referrer information  

### **4. Middleware for Automatic Tracking**  
- [ ] Capture UTM parameters and store them  
- [ ] Differentiate between page views and API calls  

### **5. Frontend Integration**  
- [ ] Automatically send tracking data on page load and user interactions  

### **6. Testing and Debugging**  
- [ ] Validate data in SQLite  
- [ ] Debug tracking issues with logs  

Let’s start with **Step 1: Setting Up the Project**. Are you okay with using Prisma for SQLite, or do you prefer something else?