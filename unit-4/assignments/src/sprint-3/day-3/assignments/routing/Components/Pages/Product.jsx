import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";

const Product = () => {
  const { id } = useParams();
  const [proData, setProdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [id, page]);

  const getData = async () => {
    try {
      setIsLoading(true);
      let res = await fetch(
        `http://localhost:3000/${id}?_page=${page}&_limit=4`
      );
      let data = await res.json();
      setProdata(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <div className="text-center">
      <CircularProgress />
    </div>
  ) : isError ? (
    <h2 className="text-center text-xl"> Error Loading Data....</h2>
  ) : (
    <>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-4/5 mx-auto">
        {proData.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
      <div className="text-center mt-16">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button disabled={page === 5} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Product;
