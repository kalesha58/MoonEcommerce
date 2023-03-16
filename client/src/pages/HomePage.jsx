import React from "react";
import HeroSection from "../components/Layout/HeroSection";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import Services from "../components/Layout/Services";
import Trusted from "../components/Layout/Trusted";
import { GlobalStyle } from "../GlobalStyle";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const resultName=auth.user?.name
  const data = {
    name: resultName
  };
  return (
    <Layout title={"Best-offers"}>
      <GlobalStyle />
      <HeroSection myData={data} />
      <Services/>
    <Trusted/>
    </Layout>
  );
};

export default HomePage;
