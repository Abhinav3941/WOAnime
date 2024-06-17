"use client";
import React from "react";
import styles from "./page.module.css";
import Buton from "@/components/Buton/Buton";
import Image from "next/image";
import { info } from "@/app/portfolio/[category]/data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = info[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
      </div>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.imgContainer}>
            <Image
              src={item.path}
              className={styles.img}
              height={800}
              width={800}
              alt="#"
            />
          </div>
          <div> {item.desc}</div>
          <div className={styles.content}>
            <div>
            
              <Buton text="DOWNLOAD" url="#"  className= {styles.dwnbtn} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;