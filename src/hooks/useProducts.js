// This hook loads products and provides a retry action for failed requests.
import { useEffect, useState } from "react";
import { storeContent } from "../data/storeContent";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [requestNumber, setRequestNumber] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    // This function requests products and records the result.
    async function loadProducts() {
      setStatus("loading");
      setError("");

      try {
        const response = await fetch(storeContent.api.productsUrl, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(storeContent.catalog.errorMessage);
        }

        const result = await response.json();

        if (!Array.isArray(result)) {
          throw new Error(storeContent.catalog.errorMessage);
        }

        setProducts(result);
        setStatus("success");
      } catch (requestError) {
        if (requestError.name === "AbortError") {
          return;
        }

        setError(storeContent.catalog.errorMessage);
        setStatus("error");
      }
    }

    loadProducts();

    // This cleanup cancels the request when it is no longer needed.
    return () => controller.abort();
  }, [requestNumber]);

  // This function starts another request after an error.
  function retry() {
    setRequestNumber((currentNumber) => currentNumber + 1);
  }

  return { products, status, error, retry };
}
