'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { CARETAKERS } from '@/data/caretakers';
import Header from '@/components/Header';

const INITIAL_CARETAKERS = CARETAKERS;

export default function UserDashboard() {
  // Router for navigation
  const router = useRouter();

  // State Management
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    careTypes: [], // Start with all types visible
    availabilityDate: '',
    dailyRate: 2000, // Max rate to show all (covers 800-1200 range)
    minRating: 0, // Show all ratings
  });
  const [viewMode, setViewMode] = useState('list');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter Logic
  const filteredCaretakers = useMemo(() => {
    return INITIAL_CARETAKERS.filter((caretaker) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          caretaker.name.toLowerCase().includes(query) ||
          caretaker.city.toLowerCase().includes(query) ||
          caretaker.tags.some(tag => tag.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Care type filter
      if (filters.careTypes.length > 0) {
        const matchesCareType = caretaker.careType.some(type =>
          filters.careTypes.includes(type)
        );
        if (!matchesCareType) return false;
      }

      // Daily rate filter (using dailyRate from data)
      // Check if dailyRate exists, default to 0 if not
      const rate = caretaker.dailyRate || 0;
      if (rate > filters.dailyRate) return false;

      // Rating filter
      if (caretaker.rating < filters.minRating) return false;

      return true;
    });
  }, [searchQuery, filters]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCaretakers.length / itemsPerPage);
  const paginatedCaretakers = filteredCaretakers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Filter Handlers
  const handleCareTypeChange = (careType) => {
    setFilters(prev => ({
      ...prev,
      careTypes: prev.careTypes.includes(careType)
        ? prev.careTypes.filter(type => type !== careType)
        : [...prev.careTypes, careType]
    }));
    setCurrentPage(1);
  };

  const handleRatingClick = (rating) => {
    setFilters(prev => ({ ...prev, minRating: rating }));
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    // Filters are already applied in real-time, this is just for UX
    console.log('Filters applied:', filters);
  };

  const handleResetFilters = () => {
    setFilters({
      careTypes: [],
      availabilityDate: '',
      dailyRate: 2000,
      minRating: 0,
    });
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen">
      {/* Header */}
      <Header activeTab="Dashboard" />

      <div className="flex flex-1">
        {/* Filter Sidebar */}
        <aside className="sticky top-[69px] h-[calc(100vh-69px)] w-80 flex-shrink-0 border-r border-slate-200 bg-white p-6 hidden lg:flex flex-col">
          <div className="flex-1 overflow-y-auto pr-2">
            <h3 className="text-lg font-bold text-text-light mb-4">Filters</h3>
            <div className="space-y-6">
              {/* Care Type */}
              <div>
                <h4 className="font-semibold text-text-light mb-2">Care Type</h4>
                <div className="space-y-2">
                  {['Child Care', 'Elderly Care', 'Special Needs'].map((careType) => (
                    <label key={careType} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.careTypes.includes(careType)}
                        onChange={() => handleCareTypeChange(careType)}
                        className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/50"
                      />
                      <span className="text-sm text-slate-500">{careType}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="font-semibold text-text-light mb-2">Availability</h4>
                <input
                  type="date"
                  value={filters.availabilityDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, availabilityDate: e.target.value }))}
                  className="w-full rounded border-slate-300 bg-background-light text-sm focus:border-primary focus:ring-primary/50"
                />
              </div>

              {/* Daily Rate */}
              <div>
                <h4 className="font-semibold text-text-light mb-2">Daily Rate (Max)</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500">₹100</span>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={filters.dailyRate}
                    onChange={(e) => setFilters(prev => ({ ...prev, dailyRate: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <span className="text-sm text-slate-500">₹2000</span>
                </div>
                <p className="text-center text-sm font-semibold text-primary mt-2">Up to ₹{filters.dailyRate}</p>
              </div>

              {/* Rating */}
              <div>
                <h4 className="font-semibold text-text-light mb-2">Minimum Rating</h4>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleRatingClick(star)}
                      className="material-symbols-outlined text-xl cursor-pointer transition-all hover:scale-110"
                      style={{
                        fontVariationSettings: star <= filters.minRating ? "'FILL' 1" : "'FILL' 0",
                        color: star <= filters.minRating ? '#F5A623' : '#CBD5E1'
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-auto border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={handleApplyFilters}
              className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
            >
              <span className="truncate">Apply Filters</span>
            </button>
            <button
              onClick={handleResetFilters}
              className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-slate-500 hover:bg-slate-100 text-sm font-bold leading-normal tracking-[0.015em] transition-colors"
            >
              <span className="truncate">Reset</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {/* Heading & Search */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <p className="text-text-light text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Find Your Perfect Caretaker</p>
              <div className="w-full max-w-md">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-slate-500 flex bg-white items-center justify-center pl-4 rounded-l-lg border border-r-0 border-slate-300">
                      <span className="material-symbols-outlined text-2xl">search</span>
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-full placeholder:text-slate-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      placeholder="Search by name, city, or skill..."
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Results Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-slate-500 font-medium">
                Showing <span className="font-bold text-text-light">{paginatedCaretakers.length}</span> of <span className="font-bold text-text-light">{filteredCaretakers.length}</span> caretakers
              </p>
              <div className="flex w-full sm:w-auto">
                <div className="flex h-10 w-full sm:w-64 items-center justify-center rounded-lg bg-slate-200/60 p-1">
                  <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-slate-500'} text-sm font-semibold`}>
                    <span className="material-symbols-outlined mr-2 text-xl">list</span>
                    <span className="truncate">List View</span>
                    <input
                      type="radio"
                      name="view-toggle"
                      value="list"
                      checked={viewMode === 'list'}
                      onChange={() => setViewMode('list')}
                      className="invisible w-0"
                    />
                  </label>
                  <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all ${viewMode === 'map' ? 'bg-white shadow-sm text-primary' : 'text-slate-500'} text-sm font-semibold`}>
                    <span className="material-symbols-outlined mr-2 text-xl">map</span>
                    <span className="truncate">Map View</span>
                    <input
                      type="radio"
                      name="view-toggle"
                      value="map"
                      checked={viewMode === 'map'}
                      onChange={() => setViewMode('map')}
                      className="invisible w-0"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Caretakers Grid */}
            {viewMode === 'list' ? (
              <>
                {paginatedCaretakers.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-2xl font-bold text-slate-500">No caretakers found</p>
                    <p className="text-slate-500 mt-2">Try adjusting your filters or search query</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedCaretakers.map((caretaker) => (
                      <div
                        key={caretaker.id}
                        className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                      >
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mb-4"
                          style={{ backgroundImage: `url("${caretaker.image}")` }}
                        />
                        <h3 className="text-lg font-bold text-text-light">{caretaker.name}</h3>
                        <div className="flex items-center gap-1 my-1">
                          <span className="material-symbols-outlined text-accent text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="text-sm font-bold text-slate-500">
                            {caretaker.rating} <span className="font-normal">({caretaker.reviews} reviews)</span>
                          </span>
                        </div>
                        <p className="text-slate-500 text-sm my-2 line-clamp-2">{caretaker.description}</p>
                        <div className="flex flex-wrap justify-center gap-2 my-3">
                          {caretaker.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className={`${index === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary-dark'} text-xs font-semibold px-2.5 py-1 rounded-full`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-xl font-bold text-text-light my-2">
                          ₹{caretaker.dailyRate}<span className="text-sm font-medium text-slate-500">/day</span>
                        </p>
                        <button
                          onClick={() => router.push(`/user/caretaker/${caretaker.id}`)}
                          className="w-full mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-primary/90 transition-colors"
                        >
                          <span className="truncate">View Profile</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-10">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center size-9 rounded-lg text-slate-500 hover:bg-slate-200/60 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">chevron_left</span>
                      </button>

                      {[...Array(totalPages)].map((_, index) => {
                        const pageNum = index + 1;
                        if (
                          pageNum === 1 ||
                          pageNum === totalPages ||
                          (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`flex items-center justify-center size-9 rounded-lg text-sm font-semibold transition-colors ${currentPage === pageNum
                                ? 'bg-primary text-white'
                                : 'text-slate-500 hover:bg-slate-200/60'
                                }`}
                            >
                              {pageNum}
                            </button>
                          );
                        } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                          return <span key={pageNum} className="text-slate-500">...</span>;
                        }
                        return null;
                      })}

                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center size-9 rounded-lg text-slate-500 hover:bg-slate-200/60 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-20 text-center">
                <span className="material-symbols-outlined text-6xl text-slate-500 mb-4">map</span>
                <p className="text-2xl font-bold text-text-light">Map View Coming Soon</p>
                <p className="text-slate-500 mt-2">Interactive map view will be available shortly</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
