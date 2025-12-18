const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPagination = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex justify-end mt-6">
      <div className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 !rounded-full text-sm font-semibold transition-all text-gray-700 hover:bg-gray-300 disabled:opacity-50"
        >
          {"<"}
        </button>

        {getPagination().map((page, i) =>
          typeof page === "number" ? (
            <button
              key={i}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex items-center justify-center !rounded-full text-sm font-semibold transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={i} className="px-2 text-gray-500">
              {page}
            </span>
          )
        )}

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 !rounded-full text-sm font-semibold transition-all text-gray-700 hover:bg-gray-300 disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
