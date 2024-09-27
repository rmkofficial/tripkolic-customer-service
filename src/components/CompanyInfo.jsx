const CompanyInfo = () => {
  return (
    <div className="bg-white shadow-sm p-4 rounded-md w-full max-w-xs">
      {/* Şirket Bilgileri */}
      <div className="text-center">
        <div className="text-lg font-bold">Orca Travel Co.ltd</div>
        <div className="text-gray-500">Super Host</div>
      </div>

      {/* Değerlendirme Bilgileri */}
      <div className="mt-4 flex justify-between items-center text-center">
        <div>
          <div className="text-xl font-semibold text-yellow-600">4.80</div>
          <div className="text-gray-500">Rating</div>
        </div>
        <div>
          <div className="text-xl font-semibold text-yellow-600">100</div>
          <div className="text-gray-500">Reviews</div>
        </div>
        <div>
          <div className="text-xl font-semibold text-yellow-600">4</div>
          <div className="text-gray-500">Years hosting</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
