Got it! Since you haven’t done this before, I’ll guide you step by step. Here’s the overall plan:  

### **1. Setting Up the Project**  
- [x] Initialize a Next.js project with SQLite  
- [x] Configure Prisma as the ORM  

### **2. Database Schema Design (Based on ADR-25)**  
- [x] Create tables for tracking UTM parameters, page views, user actions, and referrers  
- [x] Migrate the schema to SQLite  

### **3. Backend APIs for Tracking**  
- [x] API to log page views with UTM parameters  
- [x] API to log user actions (e.g., button clicks)  
- [x] API to associate referrer information  

### **4. Middleware for Automatic Tracking**  
- [x] Capture UTM parameters and store them  
- [x] Differentiate between page views and API calls  

### **5. Frontend Integration**  
- [ ] Automatically send tracking data on page load and user interactions  

### **6. Testing and Debugging**  
- [ ] Validate data in SQLite  
- [ ] Debug tracking issues with logs  



collectParams()
/feed /campaing page

httpClient -> 

serverHtppClient