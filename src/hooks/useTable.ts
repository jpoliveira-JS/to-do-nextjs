'use client';
import { useState, useMemo, useEffect } from "react";

export function useTable<T extends {id: string}>() {

  const [data, setData] = useState<T[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));

  const total = data.length

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  const addItem = (item: T) => {
    setData((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setData((prev) => prev.filter((e) => e.id !== id));
  };

  const updateItem = (newItem: T) => {
    setData((prev) => prev.map((item) => (item.id === newItem.id ? newItem : item)));
  };

  const goToPage = (page: number) => {
    setCurrentPage((prev) => {
      if (page < 1) return 1;
      if (page > totalPages) return totalPages;
      return page;
    });
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  useEffect(() => {
    if(!hasLoaded) {
      const savedData = localStorage.getItem('savedData')
      setData(savedData ? JSON.parse(savedData) as T[] : [])
      setHasLoaded(true)
      return
    }
    localStorage.setItem('savedData', JSON.stringify(data))
  }, [data])

  return {
    data,
    currentData,
    currentPage,
    totalPages,
    total,
    itemsPerPage,
    addItem,
    removeItem,
    updateItem,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage
  };
}