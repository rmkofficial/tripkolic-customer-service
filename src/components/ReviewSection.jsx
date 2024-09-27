const ReviewSection = () => {
  return (
    <div>
      <div className="space-y-4">
        {/* Reviews */}
        <h2 className="text-2xl font-semibold mb-4">Write a review</h2>
        {/* Yorum Ekleme Formu */}
        <form className="space-y-4">
          <textarea
            className="w-full p-4 border rounded-md"
            placeholder="Write your review here..."
          ></textarea>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="confirmation" />
            <label htmlFor="confirmation" className="text-gray-600">
              I certify that this review is based on my own experience...
            </label>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          >
            Send review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <div className="bg-white shadow-sm p-4 rounded-md mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">Orca Travel Co.ltd</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur...
              </p>
            </div>
            <p className="text-gray-500">5 days ago</p>
          </div>
          <div className="mt-4">
            {/* Yıldızlar */}
            <div className="text-yellow-500">⭐⭐⭐⭐</div>
          </div>
        </div>
        {/* Daha fazla yorum buraya eklenebilir */}
      </div>
    </div>
  );
};

export default ReviewSection;
