import PropTypes from "prop-types";

const BookingCard = ({ status, details, onActionClick }) => {
  // Buton renkleri ve metinleri için mapping
  const actionButtons = {
    reserved: [
      { text: "Complete Payment", color: "bg-yellow-500" },
      { text: "Cancel Reservation", color: "bg-gray-300 text-gray-700" },
      { text: "Message Supplier", color: "bg-orange-500" },
    ],
    booked: [
      { text: "Cancel Reservation", color: "bg-gray-300 text-gray-700" },
      { text: "Message Supplier", color: "bg-orange-500" },
    ],
    completed: [
      { text: "Report", color: "bg-red-500" },
      { text: "Message Supplier", color: "bg-orange-500" },
    ],
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-200">
      <div className="p-6">
        {/* Üst Bilgi */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">{details.date}</p>
          <p className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md text-sm">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </p>
        </div>

        {/* Detaylar */}
        <h3 className="text-xl font-semibold mb-2">
          Booking Number: {details.bookingNumber}
        </h3>
        <p className="text-gray-500 mb-4">{details.description}</p>

        <div className="space-y-1 mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">Adult:</span> {details.adult}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Child:</span> {details.child}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Infant:</span> {details.infant}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Pick-up:</span>{" "}
            {details.pickupLocation}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Start time:</span>{" "}
            {details.startTime}
          </p>
        </div>

        <p className="text-lg font-semibold text-gray-800">
          Total: {details.total}
        </p>

        {/* Butonlar */}
        <div className="mt-6 flex flex-wrap gap-3">
          {actionButtons[status].map((button, index) => (
            <button
              key={index}
              onClick={() => onActionClick(button.text)}
              className={`${button.color} text-white px-4 py-2 rounded-md hover:opacity-90 transition duration-200`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  status: PropTypes.string.isRequired,
  details: PropTypes.shape({
    date: PropTypes.string.isRequired,
    bookingNumber: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    adult: PropTypes.number.isRequired,
    child: PropTypes.number.isRequired,
    infant: PropTypes.number.isRequired,
    pickupLocation: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
  }).isRequired,
  onActionClick: PropTypes.func.isRequired,
};

export default BookingCard;
