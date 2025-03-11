"use client";

import { useEffect, useState } from "react";
import { getExamenData, updateExamenItem, deleteExamenItem } from "../lib/api";
import StudentTable from "../components/studenTable";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center mt-8">
        ¿Crees poder lograrlo? Si no confías en ti, ¿quién lo hará?
      </h1>
      <h2 className="text-2xl text-center mt-4">
        Aquí debe de verse tu tabla, ¿cuál tabla? Lee el archivo README
      </h2>
      <StudentTable /> {/* Renderiza el componente StudentTable */}
    </>
  );
}
