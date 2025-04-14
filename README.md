## Start Project

1. Start Server

```
cd server/ && npm start
```

2. Start Frontend

```
cd client/ && npm run dev
```

## **🟢 Part A: React + React Three Fiber**

### **Goal:**

Create a **React app** that renders a **3D grid** (3x4 by default) where each column represents a data sample. When a user enters a number and clicks "Submit," a stack of cubes is added in the corresponding column.

![Screenshot 2025-03-31 at 14.10.19.png](attachment:fb572835-3cbf-4737-82f3-537b249ed6a8:Screenshot_2025-03-31_at_14.10.19.png)

### **Tasks:**

✅ **Set up a React app** using `react-three-fiber`, `zustand` (for state management), and basic UI components.

✅ **Render a hardcoded 3x4 grid** where each cell can contain a vertical stack of cubes.

✅ **Handle user input**: When the user submits a number, add a column of cubes to the corresponding position in the grid.

✅ **Make the grid dimensions dynamic**: Instead of being hardcoded to 3x4, allow the user to change grid size using **two sliders (width & height)**.

### **Bonus Challenges (Optional)**

🚀 Implement smooth **animations** when cubes are added.

🚀 Add **perspective controls** (OrbitControls) to let users rotate the view.

🚀 Use **shaders** for custom cube appearance (e.g., gradient colors).

---

## **🟡 Part B: Node + SQL + Frontend<>Backend Communication**

### **Goal:**

Extend the app to **store sample data in a database** and ensure that **multiple users** can see real-time updates when new data is submitted.

### **Tasks:**

✅ **Set up a Node.js + Express server** with SQLite as the database.

✅ **Create API routes**:

- `POST /api/samples` → Save a submitted sample in the database.
- `GET /api/samples` → Fetch all stored samples.
  ✅ **Modify React app** to send new samples to the backend.
  ✅ **Use polling (every 1s)** to fetch updated sample data and update the 3D view dynamically.

### **Bonus Challenges (Optional)**

🚀 Replace polling with **WebSockets** for real-time updates.

🚀 Implement a **"Reset"** button to clear all samples.

🚀 Add user authentication (basic token-based system).
