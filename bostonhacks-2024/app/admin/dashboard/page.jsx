"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import AdminRoute from "@/components/AdminComponents/AdminRoute.js";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";


export default function AdminDashboard() {
  const [stats, setStats] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "applications"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        const statusCounts = data.reduce(
          (acc, app) => {
            acc[app.status.toLowerCase()] += 1;
            return acc;
          },
          { Applied: 0, Rejected: 0, Accepted: 0, Waitlisted: 0, Pending: 0 }
        );
        setStats(statusCounts);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  const exportData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "applications"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");
      XLSX.writeFile(workbook, "applications.xlsx");
    } catch (error) {
      console.error("Error exporting data:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Call the function to update the statuses
        await updateApplicationStatuses(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const updateApplicationStatuses = async (applications) => {
    try {
      // Create a mapping of uid to document ID
      const querySnapshot = await getDocs(collection(db, "applications"));
      const uidToDocIdMap = {};
      
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        uidToDocIdMap[data.uid] = doc.id; // Map uid to document ID
      });
  
      for (const app of applications) {
        const { uid, status } = app;
  
        // Check if the uid exists in the map
        const documentId = uidToDocIdMap[uid];
        if (documentId) {
          const applicantRef = doc(db, "applications", documentId);
          await updateDoc(applicantRef, { status });
  
          // Optionally update local stats here
          setStats((prevStats) => ({
            ...prevStats,
            [status.toLowerCase()]: (prevStats[status.toLowerCase()] || 0) + 1,
          }));
        } else {
          console.warn(`No document found for uid: ${uid}`);
        }
      }
      alert("Statuses updated successfully!");
    } catch (error) {
      console.error("Error updating statuses:", error);
      alert("Failed to update statuses. Please check the console for errors.");
    }
  };
  

  return (
    <AdminRoute>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <div className="flex justify-around w-full max-w-4xl mb-8">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <h2 className="text-xl font-semibold">{key}</h2>
              <p className="text-lg">{value}</p>
            </div>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/admin/stats")}
          >
            View Stats
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/admin/applicants")}
          >
            View Applicants
          </Button>
          <Button variant="contained" color="secondary" onClick={exportData}>
            Export Data
          </Button>
        </div>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="mt-8"
        />
      </div>
    </AdminRoute>
  );
}