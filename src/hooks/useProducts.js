// This hook loads products and tracks the request state.
import { useEffect, useState } from "react";
import { storeContent } from "../data/storeContent";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

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

    // This cleanup cancels the request when the consumer unmounts.
    return () => controller.abort();
  }, []);

  return { products, status, error };
}
