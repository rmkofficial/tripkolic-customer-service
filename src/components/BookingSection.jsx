
import BookingCard from "./BookingCard";

const BookingSection = () => {
  // Örnek Booking Detayları
  const bookingDetails = [
    {
      date: "12 Jun 2024",
      bookingNumber: "1283489384",
      description:
        "Phi Phi island tour with speedcatamaran fullday with all faf fun.",
      adult: 2,
      child: 3,
      infant: 1,
      pickupLocation: "Graceland resort and spa",
      startTime: "09:00",
      total: "THB 50000",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Reserved Bölümü */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reserved</h2>
        {bookingDetails.map((details, index) => (
          <BookingCard
            key={index}
            status="reserved"
            details={details}
            onActionClick={(action) => console.log(action)}
          />
        ))}
      </div>

      {/* Booked Bölümü */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Booked</h2>
        {bookingDetails.map((details, index) => (
          <BookingCard
            key={index}
            status="booked"
            details={details}
            onActionClick={(action) => console.log(action)}
          />
        ))}
      </div>

      {/* Completed Bölümü */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Completed</h2>
        {bookingDetails.map((details, index) => (
          <BookingCard
            key={index}
            status="completed"
            details={details}
            onActionClick={(action) => console.log(action)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingSection;
