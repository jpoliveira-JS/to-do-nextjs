import { useState, useMemo, useEffect } from "react";

export function useTable<T extends { id: string }>() {
  const [data, setData] = useState<T[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));

  const total = data.length;

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  const handleToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const addItem = (item: T) => {
    setData((prev) => [...prev, item]);
    handleToast("Tarefa adicionada");
  };

  const removeItem = (id: string) => {
    setData((prev) => prev.filter((e) => e.id !== id));
    if (currentData.length === 1) prevPage();
    handleToast("Tarefa excluída");
  };

  const updateItem = (newItem: T) => {
    setData((prev) =>
      prev.map((item) => (item.id === newItem.id ? newItem : item))
    );
    if ("completed_at" in newItem && !!newItem.completed_at) {
      handleToast("Tarefa concluída");
    }
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
    if (!hasLoaded) {
      const savedData = localStorage.getItem("savedData");
      setData(savedData ? (JSON.parse(savedData) as T[]) : []);
      setHasLoaded(true);
      return;
    }
    localStorage.setItem("savedData", JSON.stringify(data));
  }, [data]);

  return {
    data,
    currentData,
    currentPage,
    totalPages,
    total,
    itemsPerPage,
    showToast,
    toastMessage,
    setShowToast,
    addItem,
    removeItem,
    updateItem,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage,
  };
}
