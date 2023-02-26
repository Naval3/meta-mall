import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./Api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { range, toQuery } from "lodash";
import { Link, Navigate, useSearchParams } from "react-router-dom";

function ProductListPage() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";
  page = +page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      }

      const List = getProductList(sortBy, query, page, sortType)
        .then(function (products) {
          setProductData(products);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [sort, query, page]
  );

  function handleSearch(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }

  function handleSort(event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="px-3 py-24 mx-6 my-8 bg-white border shadow md:mx-24 md:px-20">
        <div className="flex flex-wrap gap-1 mb-6 md:justify-between">
          <div>
            <input
              className="p-2 border border-gray-400"
              value={query}
              placeholder=" Search..."
              onChange={handleSearch}
            />
          </div>

          <div>
            <select
              className="p-2 border border-gray-400"
              onChange={handleSort}
              value={sort}
            >
              <option value="default">Default sorting</option>
              <option value="title">Sort by title</option>
              <option value="lowToHigh">Sort by price: low to high</option>
              <option value="highToLow">Sort by price: high to low</option>
            </select>
          </div>
        </div>
        {productData.data.length > 0 && (
          <ProductList products={productData.data} />
        )}
        {productData.data.length == 0 && <NoMatching />}

        <div className="mt-12">
          {range(1, productData.meta.last_page + 1).map((pageNo) => (
            <Link
              key={pageNo}
              to={"?" + new URLSearchParams({ ...params, page: pageNo })}
              className={
                "p-3 m-1 hover:bg-primary-dark " +
                (pageNo === page ? "bg-primary-default" : "bg-primary-light")
              }
            >
              {pageNo}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
