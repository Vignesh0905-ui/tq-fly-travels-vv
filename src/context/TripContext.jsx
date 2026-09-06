import React, { createContext, useContext, useState, useEffect } from 'react';
import { FEATURED_PACKAGE } from '../data/travelData';

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [myTripItems, setMyTripItems] = useState(() => {
    try {
      const saved = localStorage.getItem('tq_my_trip');
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error('Error loading trip from localStorage:', err);
      return [];
    }
  });

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activePassportModal, setActivePassportModal] = useState(null); // null or service object
  const [activeVisaModal, setActiveVisaModal] = useState(null); // null or visa object
  const [isMyTripOpen, setIsMyTripOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState({ destination: '', travelType: '', date: '' });
  const [toastMessage, setToastMessage] = useState(null);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tq_my_trip', JSON.stringify(myTripItems));
    } catch (err) {
      console.error('Error saving trip to localStorage:', err);
    }
  }, [myTripItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addTripItem = (item) => {
    const existingIndex = myTripItems.findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
      const updated = [...myTripItems];
      updated[existingIndex].travellers = (updated[existingIndex].travellers || 1) + (item.travellers || 1);
      setMyTripItems(updated);
      showToast(`Updated ${item.name || item.title} in My Trip!`);
    } else {
      const newItem = {
        ...item,
        travellers: item.travellers || 1,
        addedAt: new Date().toISOString()
      };
      setMyTripItems([...myTripItems, newItem]);
      showToast(`Added ${item.name || item.title} to My Trip!`);
    }
  };

  const removeTripItem = (itemId) => {
    setMyTripItems(prev => prev.filter(item => item.id !== itemId));
    showToast(`Item removed from My Trip.`);
  };

  const updateItemTravellers = (itemId, travellers) => {
    if (travellers < 1) return;
    setMyTripItems(prev => prev.map(item => item.id === itemId ? { ...item, travellers } : item));
  };

  const clearMyTrip = () => {
    setMyTripItems([]);
    showToast(`My Trip itinerary cleared.`);
  };

  const tripTotal = myTripItems.reduce((acc, item) => {
    const price = item.price || item.offerPrice || item.pricePerNight || 0;
    return acc + (price * (item.travellers || 1));
  }, 0);

  const navigateTo = (page, filter = null) => {
    setCurrentPage(page);
    if (filter) {
      setSearchFilter(prev => ({ ...prev, ...filter }));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <TripContext.Provider value={{
      currentPage,
      setCurrentPage: navigateTo,
      myTripItems,
      addTripItem,
      removeTripItem,
      updateItemTravellers,
      clearMyTrip,
      tripTotal,
      selectedPackage,
      setSelectedPackage,
      activePassportModal,
      setActivePassportModal,
      activeVisaModal,
      setActiveVisaModal,
      isMyTripOpen,
      setIsMyTripOpen,
      searchFilter,
      setSearchFilter,
      toastMessage,
      showToast
    }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => useContext(TripContext);
