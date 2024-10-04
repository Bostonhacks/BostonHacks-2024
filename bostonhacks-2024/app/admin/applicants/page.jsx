'use client';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import { db } from '@/firebase/firebase-config';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

function ApplicantModal({ open, handleClose, applicant }) {
  const displayFields = [
    { label: 'First Name', value: applicant.firstName },
    { label: 'Last Name', value: applicant.lastName },
    { label: 'Email', value: applicant.email },
    { label: 'Phone Number', value: applicant.phoneNumber },
    { label: 'Age', value: applicant.age },
    { label: 'Gender', value: applicant.gender },
    { label: 'Pronouns', value: applicant.pronouns },
    { label: 'Ethnicity', value: applicant.ethnicity },
    { label: 'Address', value: applicant.address },
    { label: 'City', value: applicant.city },
    { label: 'State', value: applicant.state },
    { label: 'Country', value: applicant.country },
    { label: 'Zip Code', value: applicant.zipCode },
    { label: 'School', value: applicant.school },
    { label: 'College Year', value: applicant.collegeYear },
    { label: 'Major', value: applicant.major },
    { label: 'Education Level', value: applicant.educationLevel },
    { label: 'Diet', value: applicant.diet },
    { label: 'Other Diet', value: applicant.otherDiet },
    { label: 'Shirt Size', value: applicant.shirtSize },
    { label: 'Sleep Accommodations', value: applicant.sleep },
    {
      label: 'Excitement about BostonHacks',
      value: applicant.bostonhacks,
    },
    {
      label: 'Track Interest',
      value: applicant.trackInterest,
    },
    {
      label: 'Resume URL',
      value: applicant.resumeUrl,
    },
    { label: 'Status', value: applicant.status },
    {
      label: 'Submitted At',
      value: applicant.submittedAt
        ? applicant.submittedAt.toDate().toString()
        : 'N/A',
    },
  ];

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle style={{ backgroundColor: '#252526', color: 'white' }}>
        Applicant Details
      </DialogTitle>
      <DialogContent
        style={{ backgroundColor: '#252526', color: 'white' }}
      >
        <List>
          {displayFields.map(({ label, value }) => (
            <ListItem key={label} style={{ color: 'white' }}>
              <ListItemText
                primary={label}
                secondary={value || 'N/A'}
                primaryTypographyProps={{ style: { color: 'white' } }}
                secondaryTypographyProps={{ style: { color: 'white' } }}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}

export default function ApplicationPage() {
  const [applicants, setApplicants] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState({});
  const [statusCounts, setStatusCounts] = useState({
    applied: 0,
    rejected: 0,
    accepted: 0,
    waitlisted: 0,
    pending: 0,
  });

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'applications'));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setApplicants(data);
        const counts = {
          applied: data.length,
          rejected: data.filter((app) => app.status === 'Rejected').length,
          accepted: data.filter((app) => app.status === 'Accepted').length,
          waitlisted: data.filter((app) => app.status === 'Waitlisted').length,
          pending: data.filter((app) => app.status === 'Pending').length,
        };
        setStatusCounts(counts);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };
    fetchApplicants();
  }, []);

  const handleOpenModal = (applicant) => {
    setSelectedApplicant(applicant);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const updateApplicantStatus = async (applicantId, newStatus) => {
    try {
      const applicantRef = doc(db, 'applications', applicantId);

      // Get the current applicant from the state
      const currentApplicant = applicants.find(
        (applicant) => applicant.id === applicantId
      );
      const oldStatus = currentApplicant?.status;

      await updateDoc(applicantRef, { status: newStatus });

      // Update the local state of applicants
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === applicantId
            ? { ...applicant, status: newStatus }
            : applicant
        )
      );

      // Update the statusCounts
      setStatusCounts((prevStatusCounts) => {
        const newCounts = { ...prevStatusCounts };
        // Decrease the count of the old status
        if (oldStatus) {
          newCounts[oldStatus.toLowerCase()] =
            prevStatusCounts[oldStatus.toLowerCase()] - 1;
        }
        // Increase the count of the new status
        newCounts[newStatus.toLowerCase()] =
          (prevStatusCounts[newStatus.toLowerCase()] || 0) + 1;
        return newCounts;
      });
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  // Define the columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    {
      field: 'firstName',
      headerName: 'First Name',
      flex: 1,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      flex: 1,
    },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'school', headerName: 'School', flex: 1 },
    { field: 'major', headerName: 'Major', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      flex: 2,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: '#1976D2',
              color: 'white',
              marginRight: 8,
            }}
            onClick={() => handleOpenModal(params.row)}
          >
            View
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              marginRight: 8,
            }}
            onClick={() => updateApplicantStatus(params.id, 'Accepted')}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: '#F44336', color: 'white' }}
            onClick={() => updateApplicantStatus(params.id, 'Rejected')}
          >
            Reject
          </Button>
        </>
      ),
    },
  ];

  const pageStyles = {
    backgroundColor: '#1E1E1E',
    color: 'white',
    minHeight: '100vh',
    padding: '2rem',
  };

  const cardStyles = {
    backgroundColor: '#252526',
    borderRadius: '8px',
    margin: '1rem',
    padding: '1rem',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    color: 'white',
  };

  return (
    <main style={pageStyles}>
      <div
        style={{
          ...cardStyles,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {Object.entries(statusCounts).map(([key, value]) => (
          <div
            key={key}
            className="shadow-lg rounded-lg p-5 flex flex-col items-center justify-center"
          >
            <span className="text-lg font-semibold">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
            <span className="text-2xl font-bold">{value}</span>
          </div>
        ))}
      </div>
      <div style={cardStyles}>
        <h1 className="text-3xl font-bold text-center mb-5">Applications</h1>
        <DataGrid
          rows={applicants}
          columns={columns}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
          disableSelectionOnClick
          className="bg-white"
          autoHeight
        />
      </div>
      <ApplicantModal
        open={modalOpen}
        handleClose={handleCloseModal}
        applicant={selectedApplicant}
      />
    </main>
  );
}
