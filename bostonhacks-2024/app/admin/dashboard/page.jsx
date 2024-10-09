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
          { applied: 0, rejected: 0, accepted: 0, waitlisted: 0, pending: 0 }
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
      </div>
    </AdminRoute>
  );
}