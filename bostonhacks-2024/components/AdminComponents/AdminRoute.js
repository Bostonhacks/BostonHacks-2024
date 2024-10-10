import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";

const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isAdmin = await checkAdminStatus(user.email);
        if (!isAdmin) {
          router.push("/admin/login");
        } else {
          setLoading(false);
        }
      } else {
        router.push("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const checkAdminStatus = async (email) => {
    const adminRef = doc(db, "admin", email);
    const adminSnap = await getDoc(adminRef);
    return adminSnap.exists();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default AdminRoute;