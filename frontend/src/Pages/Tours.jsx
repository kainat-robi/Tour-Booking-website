import React, { useEffect, useState } from "react";
import CommanSection from "../shared/CommanSection";
import "../styles/tour.css";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/searchBer";
import Newsletter from "../shared/NewsLetter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      <CommanSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">loading....</h4>}
          {loading && <h4 className="text-center pt-5">{error}</h4>}

          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg="3" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg='12'>
              <div className="pagination d-flex align-item-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span key={number} onClick={()=>setPage(number)}
                    className={page===number ? 'active__page' : ''}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;