import BookingItemCard from './BookingItemCard';
import '../styles/BookingItem.css';

function BookingList( { appts } ) {
  return (
    <div>
      <ul>
        {appts.map((appt) => (
          <BookingItemCard appt = {appt}/>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;