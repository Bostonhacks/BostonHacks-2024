import React from 'react';
import Title from './Title';

const ScheduleComponent = ({ title, data }) => {
  return (
    <div className="flex flex-col items-center text-white w-full bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">

      <table className="w-full text-white">
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="w-full">
              <td className="font-sevenSegment font-bold text-xl lg:text-4xl p-4 text-right pr-8 w-1/3 tracking-wide">
                {item.time}
              </td>
              <td className="font-carroisGothic text-2xl lg:text-4xl p-4 border-l-4 text-left pl-8 w-2/3" style={{ borderColor: '#FC4A1A' }}>
                {item.tableEntry}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Schedule() {
  const saturday = [
    { time: '9:00 AM', tableEntry: 'Check In' },
    { time: '10:00 AM', tableEntry: 'Opening Ceremony' },
    { time: '10:30 AM', tableEntry: 'Hacking Begins!' },
    { time: '11:00 AM', tableEntry: 'Hackathon 101' },
    { time: '11:00 AM', tableEntry: 'Intro to GitHub' },
    { time: '12:00 PM', tableEntry: 'Lunch' },
    { time: '1:00 PM', tableEntry: 'Patient Safety Workshop' },
    { time: '1:00 PM', tableEntry: 'MLH Intro to Figma' },
    { time: '2:00 AM', tableEntry: 'Intro to Web Dev' },
    { time: '2:00 AM', tableEntry: 'Intro to APIs' },
    { time: '3:00 AM', tableEntry: 'MLH Tech Together' },
    { time: '3:00 AM', tableEntry: 'Intro to Mobile App Dev' },
    { time: '4:00 AM', tableEntry: 'Intro to Databases' },
    { time: '5:00 AM', tableEntry: 'Resume Workshop' },
    { time: '6:30 PM', tableEntry: 'Dinner' },
    { time: '7:30 PM', tableEntry: 'MLH MSPaint with Bob Ross' },
    { time: '8:30 PM', tableEntry: 'Intro to Leetcode' },
    { time: '8:30 PM', tableEntry: 'Video Games' },
    { time: '9:30 PM', tableEntry: 'Sleeping Spaces Open' },
    { time: '10:30 PM', tableEntry: 'Late Night Activities' },
    { time: '12:00 AM', tableEntry: 'Midnight Snack' },

    // Add more entries as needed
  ];

  const sunday = [
    { time: '7:50 AM', tableEntry: 'Breakfast' },
    { time: '9:00 AM', tableEntry: 'Suprise Workshop' },
    { time: '9:30 AM', tableEntry: 'Submissions Due' },
    { time: '11:00 AM', tableEntry: 'Closing Ceremony' },
    { time: '12:00 PM', tableEntry: 'End of BostonHacks 2024' },
    // Add more entries as needed
  ];

  return (
    <div id="schedule" className="flex justify-center items-center flex-col w-full overflow-clip py-20">
      <Title>SCHEDULE</Title>

      <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 content-between px-10 lg:px-20">
        <ScheduleComponent className="grid-cols-1" title="Saturday" data={saturday} />
        <ScheduleComponent className="grid-cols-1" title="Sunday" data={sunday} />
      </div>
    </div>
  );
}
