const InformationSection = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg w-full border border-gray-200">
      {/* Informations */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Informations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-700">Name:</span> John
            </p>
            <p>
              <span className="font-semibold text-gray-700">Country:</span>{" "}
              America
            </p>
            <p>
              <span className="font-semibold text-gray-700">Birthday:</span> 12
              June 1989
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Passport number:
              </span>{" "}
              u1234567899
            </p>
            <p>
              <span className="font-semibold text-gray-700">Phone number:</span>{" "}
              +1 09342342233
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-700">Surname:</span> Doe
            </p>
          </div>
        </div>
      </div>

      {/* Passengers */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Passengers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-700">Name:</span> Jane
            </p>
            <p>
              <span className="font-semibold text-gray-700">Surname:</span> Doe
            </p>
            <p>
              <span className="font-semibold text-gray-700">Birthday:</span> 12
              June 1989
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Passport number:
              </span>{" "}
              u1234567899
            </p>
            <p>
              <span className="font-semibold text-gray-700">Phone number:</span>{" "}
              +1 09342342233
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
