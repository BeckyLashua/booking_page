import BookingItemCard from './BookingItemCard';
import '../App.css';

function BookingList( { appts } ) {
  return (
    <div>
      <ul>
        {appts.map((appt) => (
          <BookingItemCard 
            key={appt.appt_id} 
            appt = {appt}
          />
        ))}
      </ul>
    </div>
  );
}


export default BookingList;