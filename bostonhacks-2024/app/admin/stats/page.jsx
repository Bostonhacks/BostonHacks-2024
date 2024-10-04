'use client';
import { useEffect, useState } from 'react';
import PieChartComponent from '@/components/AdminComponents/PieChartComponent';
import { db } from '@/firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export default function StatsPage() {
  const [genderData, setGenderData] = useState({});
  const [schoolData, setSchoolData] = useState({});
  const [majorData, setMajorData] = useState({});
  const [gradYearData, setGradYearData] = useState({});
  const [ethnicityData, setEthnicityData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'applications'));
        const data = querySnapshot.docs.map((doc) => doc.data());

        let gender = {};
        let school = {};
        let major = {};
        let gradYear = {};
        let ethnicity = {};

        // Count occurrences of each attribute
        data.forEach((applicant) => {
          // Count gender
          if (applicant.gender)
            gender[applicant.gender] = (gender[applicant.gender] || 0) + 1;

          // Count school
          if (applicant.school) {
            const schoolParts = applicant.school.split(' ');
            const firstTwoWords = schoolParts.slice(0, 2).join(' ');
            const remainder = schoolParts.slice(2).join(' ');
            const formattedSchool = `${firstTwoWords}\n${remainder}`;
            school[formattedSchool] = (school[formattedSchool] || 0) + 1;
          }

          // Count major
          if (applicant.major) {
            const majorsArray = applicant.major.split('/').map((m) => m.trim());
            const formattedMajor = majorsArray.join('/\n');
            major[formattedMajor] = (major[formattedMajor] || 0) + 1;
          }

          // Count grad year
          if (applicant.collegeYear)
            gradYear[applicant.collegeYear] =
              (gradYear[applicant.collegeYear] || 0) + 1;

          // Count ethnicity
          if (applicant.ethnicity)
            ethnicity[applicant.ethnicity] =
              (ethnicity[applicant.ethnicity] || 0) + 1;
        });

        setGenderData(gender);
        setSchoolData(school);
        setMajorData(major);
        setGradYearData(gradYear);
        setEthnicityData(ethnicity);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const genderChartData = Object.entries(genderData).map(([label, value]) => ({
    value,
    label,
  }));
  const schoolChartData = Object.entries(schoolData).map(([label, value]) => ({
    value,
    label,
  }));
  const majorChartData = Object.entries(majorData).map(([label, value]) => ({
    value,
    label,
  }));
  const gradYearChartData = Object.entries(gradYearData).map(
    ([label, value]) => ({
      value,
      label,
    })
  );
  const ethnicityChartData = Object.entries(ethnicityData).map(
    ([label, value]) => ({
      value,
      label,
    })
  );

  const piechartStyles =
    'p-5 background-tertiary pb-5 rounded-lg shadow-xl text-white';
  const headerStyles = 'text-3xl font-[500] text-primary';

  return (
    <main className="flex flex-col items-center text-primary w-full" style={{ backgroundColor: '#252526', color: 'white' }}>
      <h1 className="text-3xl font-bold m-5">Stats</h1>
      <div className="grid xl:grid-cols-2 grid-cols:1 gap-10">
        <span className={piechartStyles}>
          <h1 className={headerStyles}>Gender</h1>
          <PieChartComponent data={genderChartData} />
        </span>

        <span className={piechartStyles}>
          <h1 className={headerStyles}>Schools</h1>
          <PieChartComponent data={schoolChartData} />
        </span>

        <span className={piechartStyles}>
          <h1 className={headerStyles}>Majors</h1>
          <PieChartComponent data={majorChartData} />
        </span>

        <span className={piechartStyles}>
          <h1 className={headerStyles}>Class Year</h1>
          <PieChartComponent data={gradYearChartData} />
        </span>

        <span className={piechartStyles}>
          <h1 className={headerStyles}>Ethnicity</h1>
          <PieChartComponent data={ethnicityChartData} />
        </span>
      </div>
    </main>
  );
}
